import './Chat.css'
import LeftBar from '../../components/LeftBar/LeftBar'
import ChatBox from '../../components/ChatBox/ChatBox'
import RightBar from '../../components/RightBar/RightBar'
const Chat = () => {
    return ( 
        <div className="chat">
            <div className="chat-container">
                <LeftBar/>
                <ChatBox/>
                <RightBar/>
            </div>
        </div>
     );
}
 
export default Chat;