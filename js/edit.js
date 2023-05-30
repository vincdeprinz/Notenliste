var storedItem = localStorage.getItem("storedItem");
var scene = 0;



window.addEventListener('DOMContentLoaded', function() {
  var erstelleNote = document.getElementById("erstelleNote");
  var loescheFach = document.getElementById("loescheFach");
  erstelleNote.style.display = "none";
  loescheFach.style.display = "none";


    var gespeicherteButtons = localStorage.getItem('gespeicherteButtons');
  var buttonsObjekt = gespeicherteButtons ? JSON.parse(gespeicherteButtons) : {};

  for (var fach in buttonsObjekt) {
    var buttonInfo = buttonsObjekt[fach];

      var neuerButton = document.createElement('button');
      neuerButton.textContent = buttonInfo.text;
      neuerButton.className = 'button-28';
      neuerButton.id = buttonInfo.id;

      var createFach = document.getElementById('createFach');
      createFach.style.display = "none";
      var x = document.getElementById("bit");
      x.style.display = "block";
      
      document.getElementById('fach').value = "";

      neuerButton.addEventListener('click', function(event){
        var x = document.getElementById("bit");
        var erstelleFach = document.getElementById("erstelleFach");
        var erstelleNote = document.getElementById("erstelleNote");
        var loescheFach = document.getElementById("loescheFach");
        var gedrueckteButtonId = event.target.id;
        document.getElementById('titel').textContent = gedrueckteButtonId;
            x.style.display = "none";
            scene = true;
        erstelleFach.style.display = "none";
        erstelleNote.style.display = "block";
        loescheFach.style.display = "block";
      });

      var container = document.getElementById('bit');
      container.appendChild(neuerButton);
    }
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
    if(scene == 0){
    window.location.href = 'index.html';
    }
    if(scene == 1){
        var x = document.getElementById("bit");
        if(x.style.display === "none"){
            x.style.display = "block";
        }
        document.getElementById('titel').textContent = 'KBW';
        var createNote = document.getElementById("createNote");
        var erstelleNote = document.getElementById("erstelleNote");
        var loescheFach = document.getElementById("loescheFach");
        var erstelleFach = document.getElementById("erstelleFach");
        erstelleNote.style.display = "none";
        loescheFach.style.display = "none";
        erstelleFach.style.display = "block";
        createNote.style.display = "none";
        scene = 0;
    }
    if(scene == 2){

        var fachName = 
        document.getElementById('titel').textContent = gedrueckteButtonId;
      


      var x = document.getElementById("bit");
      x.style.display = "none";

      

      var createNote = document.getElementById("createNote");
      var erstelleNote = document.getElementById("erstelleNote");
      var loescheFach = document.getElementById("loescheFach");
      var erstelleFach = document.getElementById("erstelleFach");
      var notenBereich = document.getElementById("notenBereich");
      erstelleNote.style.display = "block";
      loescheFach.style.display = "block";
      erstelleFach.style.display = "none";
      createNote.style.display = "none";
      notenBereich.style.display = "block";

      scene = 1;
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
    scene = true;
    

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


//Buttons für Faecher erstellen
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

      neuerButton.addEventListener('click', function(event){
        var x = document.getElementById("bit");
        var erstelleFach = document.getElementById("erstelleFach");
        var erstelleNote = document.getElementById("erstelleNote");
        var loescheFach = document.getElementById("loescheFach");
        var gedrueckteButtonId = event.target.id;
        document.getElementById('titel').textContent = gedrueckteButtonId;
            x.style.display = "none";
            scene = 1;
        erstelleFach.style.display = "none";
        erstelleNote.style.display = "block";
        loescheFach.style.display = "block";

        return(gedrueckteButtonId);
      });

     


      var container = document.getElementById('bit');
      container.appendChild(neuerButton);

      var gespeicherteButtons = localStorage.getItem('gespeicherteButtons');
      var buttonsObjekt = gespeicherteButtons ? JSON.parse(gespeicherteButtons) : {};
      buttonsObjekt[fach] = { id: fach, text: fach };
      localStorage.setItem('gespeicherteButtons', JSON.stringify(buttonsObjekt));
    
      
  });
});

//Buttons von Faecher löschen
document.addEventListener('DOMContentLoaded', function() {
  var loescheFach = document.getElementById('loescheFach');


loescheFach.addEventListener('click', function() {
  var x = document.getElementById("bit");
  var erstelleFach = document.getElementById("erstelleFach");
  var erstelleNote = document.getElementById("erstelleNote");
  var loescheFach = document.getElementById("loescheFach");
  var createNote = document.getElementById("createNote");
  var faecher = document.getElementById('titel');
  var buttonId = faecher.textContent;
  var button = document.getElementById(buttonId);

  
    x.style.display = "block";
    erstelleNote.style.display = "none";
    loescheFach.style.display = "none";
    erstelleFach.style.display = "block";
    createNote.style.display = "none";
  var gespeicherteButtons = localStorage.getItem('gespeicherteButtons');
  var buttonsObjekt = gespeicherteButtons ? JSON.parse(gespeicherteButtons) : {};

  if (buttonsObjekt.hasOwnProperty(buttonId)) {
    delete buttonsObjekt[buttonId];
    localStorage.setItem('gespeicherteButtons', JSON.stringify(buttonsObjekt));
    // Button aus dem DOM entfernen
    var buttonElement = document.getElementById(buttonId);
    if (buttonElement) {
      buttonElement.remove();
    }
  }

  document.getElementById('titel').textContent = "KBW";
});
});


document.addEventListener('DOMContentLoaded', function() {
  var erstelleNote = document.getElementById('erstelleNote');


  erstelleNote.addEventListener('click', function() {
    var createNote = document.getElementById('createNote');
    createNote.style.display = "block";
    var x = document.getElementById("bit");
    x.style.display = "none";
    
  });
});

//Noten erstellen
document.addEventListener('DOMContentLoaded', function() {
  var NotenSubmit = document.getElementById("notenSubmit");
  NotenSubmit.addEventListener('click', function() {
    var note = document.getElementById("note").value;
    var info = document.getElementById("info").value;
    var neueNote = document.createElement('button');
    neueNote.textContent = info + " " + note;
    neueNote.className = 'button-28';
    neueNote.id = "no";

    var createNote = document.getElementById('createNote');
    createNote.style.display = "none";
    var notenBereich = document.getElementById("notenBereich");
    notenBereich.style.display = "block";
    
    document.getElementById('note').value = "";
    document.getElementById("info").value = "";

    neueNote.addEventListener('click', function(event){
      var notenBereich = document.getElementById("notenBereich");
      var erstelleFach = document.getElementById("erstelleFach");
      var erstelleNote = document.getElementById("erstelleNote");
      var loescheFach = document.getElementById("loescheFach");
      var gedrueckteButtonId = event.target.id;
      document.getElementById('titel').textContent = "Note";
          notenBereich.style.display = "none";
          scene = 2;
      erstelleFach.style.display = "none";
      erstelleNote.style.display = "none";
      loescheFach.style.display = "none";
    });

    var container = document.getElementById('notenBereich');
    container.appendChild(neueNote);

    var gespeicherteNoten = localStorage.getItem('gespeicherteNoten');
    var notenObjekt = gespeicherteNoten ? JSON.parse(gespeicherteNoten) : {};
    notenObjekt[note] = { id: "no", text: info + " " +note };
    localStorage.setItem('gespeicherteNoten', JSON.stringify(notenObjekt));
  
});
});