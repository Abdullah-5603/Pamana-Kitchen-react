import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe";

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
            }
        ]
    }
])

export default route;