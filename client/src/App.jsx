import React, { useState } from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer, Auth } from './components';
// css imports
import 'stream-chat-react/dist/css/index.css';
import './App.css';

const cookies = new Cookies();

const apiKey = 'pjj8ac4ket5e';
const authToken = cookies.get('token');

const client = StreamChat.getInstance(apiKey);

//connect to the backend and send the form data
if(authToken){
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

const App = () => {

  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEdting, setIsEditng] = useState(false);

  // if we're not logged in, render the Auth component
  if(!authToken) return <Auth />

  return (
    <div className='app__wrapper'>
        {/* Pass the client as an instance to the Chat component */}
        <Chat client={client} theme="team light" >
            <ChannelListContainer 
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
              setIsEditng={setIsEditng}
            />
            <ChannelContainer 
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              isEdting={isEdting}
              setIsEditng={setIsEditng}
              createType={createType}
            />
        </Chat>
    </div>
  )
}

export default App;
