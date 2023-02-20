import React from 'react'

const LoginPage = props => {
    
    const LoginHandler = () => {
        props.LoginHandler()
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={LoginHandler}>Login</button>
        </div>
    )
}

export default LoginPage