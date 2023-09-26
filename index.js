const btn = document.getElementById("btn");
const input = document.getElementById("inputPassword");
const chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
passwordLength = 16;

btn.addEventListener("click", () => {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  input.value = password;
});

input.addEventListener("click",()=>{
  copyPassword()
})

const copyPassword = () => { 
  navigator.clipboard.writeText(input.value);
};
