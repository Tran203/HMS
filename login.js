function requestOTP() {
    // Get the username and password entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulate an AJAX request to your server for OTP generation
    // In a real application, this request should be sent to the server
    // which generates and sends an OTP to the user's email or phone
    // For this example, we'll generate a random 6-digit OTP
    var otp = Math.floor(100000 + Math.random() * 900000);

    // Display the OTP input field
    document.getElementById("otpContainer").style.display = "block";

    // Set the generated OTP in the OTP input field
    document.getElementById("otp").value = otp;

    // Disable the username and password fields
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
}
