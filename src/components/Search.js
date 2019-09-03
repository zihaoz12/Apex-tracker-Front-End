import React,{useState,useEffect} from 'react';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';



const Search =()=>{
    const [gamerTag,setGamerTag] = useState('');
    const [platform, setPlatform] = useState('psn');
  

    const beforeCreate =()=>{
        document.body.className = "body-bg-image";
    };
    useEffect(()=>{
        beforeCreate();

    },[]);

    const gamerTagChange = e =>{
        setGamerTag(e.target.value)
    }
    const platformChange = e =>{
        setPlatform(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!gamerTag){
            ToastsStore.warning("Please enter your gameTag");
        }else{
            console.log(`/profile/${platform}/${gamerTag}`); 
        }
    }
    
    

    return(
    <div>
        <section className="search">
            <h1>Track Player Stats</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="platform" >Platform</label>
                    <select name="platform" id="platform" value={platform} onChange={platformChange}>
                        <option value="psn">PlayStation</option>
                        <option value="xbl">XBox</option>
                        <option value="Origin">Origin</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="gamertag">GamerTag</label>
                    <input type="text"
                            name="text"
                            id="gamertag"
                            value={gamerTag}
                            onChange={gamerTagChange}
                            placeholder="Origin ID, XBox Live Gamertag, PSN ID, etc"
                    ></input>
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn"/>
                </div>
            </form>
        </section>
        <ToastsContainer store={ToastsStore}  position={ToastsContainerPosition.TOP_RIGHT}/>
    </div>
    )
}

export default Search;