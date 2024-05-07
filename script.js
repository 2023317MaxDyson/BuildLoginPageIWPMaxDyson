// Finding the input tag with the name: "ps" that is inside the folder tag named "loginForm"
let PassWord = document.forms["loginForm"]["ps"];

// Finding the input tag with the name: "ps" that is inside the folder tag named "LoginForm"
document.forms["loginForm"]["button"].addEventListener('click',function() {
valid(PassWord)})

    function valid(PassWord){
    if (PassWord.value.length < 6 ){
    // Changes the border color of the input tag with the id name: "ps" to red
    document.getElementById("ps").style.borderColor = "red";
    alert("not validated");
       }
       else {
        // Changes the border color of the input tag with the id name: "ps" to green
     document.getElementById("ps").style.borderColor = "green";
   alert("Success");
       }
    return PassWord;
      }