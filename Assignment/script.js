function validation(){
    var fname = document.getElementById("firstName");
    var email = document.getElementById("email");
    var lname = document.getElementById("lastName");
    var pass = document.getElementById("pass");
    var regName = new RegExp("[^a-z$|^A-Z$]");
    var regPass = new RegExp("[^A-Z$|^a-z$|^0-9$]");
    if(regName.test(fname.value) || regName.test(lname.value)){
        var errorMessege = document.getElementById("er");
        errorMessege.innerHTML = "Name can contain alphabets only";
        setTimeout(()=>{errorMessege.innerHTML = ""},3000);
        return false;
    }
    if(fname.value == ""){
        var errorMessege = document.getElementById("er1");
        errorMessege.innerHTML = "Please enter first name";
        fname.focus();
        setTimeout(()=>{errorMessege.innerHTML = ""},2000);
        return false;
    }
    if(lname.value == ""){
        var errorMessege = document.getElementById("er2");
        errorMessege.innerHTML = "Please enter last name";
        lname.focus();
        setTimeout(()=>{errorMessege.innerHTML = ""},2000);
        return false;
    }
    if(email.value == ""){
        var errorMessege = document.getElementById("er3");
        errorMessege.innerHTML = "Please enter email";
        email.focus();
        setTimeout(()=>{errorMessege.innerHTML = ""},2000);
        return false;
    }
    if(!validateEmail(email.value)){
        var errorMessege = document.getElementById("er");
        errorMessege.innerHTML = "Please enter a valid email address.";
        setTimeout(()=>{errorMessege.innerHTML = ""},3000);
        return false;
    }
    if(pass.value == ""){
        var errorMessege = document.getElementById("er4");
        errorMessege.innerHTML = "Please enter password";
        pass.focus();
        setTimeout(()=>{errorMessege.innerHTML = ""},2000);
        return false;
    }
    if(regPass.test(pass.value)||pass.value.length < 8){
        var errorMessege = document.getElementById("er");
        errorMessege.innerHTML = "Password must be 8 charecters long and should contain only digits and alphabets.";
        setTimeout(()=>{errorMessege.innerHTML = ""},3000);
        return false;
    }
    else{
        return true;
    }
}
function validateEmail(email){
    var emailStrings = email.split('@');
    if(emailStrings.length!=2 || emailStrings[0] == "" || emailStrings[1] == ""){
        return false;
    }
    else{
        var domainName = emailStrings[1].split('.');
        if(domainName.length>1 && domainName.length<4){
            var i;
            for(i = 0;i<domainName.length;i++){
                if(domainName[i] == ""){
                    return false;
                }
            }
            for(i = 1;i<domainName.length;i++){
                if(domainName[i].length<2 || domainName[i].length>3){
                    return false;
                }
            }
            return true;
        }
        else{
            return false;
        }
    }
}
