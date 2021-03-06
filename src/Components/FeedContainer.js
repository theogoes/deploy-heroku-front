import React, { useEffect, useState} from 'react'
import api from '../Services/api'

import FeedCard from './FeedCard'
import LoaderStandart from './standarts/LoaderStandart'

function FeedContainer() {

    const [loadPost, setLoadPost] = useState([])
    const [inter, setInter] = useState(false)

    function interactionPost(){
        setInter(!inter)
    }


    useEffect(() => {
        console.log("Bom dia :D")
        async function getPosts(){
            try {
                const post = await api.get('post')
                const {data} = post
                setLoadPost(data.data)
                console.log(data);
            } catch (error) {
                alert("deu ruim padrim : " + error)
            }
        }
        getPosts()
    }, [inter])

    return (
        <>
            {loadPost === null ? <LoaderStandart/> :
                loadPost.map(post =>(
                   <FeedCard key={post._id} 
                    picture={post.picture} 
                    usr ={post.user.userName} 
                    desc = {post.description}
                    likes = {post.likes}
                    avatar = {post.user.avatar}
                    id = {post._id}
                    inter = {interactionPost}
                    userId = {post.user._id}
                    />
                    
                ))
            }
        </>
    )
}

export default FeedContainer
