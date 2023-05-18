function getAll() {
  
  fetch("http://localhost:58112/api/Usuario")
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getAll");
      data.forEach((o) => {
        let _tr = `<tr>
        <td>${o.id} </td>
        <td>${o.Nombre} </td>
        <td>${o.Apellido} </td>
        <td>${o.Direccion} </td>
        <td>${o.Telefono} </td>   
        </tr>`;

        _tbody.innerHTML += _tr;
      });
    });
}
getAll();


function getId(id) {
    _txtID = document.getElementById("txtID");
    id = _txtID.value;
    
  fetch("http://localhost:58112/api/Usuario/" + id)
    .then((response) => response.json())
    .then((data) => {
      const _tbody = document.getElementById("getId");
      let _tr = `<tr>
      <td>${data.id} </td>
      <td>${data.Nombre} </td>
      <td>${data.Apellido} </td>
      <td>${data.Direccion} </td>
      <td>${data.Telefono} </td>   
      </tr>`;

      _tbody.innerHTML += _tr;


      _txtID.value = "";
      _txtID.focus();
    });
}

function post(obj) {
  fetch("http://localhost:58112/api/Usuario", {
    method: "Post",
    body: JSON.stringify(obj),
  });
}

function Eliminar(id) {
  fetch("http://localhost:58112/api/Usuario" + id, {
    method: "Delete",
  });
}

function Put(id, obj) {
  fetch("http://localhost:58112/api/Usuario" + id, {
    method: "Put",
    body: JSON.stringify(obj),
  });
}
