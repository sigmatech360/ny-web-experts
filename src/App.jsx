import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import AppRouter from "./Router/AppRouter";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 300,
    });
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
