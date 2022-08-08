import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService'
import MyLoader from '../components/UI/loader/MyLoader';
import { useLoading } from '../hooks/useLoading';


const OnePost = (props) => {
    const params = useParams()
    console.log(params.id)
    const [post, setPost] = useState({});

    const [fethPostById, isPostLoading, postError] = useLoading(async()=>{
        const response = await PostService.getById(params.id)
        setPost(response.data);
    });

    useEffect(()=>{
        fethPostById()
    },[params.id])

    return (
        <div>
            {isPostLoading 
                ?<MyLoader/>
                :<div>{post.id}, {post.title}</div>
            }
            
        </div>
    );
};

export default OnePost;