import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";
import { adminInfo } from "../../pages/admin/adminInfo";
import { AiOutlineComment, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { useCreatePostMutation } from '../../store/api/api';
import CreatePostTags from "../createPostTags/CreatePostTags";

const dataClear = {
    name: "Alexander Tehox",
    date: new Date().toISOString(),
    title: "",
    tags: [],
    views: 0,
    likes: 0,
    comments: [],
    commentsQuantity: 0,
    image: "",
}

const CreatePost = () => {
    const [postInfo, setPostInfo] = useState(dataClear);

    const [CreatePost] = useCreatePostMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (postInfo.title === "" || postInfo.image === "") {
            throw new Error();
        } else {
            CreatePost(postInfo).then(() => {
                setPostInfo(dataClear);
            })
        }
    }

    return (<div className="container">
        <div className="create-post">
            <form className="create-post__wrapper">
                <div className="create-post__user">{postInfo.name}</div>
                <div className="create-post__date">{postInfo.date}</div>
                <input type="text"
                    className="create-post__title"
                    placeholder="Write here your title..."
                    value={postInfo.title}
                    onChange={(e) => setPostInfo({ ...postInfo, title: e.target.value })} />
                <div className="create-post__block">
                    <div className="create-post__tags">
                        {postInfo.tags.length === 0 ? "Check list of tags" : postInfo.tags.slice(0, 4).map((tag, index) => (
                            <p key={index}>#{tag}</p>
                        ))}
                    </div>
                    <div className="create-post__info">
                        <div className="create-post__view">
                            00000
                            <AiOutlineEye />
                        </div>
                        <div className="create-post__likes">
                            0000
                            <AiOutlineHeart />
                        </div>
                        <div className="create-post__comments">
                            000
                            <AiOutlineComment />
                        </div>
                    </div>
                </div>
                <input type="text" className="create-post__image" placeholder="Put here url of your photo"
                    value={postInfo.image} onChange={(e) => setPostInfo({ ...postInfo, image: e.target.value })} />
                <img className="create-post__img" src={postInfo.image} alt={postInfo.image} />
                <button className="create-post__btn" onClick={handleSubmit}>Create post</button>
            </form>
            <CreatePostTags postInfo={postInfo} setPostInfo={setPostInfo} />
        </div>
        <Navbar adminInfo={adminInfo} />
    </div>);
};

export default CreatePost;