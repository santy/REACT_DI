import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import DisplayPosts from "./Displaypost";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const mutation = useMutation((newPost) =>
        axios.post("http://localhost:5000/users", newPost)
    );

    const submitData = () => {
        mutation.mutate({ title, body });
    };

    if (mutation.isLoading) {
        return <span>Submitting...</span>;
    }

    if (mutation.isError) {
        return <span>Error: {mutation.error.message}</span>;
    }

    if (mutation.isSuccess) {
        return( 
            <div>
                <span>Post submitted!</span>
                <DisplayPosts />
            </div>
            
            );
    }

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Body"
            />
            <button onClick={submitData}>Submit</button>
            
        </div>
    );
};
export default CreatePost;