export const mockFetch = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    //if (Math.random() < 0.75) resolve(fetch(url))
    if (true) resolve(fetch(url))
    else reject(new Error('mock fetch failed'))
  }, 700)
})