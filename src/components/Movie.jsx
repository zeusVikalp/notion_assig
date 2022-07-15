import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Movie({ login }) {
    const [name, setname] = React.useState("")
    const [title, settitle] = React.useState("")
    const [rating, setrating] = React.useState("")
    const [category, setcategory] = React.useState("")
    const [price, setprice] = React.useState("")

    var navigate = useNavigate()

    function addmoviefun() {
        var obj = {
            name,
            title,
            rating,
            category,
            price
        }
        fetch('http://localhost:8001/addmovie', {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then(() => navigate('/'))
    }

    return (
        <div className='inputs'>
            <h1>Add Movie</h1>
            {
                login ?
                    <>
                        <input type="text" placeholder='name' onChange={e => setname(e.target.value)} />
                        <input type="text" placeholder='title' onChange={e => settitle(e.target.value)} />
                        <input type="number" placeholder='rating' onChange={e => setrating(e.target.value)} />
                        <input type="text" placeholder='category' onChange={e => setcategory(e.target.value)} />
                        <input type="number" placeholder='price' onChange={e => setprice(e.target.value)} />
                        <button onClick={addmoviefun}>Add Movie</button>
                    </>
                    :
                    <h1>Login to add movie</h1>
            }
        </div>
    )
}
