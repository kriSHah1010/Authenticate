import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Navbar from './Components/Navbar/Navbar'
import ContactPage from './Pages/ContactPage/ContactPage'
import LoginPage from './Pages/LoginPage/LoginPage'

const App = () => {
  const [isLogin, setIsLogin] = useState(false)

  const ClickHandler = (data) => {
    console.log(data)
  }

  const LoginHandler = () => {
    setIsLogin(true)
  }

  return (
    <Router>
      <Navbar isLogin={isLogin} userName="Intern Name" />
      {isLogin ?
        <Switch>
          <Route exact path='/'>
            <HomePage ClickHandler={ClickHandler} />
          </Route>
          <Route exact path='/contact'>
            <ContactPage />
          </Route>
          <Redirect to='/' />
        </Switch> :
        <Switch>
          <Route exact path='/'>
            <LoginPage LoginHandler={LoginHandler} />
          </Route>
          <Redirect to='/' />
        </Switch>}
    </Router>
  )
}

export default App

//this is comment
//this is comment 2
