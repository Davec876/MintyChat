import React from 'react'
import {ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from 'stream-chat-react';
import MintyLogo from '../assets/minty.png';
import LogoutIcon from '../assets/logout.png';


const SideBar = () => (
  <div className="channel-list__sidebar">
    {/* Minty logo for sidebar */}
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={MintyLogo} alt="Minty Logo" width="30" />
      </div>
    </div>  
    {/* Logout button on sidebar */}
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="Logout" width="30" />
      </div>
    </div>
  </div>        
);

// CompanyHeader component to render the ChannelList component from StreamChat
const CompanyHeader = () => (
  <div className='channel-list__header'>
      <p className='channel-list__header__text'> Minty Chat </p>
  </div>
)

// ChannelListContainer component to render the ChannelList component from StreamChat
const ChannelListContainer = () => {
  return (
    <>
     {/* Rendering sidebar as a self closing tag */}
      <SideBar />
      <div className='channel-list__list__wrapper'>
        <CompanyHeader />
      </div>
    </>
  )
}

export default ChannelListContainer