import { useEffect, useState } from "react";
import SnapShot from "./SnapShot/SnapShot";
import "bootstrap/dist/css/bootstrap.min.css";
import loader from "./assets/loader/loader.gif";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <img src={loader} style={{width:"60px"}}  alt="Loading...." />
      </div>
    );
  }

  return (
    <>
      <SnapShot />
    </>
  );
};

export default App;
