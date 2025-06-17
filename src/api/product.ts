interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export async function createNewProduct(product: Product) {
  await fetch("http://localhost:8000/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
    }),
  });
}

export async function getAllProducts() {
  const response = await fetch("http://localhost:8000/product");
  const data = await response.json();
  return data;
}

export async function uploadProductImage(formData: FormData) {
  const response = await fetch("http://localhost:8000/product-image", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
}

export async function updateProduct(product: Product) {
  await fetch(`http://localhost:8000/product/${product._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
}
