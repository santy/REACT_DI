import { useState, useEffect } from 'react';

const DEFAULT_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogPosts = await response.json();
  return blogPosts;
}

function FetchUseEffect() {
  const [loadedPosts, setLoadedPosts] = useState([]);
//   function fetchPostsHandler() {
//     fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
//   }

  useEffect(function () {
    fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }, []);

  return (
    <>
        <ul>
        {loadedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>

  );
}

export default FetchUseEffect;