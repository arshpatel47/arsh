function validate(){
    var username=document.getElementById("Username").value;
    var password=document.getElementById("password").value;
    if(username=="arsh"&& password=="patel")
{
    alert("login succesfully")
    return false;
}
else
{
    alert("login failed");
}



}