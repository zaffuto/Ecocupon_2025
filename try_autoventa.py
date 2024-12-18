from autoventa_api import AutoventaAPI, AuthenticationError, ProductError
import json

def print_json(data):
    """Print JSON data in a readable format"""
    print(json.dumps(data, indent=2, ensure_ascii=False))

def main():
    # Initialize API client
    api = AutoventaAPI(username="doc", password="dsarhoya")
    
    try:
        # Get list of products
        print("\n1. Getting list of products...")
        products = api.get_products(page=1, limit=5)  # Limiting to 5 products for readability
        print("\nProducts retrieved:")
        print_json(products)
        
        # If we got products, try to get details of the first one
        if products.get('data') and len(products['data']) > 0:
            first_product_id = products['data'][0]['id']
            print(f"\n2. Getting details for product {first_product_id}...")
            product_details = api.get_product(str(first_product_id))
            print("\nProduct details:")
            print_json(product_details)
            
    except AuthenticationError as e:
        print(f"\n❌ Authentication Error: {str(e)}")
    except ProductError as e:
        print(f"\n❌ Product Error: {str(e)}")
    except Exception as e:
        print(f"\n❌ Unexpected Error: {str(e)}")

if __name__ == "__main__":
    main()
