import Home from "./routes/home/home.componet";
import { Routes, Route } from "react-router-dom";
import "./categories.styles.scss";
import Navigation from "./routes/navigation/navigation.componet";
import Authentication from "./routes/authentication/authentication.componet";
import Shop from "./routes/shop/shop.componet";
import Checkout from "./routes/checkout/checkout.componet";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="shop/*" element={<Shop></Shop>}></Route>
        <Route path="auth" element={<Authentication></Authentication>}></Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
