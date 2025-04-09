// 6-digit OTP generator
document.getElementById("otp").addEventListener("click", function () {
  const a = Math.random(); //number should be between 0 & 1
  //6 digit otp Generator
  min = 100000; //one can set the min limit upto anything they want. Here, i am setting it as 100000
  max = 999999; //one can set the max limit upto anything they want. Here, i am setting it as 999999
  const generateotp = Math.floor(a * (max - min + 1) + min);
  document.getElementById("otpBox").value = generateotp;
});
