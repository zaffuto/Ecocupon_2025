import unittest
from unittest.mock import patch, Mock
from autoventa_api import AutoventaAPI, AuthenticationError, ProductError

class TestAutoventaAPI(unittest.TestCase):
    def setUp(self):
        self.api = AutoventaAPI(username="doc", password="dsarhoya")
        
    @patch('requests.post')
    def test_authentication_success(self, mock_post):
        # Mock successful authentication response
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {"token": "test_token"}
        mock_post.return_value = mock_response
        
        self.api.authenticate()
        self.assertEqual(self.api.token, "test_token")
        
    @patch('requests.post')
    def test_authentication_failure(self, mock_post):
        # Mock failed authentication response
        mock_post.side_effect = Exception("Authentication failed")
        
        with self.assertRaises(AuthenticationError):
            self.api.authenticate()
            
    @patch('requests.get')
    def test_get_products_success(self, mock_get):
        # Mock successful products response
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "data": [
                {"id": 1, "name": "Product 1"},
                {"id": 2, "name": "Product 2"}
            ]
        }
        mock_get.return_value = mock_response
        
        # Mock authentication
        self.api.token = "test_token"
        self.api.token_expires_at = float('inf')  # Never expires for test
        
        products = self.api.get_products()
        self.assertEqual(len(products["data"]), 2)
        
    @patch('requests.get')
    def test_get_products_failure(self, mock_get):
        # Mock failed products response
        mock_get.side_effect = Exception("Failed to get products")
        
        # Mock authentication
        self.api.token = "test_token"
        self.api.token_expires_at = float('inf')
        
        with self.assertRaises(ProductError):
            self.api.get_products()
            
    @patch('requests.get')
    def test_get_product_success(self, mock_get):
        # Mock successful product response
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {"id": 1, "name": "Product 1"}
        mock_get.return_value = mock_response
        
        # Mock authentication
        self.api.token = "test_token"
        self.api.token_expires_at = float('inf')
        
        product = self.api.get_product("1")
        self.assertEqual(product["name"], "Product 1")
        
    @patch('requests.get')
    def test_get_product_failure(self, mock_get):
        # Mock failed product response
        mock_get.side_effect = Exception("Failed to get product")
        
        # Mock authentication
        self.api.token = "test_token"
        self.api.token_expires_at = float('inf')
        
        with self.assertRaises(ProductError):
            self.api.get_product("1")

if __name__ == '__main__':
    unittest.main()
