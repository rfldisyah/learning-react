// jadi log, greeting, dan getUsername itu bisa dibilang bagian dari propertinya milik si variabel user

const user = {
  username: "agung", 
  log(message) {
    return `${this.username} - ${message}`;
  },
  greeting(greeting) {
    return greeting;
  },
  getUsername() {
    return this.username;
  },
};

// yang dimana tinggal panggil saja, variabel nya apa baru deh dilanjutkan dengan titik propertinya
console.log(user.getUsername());
console.log(user.greeting("Selamat pagi!"));
console.log(user.log("menyapa selamat pagi"));
