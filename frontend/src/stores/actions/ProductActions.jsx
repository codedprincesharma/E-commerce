import axios from "../../api/axiosconfig";
import { loadproduct } from "../reducers/ProductSlice";

// Load all products
export const asynloadProducts = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/products");
    dispatch(loadproduct(res.data));
  } catch (error) {
    console.log(error);
  }
};

// Create a product and reload all products
export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    dispatch(asynloadProducts()); // Refresh product list after creation
  } catch (error) {
    console.error("Product creation error:", error);
  }
};
