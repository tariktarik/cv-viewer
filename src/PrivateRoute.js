import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ render: Component, isLogin, ...rest }) => {
  // Add your own authentication on the below line.
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
