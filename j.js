function store(e){
  e.preventDefault();
  let name= document.getElementById('firstname').value;
  let emailid= document.getElementById('email').value;
  let phn= document.getElementById('phno').value;

  const obj = {
    Name: name,
    Email_id: emailid,
    Phone_number: phn,
  }

  window.localStorage.setItem(name, JSON.stringify(obj));
  showdetails()
}

function showdetails(){
  let name= document.getElementById('firstname').value;
  let emailid= document.getElementById('email').value;
  let phn= document.getElementById('phno').value;

  const parentElement = document.getElementById('display')
  const childElement = document.createElement("li");
  childElement.innerHTML = `${name},${emailid}, ${phn}`;
  parentElement.appendChild(childElement);

  const btn = document.createElement("input");
  btn.type = "button";
  btn.value = "delete";
  childElement.appendChild(btn);

  btn.onclick=function(){
    parentElement.removeChild(childElement);
    localStorage.removeItem(name);
  }

  const edt = document.createElement("input");
  edt.type = "button";
  edt.value = "edit";
  childElement.appendChild(edt);

  btn.onclick=function(){
    parentElement.removeChild(childElement);
    localStorage.removeItem(name);
  }
  edt.onclick=function(){
    parentElement.removeChild(childElement);
    localStorage.removeItem(name);

    document.getElementById('firstname').value=name;
    document.getElementById('email').value=emailid;
    document.getElementById('phno').value=phn;
  }
}


  document.getElementById('detailsform').onsubmit=store;
  
  

