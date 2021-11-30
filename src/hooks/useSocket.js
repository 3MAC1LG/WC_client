import { useCallback } from 'react';
import { io } from 'socket.io-client';

const CallbackUrl = 'http://localhost:4000';

const sockets = {};
const useSocket = (classroom) => {
  const disconnect = useCallback(() => {
    if (classroom && sockets[classroom]) {
      sockets[classroom].disconnect();
      delete sockets[classroom];
    }
  }, [classroom]);
  if (!classroom) {
    return [undefined, disconnect];
  }
  if (!sockets[classroom]) {
    sockets[classroom] = io(`${CallbackUrl}/sr-${classroom}`, {
      transports: ['websocket'],
    });
    console.info('create socket', classroom, sockets[classroom]);
  }

  return [sockets[classroom], disconnect];
};

export default useSocket;
