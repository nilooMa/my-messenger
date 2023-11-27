import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
//auth
import { auth } from '../firebase';
//context
export const AuthContext = React.createContext();
const AuthContextProvider = (props) => {
    
    const[loading,setLoading] = useState(true);
    const[user,setUser] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            if(user) navigate("/chats");
        })
    },[user,navigate]);
    return (
        <AuthContext.Provider value={user}>
            {!loading && props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;