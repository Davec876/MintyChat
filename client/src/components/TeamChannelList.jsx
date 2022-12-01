import React from 'react'

import { AddChannel } from '../assets';

const TeamChannelList = ({ setToggleContainer,children, error = false, loading, type, isCreating,setIsCreating,setCreateType,setIsEditng}) => {
  // if there is an error, return the error message
    if(error) {
        return type === 'team' ? (
            <div className='team-channel-list'>
                <p className='team-channel-list__message'>
                    Connection error, please wait and try again.
                </p>
            </div>
        ) : null
    }
  // If loading is true, render the loading indicator
    if(loading) {
        return(
            <div className='team-channel-list'>
                <p className='team-channel-list__message loading'>
                    {type === 'team' ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
        )
    }

    return (
        <div className='team-channel-list'>
            <div className='team-channel-list__header'>
                <p className='team-channel-list__header__title'>
                    {type === 'team' ? 'Channels' : 'Direct Messages'} 
                </p>
                {/* Button add channel */}
                <AddChannel 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditng={setIsEditng}
                    type={type === 'team' ? 'team' : 'messaging'}
                    setToggleContainer={setToggleContainer}
                />

            </div>
            {children}
        </div>
  )
}

export default TeamChannelList