let a=document.getElementById("nom");
let b=document.getElementById("prenom");
let c=document.getElementById("adresse");
let d=document.getElementById("mail");
let e=document.getElementById("password");
let f=document.getElementById("Commentaire");
var y=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var z=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
let x=document.getElementById("reset")

function validation(){
    if(a.value==""){
        alert("Entrez Votre Nom");
        a.style.border="1px solid red";
    } else if(b.value==""){
        alert("Entrez Votre Prenom");
        b.style.border="1px solid red";
        //return false;
    }else if(c.value==""){
        alert("Entrez Votre Adresse");
        c.style.border="1px solid red";
    }else if(d.value=="" ){
        alert("Entrez Votre E-mail");
        d.style.border="1px solid red";
    }else if(e.value==""){
        alert("Entrez Votre Password");
        e.style.border="1px solid red"; 
    }else if(f.value==""){
        alert("Entrez Votre Commentaire");
        f.style.border="1px solid red"; 
    }
 else if(e.value.length<8){
         alert("Le Password doit contenir au minimum 8 caractéres");
         return false;
    }else if(!z.test(e.value)){
     alert('Please write a correct Password')
     e.value;
     return false;
    }

    else if (!y.test(d.value)) {
    alert('Please provide a valid email address');
    d.focus;
    return false;
     } 
   if(a.value!==""){
       a.style.border="1px solid green"
   } else if(b.value!==""){
     b.style.border="2px solid green"
   } 
   else if(b.value!==""){
    c.style.border="2px solid green"
  } 
  else if(b.value!==""){
    d.style.border="2px solid green"
  } 
  else if(b.value!==""){
    e.style.border="2px solid green"
  } 
  else if(b.value!==""){
    f.style.border="2px solid green"
  }else{
    return false;
  }
}
function reset(){
    x.reset();
}