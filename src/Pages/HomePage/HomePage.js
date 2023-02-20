import {React, useState} from 'react'

import './HomePage.css'

const HomePage = (props) => {
    const [formData, setFormData] = useState({})

    const ClickHandler = () => {
        console.log(formData)
        // calls the parent child clickhandler function
        props.ClickHandler(formData)
    }

    const formDataHandler = (e) => {
        const data = formData;
        data[e.target.name] = e.target.value;
        setFormData(data);
    }

    return (
        <div className='homepage-maincontainer'>
            <input name='name' placeholder='Name...' onChange={(e) => formDataHandler(e)} />
            <input name='email' placeholder='Email...' onChange={(e) => formDataHandler(e)} />
            <input name='phoneno' placeholder='Phone Number...' onChange={(e) => formDataHandler(e)} />
            <input name='address' placeholder='Address...' onChange={(e) => formDataHandler(e)} />
            <input name='password' placeholder='Password...' onChange={(e) => formDataHandler(e)} />
            <input name='age' placeholder='Age...' onChange={(e) => formDataHandler(e)} />
            <button onClick={ClickHandler}>Click Me</button>
        </div>
        // <div>HomePage</div>
    )
}

export default HomePage