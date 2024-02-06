import React from 'react';

const Profile = () => {
    const [Name, setName] = React.useState('');
    const [Gender, setGender] = React.useState('');
    const [Age, setAge] = React.useState('');
    const [Address, setAddress] = React.useState('');
    const [Contact, setContact] = React.useState(' ');
    const [error,setError] = React.useState(false);

    const AddProfile = async () => {

        if(!Name || !Gender || !Age || !Contact)
        {
            setError(true);
            return false
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/Add-Profile", {
            method: "post",
            body: JSON.stringify({ Name, Gender, Age, Address, Contact, userId }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result)

    }

    return (
        <div className='Profile'>
            <h1>Add Profile</h1>
            <input type="text" placeholder='Enter Name' className='inputBox'
                value={Name} onChange={(e) => { setName(e.target.value) }}
            />
            {error && !Name && <span className='invalid-input'>Enter valid Name</span>}

            <input type="text" placeholder='Enter Gender' className='inputBox'
                value={Gender} onChange={(e) => { setGender(e.target.value) }}
            />
            {error && !Gender && <span className='invalid-input'>Enter Valid Gender</span>}

            <input type="text" placeholder='Enter Age' className='inputBox'
                value={Age} onChange={(e) => { setAge(e.target.value) }}
            />
            {error && !Age && <span className='invalid-input'>Enter Valid Age</span>} 

            <input type="text" placeholder='Enter Address' className='inputBox'
                value={Address} onChange={(e) => { setAddress(e.target.value) }}
            />
            {error && !Address && <span className='invalid-input'>Enter Valid Address</span>}
            <input type="text" placeholder='Enter Contact' className='inputBox'
            value={Contact} onChange={(e) => { setContact(e.target.value) }}
            />
            {error && !Contact && <span className='invalid-input'>Eneter Valid Contact</span>}


            <button onClick={AddProfile} className='appButton'>Add Profile</button>
        </div>
    )
}

export default Profile;