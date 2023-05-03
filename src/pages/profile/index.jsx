import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ProfilePage = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch("http://3.208.19.134/login", {
      headers: {
        "X-Auth": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.username) setUser(data);
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
