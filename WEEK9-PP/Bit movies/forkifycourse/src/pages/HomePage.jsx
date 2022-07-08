 import React from "react";
 import Card from "../components/card";

 const HomePage = (props) =>{
       
    return <div className="grid">
        {props.movies.map(el => <Card myFunc={props.myFunc} movies={el}/>)}
    </div>
     
 }


 export default HomePage;