import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useGetOnePostQuery } from "../../store/api/api";
import AdminFullPost from '../../pages/admin/AdminFullPost';

const FetchAdminFullPost = () => {
    const { id } = useParams();
    const { isLoading, data } = useGetOnePostQuery(id);
    const [active, setActive] = useState(false);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <AdminFullPost id={id} data={data} active={active} setActive={setActive}/>
            )}
        </div>
    );
};

export default FetchAdminFullPost;