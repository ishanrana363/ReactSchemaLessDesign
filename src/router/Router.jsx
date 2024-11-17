import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import UserInsert from "../pages/UserInsert";
import AllUsers from "../pages/AllUsers";


export const router = createBrowserRouter([
    {
        path: "/",
        element : <Layout></Layout>,
        children : [
            {
                path: "/",
                element: <UserInsert />
            },
            {
                path: "all-users",
                element: <AllUsers />
            }
        ]
    }
]);