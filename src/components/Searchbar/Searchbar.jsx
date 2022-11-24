import { useEffect } from "react";
import { useState } from "react"
import './Searchbar.css'


const Searchbar=({users})=>{

    const[filteredUsers,setFilteredUsers]=useState([]);
    useEffect(()=>{
        console.log(filteredUsers,'filtereddddddddd')
        localStorage.setItem('filteredUsers', JSON.stringify(filteredUsers));
    },[filteredUsers])
    // console.log(users,'these are userssss')
    const searching=(search)=>{
        // console.log(users,'these are userssss')
        // setInputValue(search)
        // users.map(user=>{
            if(search!==''){
                console.log(search, 'goooo')
                 const filteredData = users.filter((item) => {
                    return Object.values(item.full_name).join('').toLowerCase().includes(search.toLowerCase());
            },
        )
        setFilteredUsers(filteredData)
        // console.log(filteredData,'filtereddddddddd')
        // return filteredUsers
    }
    
    }
    
// )}

return( 
    <div>
         <div className="search">  
                    <input 
                    type="text" 
                    placeholder="Search" 
                    onChange={(e)=>{searching(e.target.value)}}
                    
                    />
                </div>
    </div>
);

};

    

export default Searchbar
// export const filteredusers=filteredUsers