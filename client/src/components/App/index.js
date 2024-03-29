import "./App.css";
import NavigationBar from "../layout/Navigation";
import HomePage from "../Home";
import Footer from "../layout/Footer";
import Learning from "../Learning";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LearnByTopic from "../LearnByTopic";
import AboutUs from "../layout/AboutUs";
import Dictionary from "../Dictionary";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/learning",
      element: <Learning />,
    },
    {
      path: "/learning/learn-by-topic",
      element: <LearnByTopic />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/dictionary",
      element: <Dictionary />,
    },
  ]);
  return (
    <div className="App">
      <NavigationBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
