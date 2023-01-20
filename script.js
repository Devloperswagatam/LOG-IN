const loginBtn = document.getElementById('loginbtn');

loginBtn.addEventListener('click', ()=>{
    const userName = document.getElementById('username').value;
    const passWord = document.getElementById('password').value;

    if(!userName || !passWord){
        alert("Both username and password is required");
        return;
    }

    if(userName === "Newton" && passWord === "School@2022"){
        alert("Logged in successfully!");
    }else{
        alert("Invalid username or password.")
    }
});