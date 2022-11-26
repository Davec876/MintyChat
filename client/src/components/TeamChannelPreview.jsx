import React from 'react'
import {Avatar, useChatContext} from 'stream-chat-react';

const TeamChannelPreview = ({ channel, type }) => {
    
    const {channel: activeChannel, client} = useChatContext();
  
    const ChannelPreview = () => (
        <p className='channel-preview__item'>
            {/* Grabbing the channel name and id if there is no name */}
            # {channel?.data?.name || channel?.data?.id}
        </p>
    )

    const DirectPreview = () => {
        // converting the channel members into an array by an id
        const members = Object.values(channel.state.members).filter(({user}) => user.id !== client.userID);

        return (
            <div className='channel-preview__item single'>
                <Avatar 
                // Grabbing the first member in the array ie yourself
                    image={members[0]?.user?.image}
                    name={members[0]?.user?.fullName}
                    size={24}
                />
                <p>
                    {members[0]?.user?.fullName}
                </p>
            </div>
        )
    }

    return (
        <div className={
            // If the channel is active, add the class name channel-preview__wrapper__selected
            // and if not, add the class name channel-preview__wrapper
            channel?.id === activeChannel?.id
                ? 'channel-preview__wrapper__selected'
                : 'channel-preview__wrapper'
        }
        onClick={() => {
            console.log(channel);
        }}
        >   
            {type === 'team' ? <ChannelPreview /> : <DirectPreview />}

        </div>
  )
}

export default TeamChannelPreview