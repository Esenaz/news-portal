export const getItemApi = async (postId) => {
  const response = await fetch(`http://3.208.19.134/api/posts/${postId}/`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json()
}

export const updateItemApi = async (postId, formData) => {
  const response = await fetch(`http://3.208.19.134/api/posts/${postId}/`, {
    method: 'PUT',
    body: formData,
    headers: { 'Authorization': `Token ${localStorage.getItem('token')}` }
  })
  return response.json()
}

export const deleteItemApi = async (postId) => {
  const response = await fetch(`http://3.208.19.134/api/posts/${postId}/`, {
    method: 'DELETE',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  })
  return response.json()
}