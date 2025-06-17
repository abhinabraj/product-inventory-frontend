interface Category {
  name: string;
  description: string;
}

export async function getAllCategories() {
  const response = await fetch("http://localhost:8000/category");
  return response.json();
}

export async function createNewCategory(category: Category) {
  const response = await fetch("http://localhost:8000/category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  return response.json();
}
