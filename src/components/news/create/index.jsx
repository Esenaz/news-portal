import { useCallback, useEffect, useRef, useState } from 'react';
import { useMainPage } from '../../../pages/main/useMainPage';
import { useNavigate } from 'react-router-dom';

export const CreateNews = () => {
  const { categories } = useMainPage();
  const [news, setNews] = useState({
    title: '',
    text: '',
    image: null,
    category: '1',
  });
  const imageRef = useRef();
  const navigate = useNavigate();

  const submit = useCallback(() => {
    if (Object.keys(news).every((key) => news[key])) {
      createNews()
        .then((res) => {
          console.log(res);
          navigate(`/news/${res.id}`);
        })
        .catch(alert);
      return;
    }

    alert('Заполните все поля');
    return;
  });

  const createNews = async () => {
    try {
      const fd = new FormData();
      Object.entries(news).map(([key, val]) => {
        fd.append(key, key === 'category' ? Number(val) : val);
        return;
      });

      return await (
        await fetch(
          `http://3.208.19.134/api/category/${news.category}/posts/`,
          {
            method: 'post'.toUpperCase(),
            body: fd,
            headers: {
              Authorization: `Token ${localStorage.getItem('token')}`,
            },
          }
        )
      ).json();
    } catch (error) {
      throw error;
    }
  };

  const handleChange = useCallback((e) => {
    const { value, name, files } = e.target;
    setNews((state) => {
      return {
        ...state,
        [name]: files && files.length ? files[0] : value,
      };
    });
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <input onChange={handleChange} name='title' placeholder='title' />
      <input onChange={handleChange} name='text' placeholder='text' />
      <button
        onClick={(e) => {
          e.preventDefault();
          imageRef.current.click();
        }}
      >
        Выберите картинку
      </button>
      <input
        name='image'
        type='file'
        hidden
        ref={imageRef}
        onChange={handleChange}
      />
      {categories ? (
        <select defaultValue={'1'} onChange={handleChange} name='category'>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      ) : null}
      <button onClick={submit}>Submit form</button>
    </div>
  );
};
