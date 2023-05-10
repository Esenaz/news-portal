import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ProfilePage = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch("http://3.208.19.134/api/accounts/token/", {
      method: 'POST',
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }, [])

  return (
    <div>
      {user ? (
        <>
          <div>{user.username}</div>
          <button onClick={() => localStorage.removeItem("token")}>
            Log out
          </button>
        </>
      ) : (
        <Link to="/authorization">Go to Login</Link>
      )}
    </div>
  )
}
