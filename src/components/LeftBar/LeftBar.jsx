import './LeftBar.css'
import assets from '../../assets/assets'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../config/firebase';
const LeftBar = () => {
    const navigate=useNavigate()
    return ( 
        <div className="lb">
            <div className="lb-top">
                <div className="lb-nav">
                    <img src={assets.logo} alt="" className='logo' />
                    <div className="menu">
                        <img src={assets.menu_icon} alt="" className='menu-icon'/>
                        <div className="sub-menu">
                            <p onClick={()=>navigate('/profile')}>Edit Profile</p>
                            <hr />
                            <p onClick={()=>logout()}>Logout</p>
                        </div>
                    </div>
                </div>
                <div className="lb-search">
                    <img src={assets.search_icon} alt="" />
                    <input type="text" placeholder='Search here' />
                </div>
            </div>
            <div className="lb-list">
                {
                    Array(12).fill("").map((item,index)=>(
                        <div className="friends">
                    <img src={assets.profile_img} alt="" />
                    <div>
                        <p>Teja Macharla</p>
                        <span>Hello!, How are you?</span>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default LeftBar;