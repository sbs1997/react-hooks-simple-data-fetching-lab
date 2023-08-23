import React, { useEffect, useState } from "react";

function App(){
    const [searchReturn, setSearchReturn] = useState("Loading")
    useEffect(
        ()=>{
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(r=>r.json())
            .then((dog)=>{
                setSearchReturn(dog.message)
            })
        }, []
    )
    return(
        <>
            {searchReturn === "Loading" ?
                <p>Loading...</p>
                :
                <img src={searchReturn} alt="A Random Dog"/>
            }
        </>
    )
}

export default App