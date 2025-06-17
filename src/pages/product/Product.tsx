import { useEffect, useState } from "react";
import { getAllCategories } from "../../api/category";
import {
  createNewProduct,
  getAllProducts,
  updateProduct,
  uploadProductImage,
} from "../../api/product";

export default function Product() {
  const [listOfCategory, setListOfCategory] = useState<any>([]);
  const [listOfProduct, setListOfProduct] = useState<any>([]);
  const [currentProductId, setCurrentProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productCategory, setProductCategory] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  async function getProducts() {
    const data = await getAllProducts();
    console.log(data, "@data");
    setListOfProduct(data);
  }

  function handleEditProduct(product: any) {
    setIsEditMode(true);
    setCurrentProductId(product._id);
    setProductName(product.name);
    setProductDescription(product.description);
    setProductPrice(product.price);
    setProductCategory(product.category._id);
  }

  async function handleUpdateProduct() {
    await updateProduct({
      _id: currentProductId,
      name: productName,
      description: productDescription,
      price: productPrice,
      category: productCategory,
    });
    getProducts();
    setIsEditMode(false);
    setCurrentProductId("");
    setProductName("");
    setProductDescription("");
    setProductPrice(0);
    setProductCategory("");
  }

  useEffect(() => {
    async function getCategory() {
      const allCategory = await getAllCategories();
      setListOfCategory(allCategory);
    }

    getCategory();
    getProducts();
  }, []);

  async function handleAddProduct() {
    console.log(productCategory, productName, productDescription, productPrice);
    await createNewProduct({
      name: productName,
      description: productDescription,
      price: productPrice,
      category: productCategory,
    });
    console.log("created successfully");
  }

  // async function handleFileChange(e: any) {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   const data = await uploadProductImage(formData);
  //   console.log(data);
  // }

  return (
    <div>
      <h1>Product</h1>
      <div className="my-4 mx-4">
        <input
          type="text"
          placeholder="Enter Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Product Price"
          value={productPrice}
          onChange={(e) => {
            console.log(e.target.value);
            setProductPrice(+e.target.value);
          }}
        />
        <select
          value={productCategory}
          onChange={(e) => {
            setProductCategory(e.target.value);
          }}
        >
          {listOfCategory.map((category: any) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        {/* <div className="input-group">
          <input id="file" type="file" onChange={handleFileChange} />
        </div> */}
        {isEditMode ? (
          <button
            className="bg-green-500 text-white px-2 py-1 rounded-md"
            onClick={handleUpdateProduct}
          >
            Edit Product
          </button>
        ) : (
          <button
            onClick={handleAddProduct}
            className="bg-blue-500 text-white px-2 py-1 rounded-md"
          >
            Add Product
          </button>
        )}
      </div>

      <table className="border border-1 border-solid border-slate-300 rounded-md w-full text-center">
        <thead>
          <tr className="p-2">
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listOfProduct.map((product: any) => (
            <tr key={product._id} className="p-2">
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product?.category?.name}</td>
              <td>
                <button
                  className=" px-2 py-1 rounded-md bg-gray-500 mx-2 text-white"
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
