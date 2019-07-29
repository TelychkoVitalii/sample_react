import api from '../../../api/socket.service';

export const exampleRequest = data => (
  api.send({
    api: 'module',
    module: 'App',
    classMethod: 'SaveLastState',
    options: {
      data
    }
  }).then(response => response).catch(error => error)
);