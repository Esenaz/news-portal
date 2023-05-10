import { useNavigate } from "react-router-dom";
import "./news-item.css"
import { useState } from "react";
import { Modal } from "../modal"
import { CommentsList } from "../comments-list";


export const NewsItem = ({ data, deleteItem, updateItem }) => {
  const token = localStorage.getItem('token')
  const [isOpen, setOpen] = useState(false)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)
  


  return data && (
    <div className="news-item">
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <p>{data.publication_date}</p>
      <img src={data.image} alt="" />
      {token && <button onClick={onOpen}>Изменить</button>}
      {token && <button onClick={deleteItem}>Удалить</button>}
      <Modal onClose={onClose} isOpen={isOpen} newsInfo={data} updateItem={updateItem}/>
      <CommentsList newsId={data.id}/>
    </div>
  )
}

