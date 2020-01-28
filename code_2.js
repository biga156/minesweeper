
let t = document.getElementById("t");
let son= document.createElement("audio");
son.src="boom.mp3";
let debug = false; 

let nbLigne=10;
let nbCol=10 ;
let nbMine=20;
creerTable();

function creerImage(imgurl) {
    let img = document.createElement("img");
    img.src = imgurl;
    img.style.width = "40px";
    img.style.height = "40px";
    return img;
}

 function creerTable() {
 
  t.innerHTML="";
  for (let i=0; i<nbLigne; i++) {
    let l = document.createElement("tr");
    t.appendChild(l);
    l.style.border = "1px solid #444";
    for (let j=0; j<nbCol; j++) {
      let c = document.createElement("td");
      l.appendChild(c);
      c.onclick = function(e) { chercherMine(this,e); };
     
      //c.addEventListener("click",chercherMine(,e));
      c.style.border = "1px solid #777";
      c.style.width = "40px";
      c.style.height = "40px";
      c.style.backgroundColor = "white";
      c.dataset.type="vide";
    }
  }
  ajouterMines();
}

function ajouterMines() {
   for (let i=0; i<nbMine; i++) {
    let l = Math.floor(Math.random() * 10);
    let c = Math.floor(Math.random() * 10);
    let ca = t.rows[l].cells[c];
    ca.dataset.type="mine"
    if (debug==true){
     ca.innerHTML="X";
    }
  }
}

function chercherMine(ca,e) {

  if(e.ctrlKey){
    ca.appendChild(creerImage("flag.jpg"));
    //ca.style.backgroundColor = "red";
  }else{
    if (ca.dataset.type=="mine") {
      son.play();
      boom();
      //alert("Tu as perdu");
    } else {
      ca.style.backgroundColor = "#65B976";
    /*******************compteur*********************** */
      let compteur=0;
      let caLigne = ca.parentNode.rowIndex;
      let caCol = ca.cellIndex;
    
      for (let i=Math.max(caLigne-1,0); i<=Math.min(caLigne+1,9); i++) {
        for(let j=Math.max(caCol-1,0); j<=Math.min(caCol+1,9); j++) {
    
          if (t.rows[i].cells[j].dataset.type==="mine"){
              compteur++;
          }
        }
      }
      ca.innerHTML=compteur;          //resultat
        if (compteur==0) { 
          
          for (let i=Math.max(caLigne-1,0); i<=Math.min(caLigne+1,9); i++) {
          for(let j=Math.max(caCol-1,0); j<=Math.min(caCol+1,9); j++) {
          
            if (t.rows[i].cells[j].innerHTML==""){
            chercherMine(t.rows[i].cells[j],e);
            }
          }
        }
      }
      Verificateur();
    }
  }
}


function Verificateur() {
    let fin = true;
      for (let i=0; i<nbLigne; i++) {
        for(let j=0; j<nbCol; j++) {
          if ((t.rows[i].cells[j].dataset.type!="mine") && (t.rows[i].cells[j].innerHTML=="")){
           fin=false;
          }
        }
    }
    if (fin==true) {
      alert("Tu as gagné!");
     }
  }
  
  
function boom() {
  
    for (let i=0; i<nbLigne; i++) {
      for(let j=0; j<nbCol; j++) {
        let ca = t.rows[i].cells[j];
        if (ca.dataset.type=="mine") {
          ca.appendChild(creerImage("mine.jpg"));
          //ca.style.backgroundColor = "black";
        }
      }
    }
}
