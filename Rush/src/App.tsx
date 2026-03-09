import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {useState, useEffect} from "react";
import RootLayout from "./components/RootLayout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Works from "./pages/Works.tsx";
import Contact from "./pages/Contact.tsx";
import Loader from "./components/Loader.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/home", element: <Home/>},
            {path: "/about", element: <About/>},
            {path: "/works", element: <Works/>},
            {path: "/contact", element: <Contact/>},
        ],
    },
]);

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return loading ? <Loader/> : <RouterProvider router={router}/>;
}

export default App;
