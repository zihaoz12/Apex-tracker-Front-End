import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { A } from 'hookrouter';
import PropTypes from 'prop-types';

const Profile =({platForm,gamerTag})=>{
    const [gamerInfo,setGamerInfo] = useState('');
    const [errorMsg, setError]= useState('');
    const [url, setUrl] = useState(`/api/v1/profile/${platForm}/${gamerTag}`)

    useEffect(()=>{
        const getProfileData = async ()=>{
            console.log(`PlatFrom:${platForm} tag:${gamerTag}`)
            try{
                const res = await axios.get(
                    url
                    );
                setGamerInfo(res.data.data);
                console.log("res:",gamerInfo);
            }catch(err){
                setError(err.response.data.message);
                console.log("Error->",errorMsg);
            }
        };
        getProfileData();
    },[]);

    
    return(
        <div>
            <h1>Profile Page</h1>
            <A href="/">Go Back</A>
        </div>
    )
}


Profile.propstypes={
    platForm:PropTypes.string.isRequired,
    gamerTag:PropTypes.string.isRequired,
}


export default Profile;