import { useState } from "react";
import { createNewCategory } from "../../api/category";

export default function Category() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  async function handleAddCategory() {
    await createNewCategory({
      name: categoryName,
      description: categoryDescription,
    });
    console.log("created successfully");
  }

  return (
    <div>
      <h1>Category</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Category Name"
          value={categoryName}
          onChange={(e) => {
            setCategoryName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Category Description"
          value={categoryDescription}
          onChange={(e) => setCategoryDescription(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
    </div>
  );
}
