import { Redirect, Route } from "react-router";


export default function LoginGaurd({ Comp , isLogged, ...rest }) {
    return (
        //route with render function
        // if user is not logged in then render the passed component as Comp from props and the rest of props as attributes like (exact and path, etc...)
        //if user is logged then redirect to homepage
        <Route {...rest} render={props => {
            if (isLogged === false && isLogged != null) {
                return <Comp {...props} />

            } else if(isLogged === true) {
                return <Redirect to={{
                    pathname: "/",
                    state: {
                        from: props.location
                    }
                }} />
            }

        }} />
    )
}