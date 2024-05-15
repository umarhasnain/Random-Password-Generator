// var paas = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
// var generatePass = "";
// for (i = 0; i < 12; i++) {
//   var pass = paas[Math.floor(Math.random() * paas.length)];
//   generatePass += pass;
// }
// document.write(generatePass);

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    var password = ["ABC", "abc", "123", "@#$"];
    var generatePass = "";
    for (i = 0; i < password.length; i++) {
        var pass = password[Math.floor(Math.random() * password.length)];
        generatePass += pass;
    }
    var genratePassword = (document.getElementById("password").innerHTML =
        generatePass);

});