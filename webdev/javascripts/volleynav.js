function openModal(){
  document.getElementById("myModal").style.display = "block";
}
function closeModal(){
  document.getElementById("myModal").style.display = "none";
}
function openModal2(){
  if(JSON.parse(localStorage.getItem("currentUsr") == {})){
    alert("Please sign in to continue.")
  }
  else{
    document.getElementById("myModal2").style.display = "block";
  }
}
function closeModal2(){
  document.getElementById("myModal2").style.display = "none";
}

function newAcc(){
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signUpForm").style.display = "block";

}
function back(){
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signUpForm").style.display = "none";
}

function signUp(){
  let username  = document.getElementById("new-username").value;
  let password = document.getElementById("new-password").value;
  if (isFinite(username) == true){
    alert("Please enter a valid username");
  }
  else if(password.length < 8){
    alert("Password length must be more than 8 characters")
  }
  else{
    username = document.getElementById("new-username").value;
    password = document.getElementById("new-password").value;
    var cfm = document.getElementById("cfmPassword").value;
    if(cfm == password){
      var user = {"username":username,"password":password};
      var users = localStorage.getItem("userObj");
      users = JSON.parse(users);
      if(localStorage.getItem("userObj") == null){
        users = {};
      }
      users[username] = user
      var users = JSON.stringify(users);
      localStorage.setItem("userObj",users);
    }
    else{
      alert('Your passwords do not match.');
    }
  }
}
function loginPage(){
  var stored = localStorage.getItem("userObj");
  stored = JSON.parse(stored);
  var loginUser = document.getElementById("username").value;
  var loginPass = document.getElementById("password").value;
  if (!(Object.keys(stored).includes(loginUser))){
    alert("Username or password is invalid");
  }
  else if (stored[loginUser].password != loginPass){
    alert("Username or password is invalid");
  }
  else{
    var current = JSON.stringify(stored[loginUser]);
    localStorage.setItem("currentUsr",current);
  }
  location.reload();
}
function updateLogin(){
  var user = localStorage.getItem("currentUsr");
  user = JSON.parse(user);
  if(user != null){
    document.getElementById("login").setAttribute("onclick","logOut()");
    document.getElementById("login").innerText ="Log out";
    document.getElementById("navText").innerHTML = "<a>User Profile</a>";
    document.getElementById("navText").href = "userprofile.html";


  }
  else{
    document.getElementById("login").setAttribute("onclick","openModal()");
    document.getElementById("login").innerText ="Login";

  }
}
function logOut(){
  localStorage.removeItem("currentUsr");
  localStorage.removeItem("recent-image");
  /*var player = JSON.parse(localStorage.getItem("player"));
  player = {};
  localStorage.setItem("player", player);*/
  window.location.href = "volleynav.html";
}


function preview(){
  document.getElementById("myFileInput").addEventListener("change", function(){
    const reader = new FileReader();

    reader.addEventListener("load",()=> {
      localStorage.setItem("recent-image", reader.result);
    })

    reader.readAsDataURL(this.files[0]);
  })
  var url = localStorage.getItem("recent-image");
  var img = document.getElementById("img-preview");
  img.setAttribute("src",url);
  var player = JSON.parse(localStorage.getItem("player"))
  for(i = 0; i < player.length; i++){
    document.querySelectorAll(".userFields")[i].innerText = player[i]
  }
}
function userForm(){
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var height = document.getElementById("height").value;
  var position = document.getElementById("positions").value;
  var about = document.getElementById("about").value;
  if (isFinite(name) == false){
    if(age > 0 || age < 100){
      var player = [];
      player.push(name,age,height,position,about);
      player = JSON.stringify(player);
      localStorage.setItem("player",player);
    }
  }
  else{
    alert("Invalid parameters")
  }



}
