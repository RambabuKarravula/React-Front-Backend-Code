import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const AddProfile = () => {
    const [Profile, setProfile] = useState([]);

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async () => {
        let result = await fetch('http://localhost:5000/products',{
            headers:{
                authorization:JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setProfile(result);
    }

    const deleteProfile = async (id) => {
        console.warn(id)
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getProfile();
        }
    }

    const searchHandle = async (event)=>{
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json()
            if(result){
                setProfile(result)
            }
        }else{
            getProfile();
        }
        
    }

    return (
        <div className="Profile-list">
            <h3>Profile</h3>
            <input type="" className='search-product-box' placeholder='Search Profile'
            onChange={searchHandle}
             />
            <ul>
                <li>Name</li>
                <li>Gender</li>
                <li>Age</li>
                <li>Address</li>
                <li>Contact</li>

            </ul>
            {
                Profile.length>0 ? Profile.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>
                            <button onClick={() => deleteProfile(item._id)}>Delete</button>
                            <Link to={"/update/"+item._id} >Update </Link>
                            </li>

                    </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}

export default AddProfile;