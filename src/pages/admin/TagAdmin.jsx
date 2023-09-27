import React, {useState} from 'react'
import Navbar from "../../components/navbar/Navbar";
import { adminInfo } from "./adminInfo";
import {useCreateTagsMutation, useDeleteTagsMutation, useGetTagsQuery} from "../../store/api/tags.api";
import { FiHash } from "react-icons/fi";
import {MdDeleteForever} from "react-icons/md";

const dataClear = {
    name: "",
    date: new Date().toISOString(),
    description: "",
}

const TagAdmin = () => {
    const { isLoading, data } = useGetTagsQuery();
    const [tagsInfo, setTagsInfo] = useState(dataClear);
    const [mode, setMode] = useState(true);

    const [CreateTags] = useCreateTagsMutation();
    const [DeleteTags] = useDeleteTagsMutation();

    const handleTagsBtn = (e) =>{
        e.preventDefault();
        if (tagsInfo.title === "" || tagsInfo.description === "" ){
            throw new Error();
        } else {
            CreateTags(tagsInfo).then(()=>{
                setTagsInfo(dataClear);
            })
        }
    }

    const handleDeleteTags = (item) =>{
        DeleteTags(item.id);
    }

    return (
        <div className="container">
            <div className="admin-tags">
                <div className="admin-tags__change">
                    <p>Change Mode:</p>
                    <button className="admin-tags__change-btn" onClick={()=>setMode(prev => !prev)}>
                        { mode ? "Change" : "Create" }
                    </button>
                </div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="tags">
                        <div className="tags__wrapper">
                            <div className="tags__items">
                                {data.map((item, index) => (
                                    <div className="tags__item" key={index}>
                                        <FiHash />
                                        <p className="admin-tags__delete" onClick={() => handleDeleteTags(item)}><MdDeleteForever/></p>
                                        <div className="tags__desc">
                                            <h3 className="tags__name">
                                                {item.name}
                                            </h3>
                                            <p className="tags__date">{item.date}</p>
                                            <p className="tags__text">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <form className="admin-tags__create">
                    <input type="text" className="admin-tags__title" placeholder="Tag name..." value={tagsInfo.name}
                    onChange={(e) => setTagsInfo({...tagsInfo, name: e.target.value})}/>
                    <textarea className="admin-tags__description" placeholder="Tag information..." value={tagsInfo.description}
                    onChange={(e) => setTagsInfo({...tagsInfo, description: e.target.value})}/>
                    <button className="admin-tags__btn" onClick={handleTagsBtn}>
                        { mode ? "Create" : "Change" }
                    </button>
                </form>
            </div>
            <Navbar adminInfo={adminInfo} />
        </div>
    )
}

export default TagAdmin