import React from 'react';
import './App.css';
import Header from './components/Header';
import Routes from './components/Routes/Routes';
// import { useRoutes} from 'hookrouter';

// const routes ={
//   '/':()=>
//     <SearchS/>,
//   '/profile/:platform/:gamertag':({platform,gamertag})=>
//     <Profile platForm={platform} gamerTag={gamertag}/> 
// }

// function App(){
//   const routeResult = useRoutes(routes);
//   return(
//     <div className="container">
//       <Header/>
//       {routeResult}
//     </div>
//   )
// }
const App=()=>{
  return(
    <div className="container">
      <Header/>
      <Routes/>
    </div>
  )
}



export default App;
