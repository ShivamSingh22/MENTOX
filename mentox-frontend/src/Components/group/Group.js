import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './GrpComponent/ChatFeed';
import LoginForm from './GrpComponent/LoginForm';

import './Group.css';
import {Link} from 'react-router-dom';


const Group= ( )=>{
    
    if (!localStorage.getItem('username')) return <LoginForm />
    return(<div>
    <div className="Btn-container">
    <Link to='/Home'>
    <button  className="HomeBtn">HOME</button>
    </Link>
    <Link to='/SignUp'>
    <button  className="HomeBtn">Register</button>
    </Link>
    </div>
    <ChatEngine
        height="100vh"
        projectID="439b20aa-7e65-4108-a931-ca50d084f14d"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
    
    </div>
)

}

export default Group;
