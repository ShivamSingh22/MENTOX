import { useState } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar';

const projectID = '439b20aa-7e65-4108-a931-ca50d084f14d';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (error){
      setError('Oops, incorrect credentials.');
    }
  };

  return (
      <div>
    <Navbar />
    <div className="wrapper">
    
      <div className="form">
    
        <h1 className="title">MENTOX Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Chat/Interact for a better Mental Health </span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
       
      </div>
    </div>
    </div>

  );
};

export default LoginForm;