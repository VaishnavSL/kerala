function validatefirstname(){
    var fname=document.getElementById("firsname");
    if(fname.value.length==0){
        fname.style.border="2px solid red";
        return false;
    }
    else{
        fname.style.border="2px solid green";
        return true;
    }
}
function validatelastname(){
    var lname=document.getElementById("lastname");
    if(lname.value.length==0){
        lname.style.border="2px solid red";
        return false;
    }
    else{
        lname.style.border="2px solid green";
        return true;
    }
    
}

function validateemail(){
    var email=document.getElementById("email");
    if(email.value.length==0){
        email.style.border="2px solid red";
        return false;
    }
    else if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        email.style.border="2px solid red";
        return false;
    }
    else{
        email.style.border="2px solid green";
        return true;
    }
}
function validatepassword(){
    var pname=document.getElementById("password");
    if(password.value.length==0){
        password.style.border="2px solid red";
        return flase;
    }
    else if(!password.value.match( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
    password.style.border="2px solid red";
    return false;
}
else{
    password.style.border="2px solid green";
    return true;
}
}