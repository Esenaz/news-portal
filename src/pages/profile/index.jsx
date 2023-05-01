import { useEffect, useState } from "react"

export const ProfilePage = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("http://localhost:1717/me", {
      headers: {
        'X-Auth': localStorage()
      }
    }
      
    )
      .then(res => res.json())
      .then(data => {
        setUser(data)
      })
  }, [])

  return <div>ProfilePage</div>;
}
