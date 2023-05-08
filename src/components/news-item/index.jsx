import { useNavigate } from "react-router-dom";
import "./news-item.css"
import { useState } from "react";
import { Modal } from "../modal"
import { CommentsList } from "../comments-list";


export const NewsItem = ({ data }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [errorDelete, setErrorDelete] = useState('')

  const [isOpen, setOpen] = useState(false)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)
  
  const handleDelete = (e, postId) => {
    e.preventDefault()
    fetch(`http://3.208.19.134/api/posts/${postId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    .then((res) => {
      if (!res.ok) throw new Error('err')
      else return res.json()
    })
    .then(() => (
      navigate('/')
    ))
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
      {token && <button onClick={onOpen}>Изменить</button>}
      {token && <button onClick={(e) => handleDelete(e, data.id)}>Удалить</button>}
      {errorDelete}
      <Modal onClose={onClose} isOpen={isOpen} newsInfo={data}/>
      <CommentsList newsId={data.id}/>
    </div>
  )
}

