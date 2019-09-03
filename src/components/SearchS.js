import React,{Component} from 'react';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

class SearchS extends Component{
    constructor(){
        super();
        this.state={
            gamerTag:'',
            platform:'psn'
        }
    }
    componentDidMount(){
        this.beforeCreate();
    }
    beforeCreate(){
        document.body.className = "body-bg-image";
    }
    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefault();
        if(!this.state.gamerTag){
            ToastsStore.warning("Please enter your gameTag");
        }else{
            this.props.history.push(`/profile/${this.state.platform}/${this.state.gamerTag}`); 
        }
    }
    render(){
        return(
            <div>
        <section className="search">
            <h1>Track Player Stats</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="platform" >Platform</label>
                    <select name="platform" id="platform" value={this.state.platform} onChange={this.handleChange}>
                        <option value="psn">PlayStation</option>
                        <option value="xbl">XBox</option>
                        <option value="Origin">Origin</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="gamertag">GamerTag</label>
                    <input type="text"
                            name="gamerTag"
                            id="gamertag"
                            value={this.state.gamerTag}
                            onChange={this.handleChange}
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
}

export default SearchS;