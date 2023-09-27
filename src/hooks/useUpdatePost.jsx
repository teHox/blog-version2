import {useState} from "react";
import {useUpdatePostMutation} from "../store/api/api";

export const useUpdatePost = (data) =>{
    const [postInfo, setPostInfo] = useState(data);

    const [UpdatePost] = useUpdatePostMutation();

    return { postInfo, setPostInfo, UpdatePost };
}