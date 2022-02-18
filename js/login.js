function signIn(){
    var Email = document.getElementById("inputemail").value;
    var PassWordd = document.getElementById("inputPassword").value ;
    if(Email == "admin@gmail.com" && PassWordd == 12345)
    {
        document.location.href = "admin.html";
    }
   
    else if(Email == "" || PassWordd ==""){
     alert("Please FilL the form");
    }
    else{
    
    window.location.href = "index.html";
  }
}