import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
// import RootLayouts2 from "./layouts/RootLayouts2";
import Layouts from "./layouts/Layouts";

// import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-300 overflow-hidden ">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
