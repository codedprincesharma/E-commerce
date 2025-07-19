import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../stores/actions/ProductActions";
import { useDispatch } from "react-redux";

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productHandler = (product) => {
    console.log(product);
    product.id = nanoid();
    dispatch(asyncCreateProduct());
    reset;
    navigate("/products");
  };

  return (
    <form
      onSubmit={handleSubmit(productHandler)}
      className="flex flex-col p-20 justify-center items-start  text-white "
    >
      <input
        className="outline-0 border-b-2 p-2 mt-2 text-2xl bg-transparent"
        type="text"
        {...register("title")}
        placeholder="Title"
      />
      <input
        id="file-upload"
        type="url"
        {...register("image")}
        className=" w-1/2 border-b1 p-2 mt-2 text-2xl bg-transparent"
      />
      <textarea
        className="outline-0 border-b-2 p-2 mt-2 text-2xl bg-transparent block"
        type="text"
        {...register("catogary")}
        placeholder="Category"
      ></textarea>
      <input
        className="outline-0 border-b-2 p-2 mt-2 text-2xl bg-transparent"
        type="text"
        {...register("description")}
        placeholder="Description"
      />
      y
      <input
        className="outline-0 border-b-2 p-2 mt-2 text-2xl bg-transparent"
        type="text"
        {...register("price")}
        placeholder="Price"
      />
      <button type="submit" className="px-4 py-2.5 bg-blue-600 mt-4 rounded">
        Create Product
      </button>
    </form>
  );
};

export default CreateProduct;
