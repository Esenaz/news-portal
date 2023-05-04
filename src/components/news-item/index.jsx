import { useNavigate } from "react-router-dom";
import "./news-item.css"
import { useState } from "react";

export const NewsItem = ({ data }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate()
  const [errorDelete, setErrorDelete] = useState('')
  
  const handleDelete = (e, postId) => {
    e.preventDefault()
    fetch(`http://3.208.19.134/api/posts/${postId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (!res.ok) throw new Error('err')
      else return res.json()
    })
    .then(()=> {
      navigate('/')
    })
    .catch((er) => {
      setErrorDelete(er.message)
    })
    
  }


  return (
    <div className="news-item">
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <p>{data.publication_date}</p>
      <img src={data.image} alt="" />
      {token && <button>Изменить</button>}
      {token && <button onClick={(e) => handleDelete(e, data.id)}>Удалить</button>}
      {errorDelete}
    </div>
  )
}

