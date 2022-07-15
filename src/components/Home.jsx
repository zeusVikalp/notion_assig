import React from 'react'
import "./Style.css"

export default function Home({ login }) {
  const [movies, setmovies] = React.useState([])
  const [load, setload] = React.useState(0)
  const [update, setupdate] = React.useState(false)
  const [name, setname] = React.useState("")
  const [title, settitle] = React.useState("")
  const [rating, setrating] = React.useState("")
  const [category, setcategory] = React.useState("")
  const [price, setprice] = React.useState("")
  const [id, setid] = React.useState("")

  React.useEffect(() => {
    fetch('http://localhost:8001/')
      .then((res) => res.json())
      .then(res => setmovies(res))
    setload(0)
  }, [load])

  function deletefun(e) {
    // console.log(e)
    fetch(`http://localhost:8001/deletemovie/${e}`, {
      method: "DELETE"
    })
      .then(() => setload(1))

  }
  function updatefun(e) {
    setname(e.name)
    settitle(e.title)
    setrating(e.rating)
    setcategory(e.category)
    setprice(e.price)
    setid(e._id)
    setupdate(true)
  }
  function updatemoviefun() {
    var obj = {
      name,
      title,
      rating,
      category,
      price
    }
    fetch(`http://localhost:8001/updatemovie/${id}`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then(() =>{ setload(1)
        setupdate(false)
      })
  }
  return (
    <div>
      <h1>Home Page</h1>
      <div className="moviebox">
        {
          movies.map(ele => {
            return (
              <div className="card" key={ele._id}>
                <p>Name : {ele.name}</p>
                <p>Title : {ele.title}</p>
                <p>Rating : {ele.rating}</p>
                <p>Price : Rs. {ele.price}</p>
                <p>Category : {ele.category}</p>
                {
                  login &&
                  <>
                    <button onClick={() => deletefun(ele._id)} >Delete</button>
                    <button onClick={() => updatefun(ele)} >Update</button>
                  </>
                }
              </div>
            )
          })
        }
      </div>
      {
        update &&
        <div className="update inputs">
          <input type="text" placeholder='name' value={name} onChange={e => setname(e.target.value)} />
          <input type="text" placeholder='title' value={title} onChange={e => settitle(e.target.value)} />
          <input type="number" placeholder='rating' value={rating} onChange={e => setrating(e.target.value)} />
          <input type="text" placeholder='category' value={category} onChange={e => setcategory(e.target.value)} />
          <input type="number" placeholder='price' value={price} onChange={e => setprice(e.target.value)} />
          <button onClick={updatemoviefun}>Update Movie</button>
        </div>
      }
    </div>
  )
}
