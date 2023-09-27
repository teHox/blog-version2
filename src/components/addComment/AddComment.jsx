import React, { useEffect, useState } from 'react';
import { useUpdatePostMutation } from "../../store/api/api";

const AddComment = ({ id, data }) => {
    const [comment, setComment] = useState("");
    const [postInfo, setPostInfo] = useState(data);
    const [UpdatePost] = useUpdatePostMutation();

    useEffect(() => {
        UpdatePost({ id, postInfo }).then(() => {
            setComment("");
        });
        /* eslint-disable */
    }, [postInfo])

    const handleSendComment = (e) => {
        e.preventDefault();
        if (postInfo === "") {
            throw new Error();
        } else {
            setPostInfo({ ...postInfo, comments: [...postInfo.comments, comment] });
        }
    }

    return (
        <div className="full-post__add">
            <textarea value={comment} onChange={e => setComment(e.target.value)} />
            <button onClick={handleSendComment}>Send comment</button>
        </div>
    );
};

export default AddComment;