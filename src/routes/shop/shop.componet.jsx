import { Route, Routes } from "react-router-dom";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.componet";
import Category from "../category/category.componet";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
      <Route path=":category" element={<Category></Category>}></Route>
    </Routes>
  );
};

export default Shop;
