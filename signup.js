document.querySelector("form").addEventListener("submit",signup);

var signuparr=JSON.parse(localStorage.getItem("signupdata")) || [];

function signup()
{
    event.preventDefault();

    var signupobj={
        firstname:document.querySelector("#input1").value,
        lastname:document.querySelector("#input2").value,
        email:document.querySelector("#input3").value,
        password:document.querySelector("#input4").value
    }

    signuparr.push(signupobj);

    localStorage.setItem("signupdata",JSON.stringify(signuparr));

    alert("Sign up successful");

    document.querySelector("#input1").value= ""
    document.querySelector("#input2").value= ""
    document.querySelector("#input3").value= ""
    document.querySelector("#input4").value= ""

    
}