// import { Route, redirect } from 'react-router-dom'

// // create component
// // pass in children ~ spread operator
// const PrivateRoute = ({element: Component, ...rest}) => {
//     // test that the private route is working
//     console.log('Private route works')
//     console.log('Element', Component)
//     return(
//         // put rest in the route
//         <Route {...rest} element={Component} />
//     )
// }

// export default PrivateRoute


import React from 'react'
import { Route, Navigate } from 'react-router-dom'

// create component
// pass in children ~ spread operator
const PrivateRoute = ({children, ...rest}) => {
    // test that the private route is working
    console.log('Private route works')
    const authenticated = false
    return(
        // put rest in the route
        <>{!authenticated ? <Navigate to="/login"/> : children}</>
    )
}

export default PrivateRoute