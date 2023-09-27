import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useGetOnePostQuery } from "../../store/api/api";
import FullPost from "../../pages/full-post/FullPost";

const FetchFullPost = () => {
    const { id } = useParams();
    const { isLoading, data } = useGetOnePostQuery(id);
    const [active, setActive] = useState(false);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <FullPost id={id} data={data} active={active} setActive={setActive}/>
            )}
        </div>
    );
};

export default FetchFullPost;