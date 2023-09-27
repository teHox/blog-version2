import React from "react";
import { Link } from "react-router-dom";
import {MdDeleteForever} from "react-icons/md";
import {useDeletePostMutation} from "../../store/api/api";

const AdminPost = ({ item }) => {

    const [DeletePost] = useDeletePostMutation();

    const handleDeletePost = () =>{
        DeletePost(item.id);
    }

    return (
        <div className="admin-post__item">
            <div className="admin-post__header">
                <h2 className="admin-post__title">{item.title}</h2>
                <p className="admin-post__delete" onClick={handleDeletePost}><MdDeleteForever/></p>
            </div>
            <div className="admin-post__img">
                <img src={item.image} alt={item.image} />
                <Link
                    to={`/admin/post/${item.id}`}
                    className="admin-post__link"
                >
                    CHANGE POST...
                </Link>
            </div>
        </div>
    );
};

export default AdminPost;
