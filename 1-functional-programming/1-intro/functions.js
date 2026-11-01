// return string
// function showMessage(message) {
//   return `Halo ${message}`;
// }

// const showMessage = function (message) {
//   return `Halo ${message}`;
// };

// arrow function 
const showMessage = (message) => `Halo ${message}`;
console.log(showMessage("teman - teman kelas bootcamp WPU Ramadhan"));

// return function
// expressive - function yang masuk ke dalam variabel
const userLogs = function (username) {
  return (message) => {
    return `${username} - ${message}`;
  };
};

// shorthand
// const userLogs = (username) => (message) => `${username} - ${message}`;

const log = userLogs("saya")("belajar javascript function programming");
console.log(log);
// console.log(log("belajar javascript functional programming"));
