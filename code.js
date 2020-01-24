
let t=document.getElementById("t");
let nbLigne=10;
let nbColonne=10;
let nbMines=20;
let imgMine=creerImage("mine.jpg");
let ca="";
let debug=true;


function creerImage(imgurl) {
    let img = document.createElement("img");
    img.src = imgurl;
    img.style.width = "40px";
    img.style.height = "40px";
    return img;
}



function creerTable(nbLigne, nbColonne) {
    t.style.border = "1px solid #444";
    document.body.appendChild(t);
    for (let i = 0; i < nbLigne; i++) {
        let l = document.createElement("tr");
        t.appendChild(l);
        for (let j = 0; j < nbColonne; j++) {
            let c = document.createElement("td");
            c.onclick = function() { chercherMine(this); };
            c.style.border = "1px solid #777";
            c.style.width = "40px";
            c.style.height = "40px";
            c.style.backgroundColor = "white";
          
            l.appendChild(c);
        }
    }
    return t;
}
creerTable(nbLigne, nbColonne);
ajouterMines();



function ajouterMines() {
 
    for (let i=0; i<nbMines; i++) {
      let l = Math.floor(Math.random() * 10);
      let c = Math.floor(Math.random() * 10);
      ca = t.rows[l].cells[c];
      ca.dataset.type="mine";
      if (debug==true) ca.innerHTML="X";  //=>img de mine
  }

}

/********************checher Mine v0.4************ */
function chercherMine(c) {
    if (ca.dataset.type=="mine") {
       boom();
        alert("Tu as perdu");
    }
  }
    /*else {
     
        
        for (let i= ;j< ;j++) {
          for(let j= ; j< ; j++) {
            if (t.rows[i].cells[j].dataset.type=="mine"){ 
            count++;
            }
          }
        }


        ca.innerHTML=count;
    if (count==0) { 
    
    
        
          if (t.rows[i].cells[j].innerHTML=="") chercherMine(t.rows[i].cells[j]){
      
          }
      }
    }
  }
*/
  function boom() {
     for (let i=0; i<nbLigne; i++) {
      for(let j=0; j<nbColonne; j++) {
        let c = c.lines[i].cols[j];
        if (ca.dataset.type=="mine") {

        }
      
    }
  }
}

