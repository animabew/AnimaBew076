
    window.onload = loginLoad;
    function loginLoad()
    { 
        var form = document.getElementById("myForm");
        form.onsubmit = checkregis;
    }
    function checkregis()
    {   var sos1 = document.getElementById("errormsg");
        var sos = document.getElementById("reerrormsg");
        var password = document.forms["myForm"]["password"]
        var repassword = document.forms["myForm"]["repassword"]
    if(password.value != repassword.value)
    {
        sos1.innerHTML = 'password not correct';
        sos1.style.backgroundColor = 'red';
        sos.innerHTML = 'password not correct';
        sos.style.backgroundColor = 'red';
         return false;
    }
   
}
    



