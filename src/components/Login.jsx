import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Login({ login, setlogin }) {
    const [email, setemail] = React.useState("")
    const [password, setpassword] = React.useState("")
    var navigate = useNavigate()
    function loginfun() {
        var obj = {
            email,
            password
        }
        fetch('http://localhost:8001/login', {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((res) => {setlogin(res)
                navigate('/')})
    }

    return (
        <div className='inputs'>
            {
                login ?
                    <h1>Your loged in</h1>
                    :
                    <>
                        <h1>Login</h1>
                        <input type="text" placeholder='User email' onChange={e => setemail(e.target.value)} />
                        <input type="text" placeholder='Password' onChange={e => setpassword(e.target.value)} />
                        <button onClick={loginfun}>Login</button>
                    </>
            }
        </div>
    )
}
