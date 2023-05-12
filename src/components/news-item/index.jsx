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

  const updateTrigger = async (event) => {
    const result = await updateItem(event);
    if (result) {
      setOpen(false);
    }
  }

  return data && (
    <div className="news-item">
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <p>{data.publication_date}</p>
      <img src={data.image} alt="" />

      <div className="edit">

      {token && <button  className="ed" onClick={onOpen}>Изменить</button>}
      {token && <button className="del" onClick={deleteItem}>Удалить</button>}
      <Modal onClose={onClose} isOpen={isOpen} newsInfo={data} updateItem={updateTrigger}/>
      <CommentsList newsId={data.id}/>
    </div>
    </div>
  )
}

