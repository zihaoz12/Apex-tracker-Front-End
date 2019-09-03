import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Profile.css';

class ProfileP extends Component{
    constructor(){
        super();
        this.state={
            profileData:null,
            error:null,
            loading:false
        }
    }
    componentDidMount(){
        this.GetUserData();
        this.afterCreate();
    }

    afterCreate(){
        document.body.className = "body-bg-no-image";
    }
   GetUserData = async()=>{
        this.setState({
            loading:true,
        })
        try{
            this.setState({
                loading:true,
            });
            const res = await axios.get(
                `/api/v1/profile/${this.props.match.params.platform}/${this.props.match.params.gamerTag}`
                );
            this.setState({
                profileData:res.data.data,
                loading:false
            })
            console.log("res:",this.state.profileData);
            
        }catch(err){
            this.setState({
                error:err.response.data.message
            })
            console.log("Error->",this.state.error);
        }
    }
    render(){
        const {profileData} = this.state;
        return(
            <section>
                {this.state.loading ? <div><h3>Loading...</h3></div> : 
                <div className="data-container">
                {this.state.profileData ? <div><h1 className="gamertag">
                    <img src={profileData.platformInfo.avatarUrl} alt="" className="platform-avatar" />
                        {profileData.platformInfo.platformUserId}
                        </h1> 
                    <div className="grid">
                        <div>
                            <img src={profileData.segments[1].metadata.imageUrl} alt="/"/>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <h4>Selected Legend</h4>
                                    <p>{profileData.metadata.activeLegendName}</p>
                                </li>
                                <li>
                                    <h4>Season 2 wins</h4>
                                    <p>{profileData.segments[0].stats.season2Wins.displayValue}
                                        <span>({profileData.segments[0].stats.season2Wins.percentile}%)</span>
                                    </p>
                                </li>
                                <li>
                                    <h4>Apex Level</h4>
                                    <p>{profileData.segments[0].stats.level.displayValue}
                                        <span>({profileData.segments[0].stats.level.percentile})</span>
                                    </p>
                                </li>
                                <li>
                                    <h4>Life Time Kill</h4>
                                    <p>{profileData.segments[0].stats.kills.displayValue}
                                        <span>({profileData.segments[0].stats.kills.percentile}%)</span>
                                    </p>
                                </li>
                                <li>
                                    <h4>Damage Done</h4>
                                    <p>{profileData.segments[0].stats.damage.displayValue}
                                        <span>({profileData.segments[0].stats.damage.percentile}%)</span>
                                    </p>
                                </li>
                               
                            </ul>
                        </div>
                   
                        
                    </div> </div> : null}
                    
                </div>
                }
                
                <Link to="/">Go Back</Link>
            </section>
        )
    }

}

export default ProfileP;