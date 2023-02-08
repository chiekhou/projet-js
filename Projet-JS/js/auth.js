// new Vue({
//     data() {
//         return {
//             timeOut: 5000,
//             timer: null,
//             isLock: 'false'
//         }
//     },
//     mounted() {
//         this.timer = setTimeout(this.lockPro, this.timeOut)
//         // Set the operating time for the first time
//         localStorage.setItem('moveTime', Date.now())
//         // First judgment state
//         this.modalStatus()
//         // Polling monitoring status
//         setInterval(this.modalStatus, 1000)
//         // listen to mouse events
//         this.events()
//     },
//     methods: {
//         events() {
//             window.onmousemove = () => {
//                 // console.log('Mouse moved')
//                 if (!this.isLock) {
//                     localStorage.setItem('moveTime', Date.now())
//                     this.clearLocaPro('continue')
//                 }
//             }
//         },
//         modalStatus() {
//             if (localStorage.getItem('isLock') === 'true') {
//                 console.log('The screen is locked')
//                 this.isLock = true
//                 this.clearLocaPro()
//             } else {
//                 console.log('The screen is not currently locked')
//                 this.isLock = false
//                 this.clearLocaPro('continue')
//             }
//         },
//         lockPro() {
//             if (!this.timeOut) {
//                 localStorage.setItem('isLock', 'false')
//                 this.clearLocaPro('continue')
//                 return
//             }
//             if (Date.now() - localStorage.getItem('moveTime') < this.timeOut) {
//                 localStorage.setItem('isLock', 'false')
//                 this.clearLocaPro('continue')
//             } else {
//                 localStorage.setItem('isLock', 'true')
//                 this.clearLocaPro()
//             }
//         },
//         clearLocaPro(status) {
//             if (this.timer) {
//                 clearTimeout(this.timer)
//             }
//             if (status === 'continue') {
//                 this.timer = setTimeout(this.lockPro, this.timeOut)
//             }
//         },
//         // Manually lock
//         handleLock() {
//             this.clearLocaPro()
//             localStorage.setItem('isLock', 'true')
//         },
//         // Password unlock
//         unlock() {
//             localStorage.removeItem('isLock')
//             localStorage.setItem('moveTime', Date.now())
//             this.clearLocaPro('continue')
//         }
//         // Don't forget to log out and also clear isLock
//     }
// }).$mount('#app')

// IMPORTANT: This is a JS-for-fun - and a BAD example how to secure your content:
var password = "demo"; // because ANYONE CAN SEE THIS IN VIEW SOURCE!


// Repeatedly prompt for user password until success:
(function promptPass() {

    var psw = prompt("Enter your Password");

    while (psw !== password) {
        alert("Incorrect Password");
        return promptPass();
    }

}());


alert('WELCOME');
// or show you page content