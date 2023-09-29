import { AiOutlineComment, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import Navbar from "../../components/navbar/Navbar";
import { adminInfo } from "./adminInfo";
import { useState } from "react";
import CreatePostTags from "../../components/createPostTags/CreatePostTags";
import { useUpdatePostMutation } from "../../store/api/api";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

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

  const options = {
    chart: {
      type: 'bar',
      backgroundColor: "#2d2b2b",
      plotBackgroundColor: '#4f4b4b',
      plotBorderWidth: 1,
      style: {
        fontSize: "18px",
      }
    },
    title: {
      text: 'Post Info',
      style: {
        color: "#fff"
      }
    },
    xAxis: {
      categories: ['Views', 'Likes', 'Comments', 'Tags'],
      labels:{
        style: {
          color: "#fff"
        }
      }
    },
    yAxis: {
      title: {
        text: 'Quantity of Views, Likes, etc.',
        style: {
          color: "#fff"
        }
      },
      labels:{
        style: {
          color: "#fff"
        }
      }
    },
    series: [{
      name: postInfo.title,
      data: [postInfo.views, postInfo.likes, postInfo.comments.length, postInfo.tags.length]
    }],
    legend:{
      itemStyle:{
        color: "#fff",
        fill: "#fff",
      },
      itemHoverStyle: {
        color: "#808080",
        fill: "#808080",
      }
    }
  }

  return (
    <div className="container">
      <div className="create-post">
        <div className="create-post__highcharts">
          <HighchartsReact  highcharts={Highcharts} options={options}/>
        </div>
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