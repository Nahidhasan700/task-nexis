import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Pages/LayoutMain/Main'
import Login from '../Pages/Login/Login'
import SignUp1 from '../Pages/SignUp/SignUp1/SignUp1';
import SignUp2 from '../Pages/SignUp/SignUp2/SignUp2'
import SignUp3 from '../Pages/SignUp/SignUp3/SignUp3'
import AttendanceForm from '../Pages/AttendenceForm/AttendenceForm'



const router = createBrowserRouter([
    {
        path: '/',
        element : <Main></Main>,
        children: [ 
            { path:   '/', element: <SignUp1></SignUp1> },
            { path: '/Login', element: <Login></Login> },
            { path: '/SignUp2', element: <SignUp2></SignUp2> },
            { path: '/SignUp3', element: <SignUp3></SignUp3>},
           

           
        ]
    },
    { path: '/AttendanceForm', element: <AttendanceForm></AttendanceForm>}
]

)
export default router;