var storedItem = localStorage.getItem("storedItem");
var y = false;


function save(){
    var Item = document.getElementById("input").value;
    localStorage.setItem("storedItem", Item);
    document.getElementById("savedText").innerHTML = Item + " Saved";

}
function get(){
    localStorage.getItem("storedItem");
    document.getElementById("openedText").innerHTML = storedItem;
}

function back(){
    if(y == false){
    window.location.href = 'index.html';
    }
    if(y == true){
        var x = document.getElementById("bit");
        if(x.style.display === "none"){
            x.style.display = "block";
        }
        document.getElementById('titel').textContent = 'KBW';
        y = false;
    }

}


document.addEventListener('DOMContentLoaded', function() {
    var btn1 = document.getElementById('btn1');
  

    btn1.addEventListener('click', function() {
      if (this.id === 'btn1') {
        document.getElementById('titel').textContent = 'Mathematik';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var btn2 = document.getElementById('btn2');
  

    btn2.addEventListener('click', function() {
      if (this.id === 'btn2') {
        document.getElementById('titel').textContent = 'Deutsch';
      }
    });
  });


function change(){
    var x = document.getElementById("bit");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else{
        x.style.display = "none";
    }
    y = true;
    

}

document.addEventListener('DOMContentLoaded', function() {
  var ausloeser = document.getElementById('ausloeser');


  ausloeser.addEventListener('click', function() {
    var createFach = document.getElementById('createFach');
    createFach.style.display = "block";
    var x = document.getElementById("bit");
    x.style.display = "none";
    
  });
});



document.addEventListener('DOMContentLoaded', function() {
  var ausloeser = document.getElementById('fachSubmit');

    fachSubmit.addEventListener('click', function() {
      var fach = document.getElementById("fach").value;

      var neuerButton = document.createElement('button');
      neuerButton.textContent = fach;
      neuerButton.className = 'button-28';
      neuerButton.id = 'btn2';

      var createFach = document.getElementById('createFach');
      createFach.style.display = "none";
      var x = document.getElementById("bit");
      x.style.display = "block";
      
      document.getElementById('fach').value = "";

      neuerButton.addEventListener('click', function(){
        var x = document.getElementById("bit");
        document.getElementById('titel').textContent = 'Deutsch';
        if(x.style.display === "none"){
            x.style.display = "block";
        } else{
            x.style.display = "none";
        }
        y = true;
      });

      var container = document.getElementById('bit');
      container.appendChild(neuerButton);
  });
});