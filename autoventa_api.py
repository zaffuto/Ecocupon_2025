import requests
import os
from typing import Dict, List, Optional
from datetime import datetime
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger('AutoventaAPI')

class AutoventaAPIError(Exception):
    """Custom exception for Autoventa API errors"""
    pass

class AuthenticationError(AutoventaAPIError):
    """Raised when authentication fails"""
    pass

class ProductError(AutoventaAPIError):
    """Raised when product operations fail"""
    pass

class AutoventaAPI:
    LOGIN_URL = "https://app.autoventa.io/login-api/1/login"
    API_BASE_URL = "https://app.autoventa.io/api/1/companies"
    
    def __init__(self, username: str, password: str, company: str = None):
        self.username = username
        self.password = password
        self.company = company
        self.token = None
        self.token_expires_at = None
        
    def authenticate(self) -> None:
        """Authenticate with the Autoventa API"""
        try:
            response = requests.get(
                self.LOGIN_URL,
                auth=(self.username, self.password),
                timeout=10
            )
            response.raise_for_status()
            
            data = response.json()
            self.token = data.get("token")
            self.company = data.get("company", self.company)
            
            if not self.company:
                raise AuthenticationError("Company ID is required and was not provided or returned by the API")
                
            # Assuming token expires in 24 hours, adjust if different
            self.token_expires_at = datetime.now().timestamp() + (24 * 3600)
            
            logger.info("Authentication successful")
            
        except requests.exceptions.Timeout:
            logger.error("Authentication request timed out")
            raise AuthenticationError("Authentication request timed out")
        except requests.exceptions.RequestException as e:
            logger.error(f"Authentication failed: {str(e)}")
            raise AuthenticationError(f"Authentication failed: {str(e)}")
            
    def _is_token_valid(self) -> bool:
        """Check if the current token is valid"""
        if not self.token or not self.token_expires_at:
            return False
        return datetime.now().timestamp() < self.token_expires_at
            
    def get_headers(self) -> Dict:
        """Get headers with authentication token"""
        if not self._is_token_valid():
            self.authenticate()
        return {
            "Authorization": f"Bearer {self.token}",
            "Content-Type": "application/json"
        }
        
    def get_products(self, page: int = 1, limit: int = 100) -> Dict:
        """
        Get list of products
        
        Args:
            page: Page number for pagination
            limit: Number of items per page
            
        Returns:
            Dict containing products data
            
        Raises:
            ProductError: If the API request fails
        """
        try:
            url = f"{self.API_BASE_URL}/{self.company}/products.json"
            response = requests.get(
                url,
                headers=self.get_headers(),
                timeout=10
            )
            response.raise_for_status()
            
            data = response.json()
            logger.info(f"Successfully retrieved products")
            return data
            
        except requests.exceptions.Timeout:
            logger.error("Request timed out while fetching products")
            raise ProductError("Request timed out while fetching products")
        except requests.exceptions.RequestException as e:
            logger.error(f"Failed to get products: {str(e)}")
            raise ProductError(f"Failed to get products: {str(e)}")
        
    def get_product(self, product_id: str) -> Dict:
        """
        Get a specific product by ID
        
        Args:
            product_id: The ID of the product to retrieve
            
        Returns:
            Dict containing product data
            
        Raises:
            ProductError: If the API request fails
        """
        try:
            url = f"{self.API_BASE_URL}/{self.company}/products/{product_id}.json"
            response = requests.get(
                url,
                headers=self.get_headers(),
                timeout=10
            )
            response.raise_for_status()
            
            data = response.json()
            logger.info(f"Successfully retrieved product {product_id}")
            return data
            
        except requests.exceptions.Timeout:
            logger.error(f"Request timed out while fetching product {product_id}")
            raise ProductError(f"Request timed out while fetching product {product_id}")
        except requests.exceptions.RequestException as e:
            logger.error(f"Failed to get product {product_id}: {str(e)}")
            raise ProductError(f"Failed to get product {product_id}: {str(e)}")

    def get_product_measurement_units(self, product_id: str) -> Dict:
        """
        Get measurement units for a specific product
        
        Args:
            product_id: The ID of the product
            
        Returns:
            Dict containing product measurement units data
        """
        try:
            url = f"{self.API_BASE_URL}/{self.company}/products/{product_id}/measurementunits.json"
            response = requests.get(
                url,
                headers=self.get_headers(),
                timeout=10
            )
            response.raise_for_status()
            
            data = response.json()
            logger.info(f"Successfully retrieved measurement units for product {product_id}")
            return data
            
        except requests.exceptions.RequestException as e:
            logger.error(f"Failed to get measurement units for product {product_id}: {str(e)}")
            raise ProductError(f"Failed to get measurement units: {str(e)}")

# Example usage
if __name__ == "__main__":
    api = AutoventaAPI(username="doc", password="dsarhoya")
    
    try:
        # First authenticate
        api.authenticate()
        print("Authentication successful!")
        
        # Get products
        products = api.get_products()
        print("\nProducts retrieved successfully!")
        print(f"Products data: {products}")
        
        # If we have products, get details of the first one
        if products and len(products) > 0:
            first_product = products[0]
            product_id = first_product.get('id')
            if product_id:
                product_detail = api.get_product(product_id)
                print(f"\nProduct detail retrieved: {product_detail}")
                
                # Get measurement units for this product
                measurement_units = api.get_product_measurement_units(product_id)
                print(f"\nProduct measurement units: {measurement_units}")
                
    except AuthenticationError as e:
        print(f"Authentication Error: {str(e)}")
    except ProductError as e:
        print(f"Product Error: {str(e)}")
    except Exception as e:
        print(f"Unexpected Error: {str(e)}")
