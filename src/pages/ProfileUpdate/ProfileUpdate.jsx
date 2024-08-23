import './ProfileUpdate.css'
import assets from '../../assets/assets'
import { useState } from 'react';
const ProfileUpdate = () => {
    const [image,setImage]=useState(false)
    return ( 
        <div className="profile">
            <div className="profile-container">
                <form>
                    <h3>Profile Details</h3>
                    <label htmlFor="avatar">
                        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="avatar" accept='png,jpg,jpeg'hidden />
                        <img src={image?URL.createObjectURL(image):assets.avatar_icon} alt="" srcset="" />
                        Upload Profile Image Here!
                    </label>
                    <input type="text" placeholder='Your Name' required/>
                    <textarea name="" id="" placeholder='Write Profile Bio' required></textarea>
                    <button>Save</button>
                </form>
                <img src={image?URL.createObjectURL(image):assets.logo_icon} alt="" className='profile-pic'/>
            </div>
        </div>
     );
}
 
export default ProfileUpdate;