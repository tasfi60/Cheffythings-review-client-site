import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../AllPages/Home/Home/Home";
import Blog from "../../AllPages/Blog/Blog";
import Login from "../../AllPages/Login/Login";
import Register from "../../AllPages/Register/Register";
import Services from "../../AllPages/Services/Services";
import SingleServicesDetails from "../../AllPages/SingleServicesDetails/SingleServicesDetails";
import ReviewForm from "../../AllPages/ReviewForm/ReviewForm";
import Myreview from "../../AllPages/Myreview/Myreview";
import AddService from "../../AllPages/AddService/AddService";
import UpdateReview from "../../AllPages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children :[
            {
                path:'/',
                loader: () => fetch ('http://localhost:5000/homeservices'),
                element: <Home></Home>
            },
            {
                path:'/Services',
                loader: () => fetch ('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path:'/Services/:id',
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                     
                },
                element: <SingleServicesDetails></SingleServicesDetails>
            },
            {
                path:'/Blog',
                element: <Blog></Blog>
            },
            {
                path:'/Review/:id',
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                     
                },
                element: <ReviewForm></ReviewForm>
            },
            {
                path:'/Myreview',
                element: <PrivateRoute><Myreview></Myreview></PrivateRoute>
            },
            {
                path:'/Addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/Updatereview/:id',
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/review/${params.id}`)
                     
                },
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>
            },
            {
                path:'/Login',
                element: <Login></Login>
            },
            {
                path:'/Register',
                element: <Register></Register>
            },
        ]       
    },

    { path: '*',
    element: <div><h2 className='mt-5'>404 ! This route is not found</h2></div> 
   }
]);