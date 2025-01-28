import { useContext } from 'react';
import { ChannelContext, UserContext } from '../../App';

export default function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      Hello I am {user} , my channel is {channel}
    </div>
  );
}
