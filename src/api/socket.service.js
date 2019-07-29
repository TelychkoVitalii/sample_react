import io from 'socket.io-client';
import { history } from "../helpers/history";

var token = localStorage.getItem('token');

class API {
  auth(auth_options) {
    return new Promise((resolve, reject) => {
      this.socket = io.connect('http://localhost:3000');
      this.socket.on("connect", () => {
        console.log("Socket connect....");
        this.socket.emit('authentication', auth_options);
        this.socket.on('authenticated', data => {
          console.log("Authentication complete!", data);
          resolve(data.token);
        });
        this.socket.on('unauthorized', error => {
          console.log("There was an error with the account_sagas:", error.message);
          reject(error.message);
        });
        this.socket.on('disconnect', data => console.log("Socket disconnect....", data));
        this.socket.on('reconnecting', data => console.log("Socket reconnecting....", data));
        this.socket.on('LogOut', () => localStorage.removeItem('token'));
      });
    }).then(token => {
      localStorage.setItem('token', token);
      let result = {};
      result['token'] = token;
      return result;
    }).catch(error => {
      localStorage.removeItem('token');
      let result = {};
      result['error'] = error;
      return result;
    })
  }

  logout(action) {
    return this.socket.emit('LogOut');
  }
  send(options) {
    return new Promise((res, rej) => this.socket.json.send(options, resp => resp.result === true ? res(resp) : rej(resp)))
  }
}
//
// window.Fabric = {
//   API() {
//     this.auth = auth_options => (
//       new Promise((resolve, reject) => {
//         this.socket = io.connect('http://localhost:3000');
//         this.socket.on("connect", () => {
//           console.log("Socket connect....");
//           this.socket.emit('authentication', auth_options);
//           this.socket.on('authenticated', data => {
//             console.log("Authentication complete!", data);
//             resolve(data.token);
//           });
//           this.socket.on('unauthorized', error => {
//             console.log("There was an error with the account_sagas:", error.message);
//             reject(error.message);
//           });
//           this.socket.on('disconnect', data => console.log("Socket disconnect....", data));
//           this.socket.on('reconnecting', data => console.log("Socket reconnecting....", data));
//           this.socket.on('LogOut', () => localStorage.removeItem('token'));
//         });
//       }).then(token => {
//         localStorage.setItem('token', token);
//         let result = {};
//         result['token'] = token;
//         return result;
//       }).catch(error => {
//         localStorage.removeItem('token');
//         let result = {};
//         result['error'] = error;
//         return result;
//       })
//     );
//     // this.lookNotes = event => this.socket.on(event, showNotes);
//     this.logout = action => this.socket.emit('LogOut');
//     this.send = options => new Promise((res, rej) => this.socket.json.send(options, resp => resp.result === true ? res(resp) : rej(resp)))
//   }
// };


window.API = new API();
if(token) {
  window.API.auth({ token });
} else {
  window.AppInit = true;
  history.push('/');
}

export default window.API;
