// import io from 'socket.io-client';
//
// let token = localStorage.getItem('token');
//
// window.Fabric = {
//   API() {
//     this.auth = auth_options => (
//       new Promise((resolve, reject) => {
//         this.socket = io.connect('localhost ...');
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
//
// window.API = new window.Fabric.API();
// window.API.auth({ token });
//
// export default window.API;
