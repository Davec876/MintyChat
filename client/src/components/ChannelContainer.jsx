import React from 'react'
import { Channel, useChatContext } from 'stream-chat-react';

import { ChannelInner, CreateChannel, EditChannel, TeamMessage} from './';

const ChannelContainer = ({ isCreating, setIsCreating, isEditing, setIsEditing, createType,}) => {
 //gets information about the channel we are currently in
  const { channel } = useChatContext();
  
  //if we are creating a channel, render the CreateChannel component
  if(isCreating) {
    return(
        <div className="channel__container">
          <CreateChannel createType={createType} setIsCreating={setIsCreating}/>
        </div>
    )
  }
  //if we are editing a channel render the EditChannel component
  if(isEditing) {
    return(
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing}/>
      </div>
    )
  }

  const EmptyState = () => (
    <div className="channel-empty__container">
      <p className="channel-empty__first">
        This is the beginning of your chat history.
      </p>  
      <p className="channel-empty__second">
        Send messages, attachments, links, emojis, and more!
      </p> 
    </div>
  )

  return (
    <div className='channel__container'>
        <Channel
        //if there are no messages in the channel, render the EmptyState component
          EmptyStateIndicator={EmptyState}
          Message={(messageProps, i) => <TeamMessage key={i} {...messageProps} />}
        >
          <ChannelInner setIsEditing={setIsEditing}/>
        </Channel>
    </div>
  );
}

export default ChannelContainer;