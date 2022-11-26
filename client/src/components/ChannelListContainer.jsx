import React from 'react'
import {ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
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
        <ChannelSearch />
        <ChannelList 
            filters={{}}
            channelRenderFilterFn={() => {}}
            List={(listProps) => (
              <TeamChannelList
                {...listProps}
                type="team"
              />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="team"
            />
          )}
        />
        <ChannelList 
            filters={{}}
            channelRenderFilterFn={() => {}}
            List={(listProps) => (
              <TeamChannelList
                {...listProps}
                type="messaging"
              />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="messaging"
            />
          )}
        />
      </div>
    </>
  )
}

export default ChannelListContainer