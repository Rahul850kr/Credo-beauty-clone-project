//card num,cvv,expiry,otp
document.querySelector("button").addEventListener("click", myotp);
function myotp() {
    var name = document.querySelector("#name").value;
    var cardnum = document.querySelector("#cardnumber").value;
    var cardcvv = document.querySelector("#cardCvv").value;
    var date = document.querySelector("#date").value;

    if (cardnum == "123456789" && cardcvv == "000") {
        alert("your otp is send to gmail account");
        window.location.href = "Otp.html";
    } else {
        alert("Wrong information");
    }

}