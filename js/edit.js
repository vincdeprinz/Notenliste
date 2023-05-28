var storedItem = localStorage.getItem("storedItem");
var y = false;



window.addEventListener('DOMContentLoaded', function() {
  var erstelleNote = document.getElementById("erstelleNote");
  var loescheFach = document.getElementById("loescheFach");
  erstelleNote.style.display = "none";
  loescheFach.style.display = "none";



  var gespeicherteButtons = localStorage.getItem('gespeicherteButtons');
  var buttonsArray = gespeicherteButtons ? JSON.parse(gespeicherteButtons) : [];

  buttonsArray.forEach(function(fach) {
    var gespeicherteWerte = localStorage.getItem('faecher');
    var fach = JSON.parse(gespeicherteWerte);

      var neuerButton = document.createElement('button');
      neuerButton.textContent = fach;
      neuerButton.className = 'button-28';
      neuerButton.id = fach;

      var createFach = document.getElementById('createFach');
      createFach.style.display = "none";
      var x = document.getElementById("bit");
      x.style.display = "block";
      
      document.getElementById('fach').value = "";

      neuerButton.addEventListener('click', function(){
        var x = document.getElementById("bit");
        var erstelleFach = document.getElementById("erstelleFach");
        var erstelleNote = document.getElementById("erstelleNote");
        var loescheFach = document.getElementById("loescheFach");

        document.getElementById('titel').textContent = fach;
            x.style.display = "none";
            y = true;
        erstelleFach.style.display = "none";
        erstelleNote.style.display = "block";
        loescheFach.style.display = "block";
      });

      var container = document.getElementById('bit');
      container.appendChild(neuerButton);
  });
});

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
        var erstelleNote = document.getElementById("erstelleNote");
        var loescheFach = document.getElementById("loescheFach");
        var erstelleFach = document.getElementById("erstelleFach");
        erstelleNote.style.display = "none";
        loescheFach.style.display = "none";
        erstelleFach.style.display = "block";
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
  var erstelleFach = document.getElementById('erstelleFach');


  erstelleFach.addEventListener('click', function() {
    var createFach = document.getElementById('createFach');
    createFach.style.display = "block";
    var x = document.getElementById("bit");
    x.style.display = "none";
    
  });
});



document.addEventListener('DOMContentLoaded', function() {
    var fachSubmit = document.getElementById("fachSubmit");
    fachSubmit.addEventListener('click', function() {
      var fach = document.getElementById("fach").value;

      var neuerButton = document.createElement('button');
      neuerButton.textContent = fach;
      neuerButton.className = 'button-28';
      neuerButton.id = fach;

      var createFach = document.getElementById('createFach');
      createFach.style.display = "none";
      var x = document.getElementById("bit");
      x.style.display = "block";
      
      document.getElementById('fach').value = "";

      neuerButton.addEventListener('click', function(){
        var x = document.getElementById("bit");
        var erstelleFach = document.getElementById("erstelleFach");
        var erstelleNote = document.getElementById("erstelleNote");
        var loescheFach = document.getElementById("loescheFach");

        document.getElementById('titel').textContent = fach;
            x.style.display = "none";
            y = true;
        erstelleFach.style.display = "none";
        erstelleNote.style.display = "block";
        loescheFach.style.display = "block";
      });

      var container = document.getElementById('bit');
      container.appendChild(neuerButton);

      var gespeicherteButtons = localStorage.getItem('gespeicherteButtons');
      localStorage.setItem('faecher', JSON.stringify(fach));
      var buttonsArray = gespeicherteButtons ? JSON.parse(gespeicherteButtons) : [];
     buttonsArray.push(fach); // Hier die ID des Buttons speichern
     localStorage.setItem('gespeicherteButtons', JSON.stringify(buttonsArray));
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var loescheFach = document.getElementById('loescheFach');


loescheFach.addEventListener('click', function() {
  var x = document.getElementById("bit");
  var erstelleFach = document.getElementById("erstelleFach");
  var erstelleNote = document.getElementById("erstelleNote");
  var loescheFach = document.getElementById("loescheFach");

  var faecher = document.getElementById('titel');
  var buttonId = faecher.textContent;
  var button = document.getElementById(buttonId);

  
    x.style.display = "block";
    erstelleNote.style.display = "none";
    loescheFach.style.display = "none";
    erstelleFach.style.display = "block";
  if(button){
    button.parentNode.removeChild(button);
  }

  document.getElementById('titel').textContent = "KBW";
});
});