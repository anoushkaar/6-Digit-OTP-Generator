// 6-digit OTP generator
document.getElementById("otp").addEventListener("click", function () {
  const a = Math.random(); //number should be between 0 & 1
  //6 digit otp Generator
  min = 100000; //one can set the min limit upto anything they want. Here, i am setting it as 100000
  max = 999999; //one can set the max limit upto anything they want. Here, i am setting it as 999999
  const generateotp = Math.floor(a * (max - min + 1) + min);
  const otpBox = document.getElementById("otpBox");
  otpBox.value = generateotp;
  otpBox.classList.add("generated");
  setTimeout(() => {
    otpBox.classList.remove("generated");
  }, 600);
  document.getElementById("message").classList.remove("show");
});

document.getElementById("copyOtp").addEventListener("click", function () {
  const otpBox = document.getElementById("otpBox");
  const message = document.getElementById("message");
  if (otpBox.value) {
    navigator.clipboard
      .writeText(otpBox.value)
      .then(() => {
        message.textContent = "OTP copied to clipboard!";
        message.style.color = "#4CAF50";
        message.classList.add("show");
        setTimeout(() => {
          message.classList.remove("show");
        }, 2000);
      })
      .catch((err) => {
        message.textContent = "Failed to copy OTP.";
        message.style.color = "#f44336";
        message.classList.add("show");
        setTimeout(() => {
          message.classList.remove("show");
        }, 2000);
      });
  } else {
    message.textContent = "Generate an OTP first!";
    message.style.color = "#ff9800";
    message.classList.add("show");
    setTimeout(() => {
      message.classList.remove("show");
      message.textContent = "";
    }, 2000);
  }
});
