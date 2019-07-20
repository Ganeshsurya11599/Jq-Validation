function chargebattery() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf244;";
  setTimeout(function () {
      a.innerHTML = "&#xf243;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf242;";
    }, 2000);
  setTimeout(function () {
      a.innerHTML = "&#xf241;";
    }, 3000);
  setTimeout(function () {
      a.innerHTML = "&#xf240;";
    }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);

  $(document).ready(function(){
  $('#open').click(function(){
    $('#myForm').show('slow');
    $('#myForm1').hide('slow');
  });
});

      $(document).ready(function(){
  $('#close').click(function(){
    $('#myForm1').show('slow');
    $('#myForm').hide('slow');
  });
});


function openfolder() {
  var a;
  a = document.getElementById("div2");
  a.innerHTML = "&#xf114;";
  setTimeout(function () {
      a.innerHTML = "&#xf115;";
    }, 1000);
}
openfolder();
setInterval(openfolder, 2000);

$('#login').click(function(){
  var msg ='';
  function myFunction(email) {
    var expr= /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
  };
      var username=$('#username').val();
      var password=$('#password').val();
      var data = JSON.parse(localStorage.getItem('userdetail'));
      console.log(data);
      for(let i = 0; i<data.length; i++){
       if (!myFunction($("#username").val())){
      alert("Invalid email address.");
      msg='Invalid email address.'
      $('#msg').textcontent = msg
    }
    else{
      alert("valid email address.");
      location.replace('welcome.html')
    }

      }
    });

var user=[];
  $('#sign').click(function() {
    var msg ='';
  function myFunction(email) {
    var expr= /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
  };
    var username1 = $('#username1').val();
    var email = $('#email').val();
    var password1 = $('#password1').val();
    var data = {
        username:username1,
        email:email,
        password:password1
    }
    console.log(data);
    user.push(data);
    console.log(user)
    localStorage.setItem('userdetail',JSON.stringify(user));
    if (username1=='') {
      alert('Enter the Name')
    }
    else if (!myFunction($("#email").val())){
      alert("Invalid email address.");
      msg='Invalid email address.'
      $('#msg').textcontent = msg
    }
    else if (password1=='') {
      alert('Enter the password')
    }
    else
    {
    alert('REGISTER SUCCESSFULLLY')
    location.replace('index.html')
    }
  });