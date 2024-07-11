import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import { ProgressBarLoader } from "./components/shared/loaders/Loaders";
import { useEffect, useState } from "react";
import MainLayout from "./components/layouts/mainlayout/MainLayout";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after a delay
    }, 2000); // Adjust delay time as needed

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  // Render loading spinner or content based on the loading state
  const renderContent = () => {
    if (isLoading) {
      return (
        <section className="relative h-screen bg-#ededff w-full flex flex-col justify-center items-center">
          <section className="w-36">
          </section>
          <section><ProgressBarLoader /></section>
        </section>
      );
    } else {
      return (
        <section className="App text-Plus">
          <RouterProvider router={router} />
          <ToastContainer />
        </section>
      );
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} /> */}
      </>
    )
  );
  return renderContent();
}

export default App;
