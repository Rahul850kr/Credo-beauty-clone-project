var logindata=JSON.parse(localStorage.getItem("signupdata"));

document.querySelector("form").addEventListener("submit",login)

function login()
{
    event.preventDefault();

    var selectedemail=document.querySelector("#email").value ;
    var selectedpassword=document.querySelector("#password1").value;

    var flag=false;
    for(var i=0;i<logindata.length;i++)
    {
        if(logindata[i].email==selectedemail && logindata[i].password==selectedpassword)
        {
            flag=true;
            break;
        }
    }

    if(flag)
    {
        
        document.querySelector("#email").value="";
        document.querySelector("#password1").value="";
        alert("Login Successful");

        window.location.href="home/home.html";

    }
    else{
        alert("Oops wrong details please try again");
         
        document.querySelector("#email").value="";
        document.querySelector("#password1").value="";
    }

}