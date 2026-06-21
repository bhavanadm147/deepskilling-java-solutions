class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}

public class Main {

    
    public static Product linearSearch(Product[] products, int targetId) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == targetId) {
                return products[i];
            }
        }
        return null;
    }

    
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {

        
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Book", "Education")
        };

        int targetId = 104;

        
        Product result1 = linearSearch(products, targetId);
        if (result1 != null) {
            System.out.println("Linear Search Found: " + result1.productName + " - " + result1.category);
        } else {
            System.out.println("Product not found using Linear Search");
        }

       
        Product result2 = binarySearch(products, targetId);
        if (result2 != null) {
            System.out.println("Binary Search Found: " + result2.productName + " - " + result2.category);
        } else {
            System.out.println("Product not found using Binary Search");
        }
    }
}
