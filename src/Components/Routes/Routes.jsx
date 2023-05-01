import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe/ChefRecipe";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'chefRecipe/:id',
                element: <ChefRecipe/>,
                loader: ({params}) => fetch(`http://localhost:4000/recipe/${params.id}`)
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
])

export default route;