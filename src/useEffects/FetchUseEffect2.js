import { useState, useEffect } from 'react';

const DEFAULT_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts(url) {
  const response = await fetch(url);
  const blogPosts = await response.json();
  return blogPosts;

}

function FetchUseEffect2() {
  const [postsUrl, setPostsUrl] = useState(DEFAULT_URL);
  const [loadedPosts, setLoadedPosts] = useState([]);

  function adjustUrlHandler(event) {
    setPostsUrl(event.target.value);
  }

  useEffect(function () {
    fetchPosts(postsUrl).then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }, [postsUrl]);

  return (

    <>
      <input  type="text" onBlur={adjustUrlHandler} />
      <ul >
        {loadedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>

  );

}

export default FetchUseEffect2;