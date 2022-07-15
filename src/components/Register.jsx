import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setemail] = React.useState("")
    const [password, setpassword] = React.useState("")
    var navigate = useNavigate()
    function registerfun() {
        var obj = {
            email,
            password
        }
        if(email.length < 8 || password.length < 3) {
            alert("Add proper data")
            return;
        }
        // console.log(obj)
        fetch('http://localhost:8001/register', {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then(() => {
                navigate('/login')
                // alert("Your have registered")
            })
    }

    return (
        <div className='inputs'>
            <h1>Register</h1>
            <input type="text" placeholder='User email' onChange={e => setemail(e.target.value)} />
            <input type="text" placeholder='Password' onChange={e => setpassword(e.target.value)} />
            <button onClick={registerfun}>Register</button>
        </div>
    )
}
