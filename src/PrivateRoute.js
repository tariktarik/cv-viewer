import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ comp: Component, ...rest }) => {
  const userIsLoggedIn = () => localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={(props) =>
        userIsLoggedIn() ? (
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
