import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import AppRouter from "./Router/AppRouter";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 0,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <AppRouter />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
