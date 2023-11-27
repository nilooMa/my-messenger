import React,{useContext,useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//components
import Navbar from './Navbar';

//context
import { AuthContext } from '../context/AuthContextProvider';

//auth
import { auth } from '../firebase';

//styles
import styles from './Chats.module.css';
import { ChatEngine } from 'react-chat-engine';
//axios
import axios from 'axios';

const Chats = () => {

    const users = useContext(AuthContext);
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(!users) {
            navigate("/");
            return;
        }
        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "c76b1138-1b35-4092-b0a9-9144cc864d15",
                "user-name": users.email,
                "user-secret": users.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", users.email);
            formdata.append("username", users.email);
            formdata.append("secret", users.uid);
            getFile(users.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/", formdata, {
                        headers: {
                            "private-key": "baa875c2-d664-4fa5-a1f4-599fe675ace6"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                    
                })
        })

    }, [users, navigate])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }


    const logoutHandler = async () => {
        await auth.signOut();
        navigate("/");
    }
    if( loading || !users) {
        return "Loading...";
    }
    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />
            <ChatEngine 
            height="calc(100vh-50px)" 
            projectId = "b0bce589-16cf-47bc-b8e4-9ab349d0d362"
            userName = {users.email}
            userSecret = {users.uid}
            />
        </div>
        

    );
};

export default Chats;