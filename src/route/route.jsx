import {Navigate, createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Catagory from "../pages/home/Catagory/Catagory";
import CatagoryLayout from "../layout/CatagoryLayout";
import News from "../pages/news/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/login/Login";
import Register from "../pages/reg/Register";
import Career from "../pages/career/Career";
import PrivateRoute from "../providers/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
     path:"/",
     element: <LoginLayout></LoginLayout>,
     children:[
      {
        path:"/",
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path:'/career',
        element:<PrivateRoute><Career></Career></PrivateRoute>,

      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      }
     ]
  },
    {
      path: "category",
      element: <MainLayout></MainLayout>,
      children:[
      //   {
      //   path: "/",
      //   element: <Catagory></Catagory>,
      //   loader: () =>fetch("http://localhost:5000/news")
      // },
      {
        path:":id",
        element: <Catagory></Catagory>,
        loader:({params})=> fetch(`https://the-news-today-server-monjurgithub.vercel.app/catagories/${params.id}`)
      }
    ]
    },
    {
      path:"news",
      element: <CatagoryLayout></CatagoryLayout>,
      children:[
        {
          path: ":id",
          element: <PrivateRoute><News></News></PrivateRoute>,
          loader: ({params})=>fetch(`https://the-news-today-server-monjurgithub.vercel.app/news/${params.id}`)
        }
      ]
    }
  ]);
  