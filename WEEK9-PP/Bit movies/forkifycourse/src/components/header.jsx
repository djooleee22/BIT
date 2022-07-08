import React from "react";
import { useState } from "react";

const Header = (props) => {
   const [query,setQuery] = useState("")

    const changeHeaderState = (event) => {
        setQuery({
            query: event.target.value
        })
    }

        return (
            <header>
                <div className="heading">BitShow</div>
                <div className="search-box">
                    <input onChange={changeHeaderState} value={query.query} type="text" placeholder="Search..."></input>
                    <button onClick={() => {         
                        props.defaultF(query.query)
                        props.searchF(query.query)
                        setQuery({query: ""})
                        }}>Search</button>
                </div>
            </header>
        )
    
}

export default Header
