import { AiOutlineComment, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import Navbar from "../../components/navbar/Navbar";
import { adminInfo } from "./adminInfo";
import { useState } from "react";
import CreatePostTags from "../../components/createPostTags/CreatePostTags";
import { useUpdatePostMutation } from "../../store/api/api";

const AdminFullPost = ({ id, data }) => {
  const [postInfo, setPostInfo] = useState(data);

  const [UpdatePost] = useUpdatePostMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postInfo.title === "" || postInfo.image === "") {
      throw new Error();
    } else {
      UpdatePost({ id, postInfo });
    }
  }

  console.log(data);

  return (
    <div className="container">
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
                {postInfo.views}
                <AiOutlineEye />
              </div>
              <div className="create-post__likes">
                {postInfo.likes}
                <AiOutlineHeart />
              </div>
              <div className="create-post__comments">
                {postInfo.comments.length}
                <AiOutlineComment />
              </div>
            </div>
          </div>
          <input type="text" className="create-post__image" placeholder="Put here url of your photo"
            value={postInfo.image} onChange={(e) => setPostInfo({ ...postInfo, image: e.target.value })} />
          <img className="create-post__img" src={postInfo.image} alt={postInfo.image} />
          <button className="create-post__btn" onClick={handleSubmit}>Update Post</button>
        </form>
        <CreatePostTags postInfo={postInfo} setPostInfo={setPostInfo} />
      </div>
      <Navbar adminInfo={adminInfo} />
    </div>
  )
}

export default AdminFullPost;