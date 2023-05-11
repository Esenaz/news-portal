import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreateNews } from '../../components/news/create';

export const ProfilePage = () => {
  const userName = localStorage.getItem('username');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/authorization');
    }
  }, []);

  return (
    <div>
      {userName ? (
        <>
          <div>{userName}</div>
          <CreateNews />
          <button
            onClick={() => {
              localStorage.clear();
              navigate('/authorization');
            }}
          >
            Log out
          </button>
        </>
      ) : (
        <Link to='/authorization'>Go to Login</Link>
      )}
    </div>
  );
};
