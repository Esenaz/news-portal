import "./style.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const Modal = ({ onClose, isOpen, newsInfo, updateItem }) => {
  const [title, setTitle] = useState(newsInfo.title)
  const [text, setText] = useState(newsInfo.text)
  const [image, setImage] = useState(null)
  const navigate = useNavigate()

  // console.log(title, text, image)
  // console.log(newsInfo, 'data')
  // console.log(newsInfo.title)

  const handleChange = (e) => {
    // console.log(newsInfo)
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", title)
    formData.append("text", text)
    if (image) formData.append("image", image)
    formData.append("category", newsInfo.category)
    // console.log(formData, 'formdata')

    
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    updateItem(formData)
      .then(() => navigate(`/news/${newsInfo.id}`))

    // fetch(`http://3.208.19.134/api/posts/${newsInfo.id}/`, {
    //   method: 'PUT',
    //   body: formData,
    //   headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
    // })
    // .then (res => res.json())
    // .then((data) => {
    //     // console.log(data)
    //     navigate(`/news/${newsInfo.id}`)
    // })
  }  

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-wrapper">
        <form className="form" onSubmit={handleChange}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />
          <input
            type="text"
            name="text"
            placeholder="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input"
          />
          <input
            type="file"
            name="image"
            placeholder="image"
            value={""}
            onChange={(e) => {
              setImage(e.target.files[0])
              console.log(e.target.files, 'files')
            }}
            className="input"
          />
          <button className="button">
            change
          </button>
        </form>
        
        <button onClick={onClose}>Close me</button>
      </div>
    </div>
  )
}