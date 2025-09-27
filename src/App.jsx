import "./App.css";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Management from "./Component/Management";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Management></Management>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}
export default App;
