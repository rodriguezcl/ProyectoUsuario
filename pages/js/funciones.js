//FUNCION GET

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

//FUNCION GET BY ID

function getId(id) {
  const _txtID = document.getElementById("txtID");
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

//FUNCION PUT

let obj = "";

function put(obj) {
  const _txtIDPut = document.getElementById("txtIDPut");
  const _txtNombrePut = document.getElementById("txtNombrePut");
  const _txtApellidoPut = document.getElementById("txtApellidoPut");
  const _txtDireccionPut = document.getElementById("txtDireccionPut");
  const _txtTelefonoPut = document.getElementById("txtTelefonoPut");

  obj = {
    id: _txtIDPut.value,
    Nombre: _txtNombrePut.value,
    Apellido: _txtApellidoPut.value,
    Direccion: _txtDireccionPut.value,
    Telefono: _txtTelefonoPut.value,
  };
  $.ajax({
    type: "PUT",
    dataType: "json",
    url: "http://localhost:58112/api/Usuario/" + obj.id,
    data: obj,
    success: function (data) {
      alert("PUT OK!");
      _txtIDPut.value = "";
      _txtNombrePut.value = "";
      _txtApellidoPut.value = "";
      _txtDireccionPut.value = "";
      _txtTelefonoPut.value = "";
      _txtIDPut.focus();
    },
    error: function (error) {
      alert(error);
    },
  });
}

//FUNCION POST

function post(obj) {
  const _txtNombrePost = document.getElementById("txtNombrePost");
  const _txtApellidoPost = document.getElementById("txtApellidoPost");
  const _txtDireccionPost = document.getElementById("txtDireccionPost");
  const _txtTelefonoPost = document.getElementById("txtTelefonoPost");

  obj = {
    Nombre: _txtNombrePost.value,
    Apellido: _txtApellidoPost.value,
    Direccion: _txtDireccionPost.value,
    Telefono: _txtTelefonoPost.value,
  };
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "http://localhost:58112/api/Usuario",
    data: obj,
    success: function (data) {
      alert("POST OK!");
      _txtNombrePost.value = "";
      _txtApellidoPost.value = "";
      _txtDireccionPost.value = "";
      _txtTelefonoPost.value = "";
      _txtNombrePost.focus();
    },
    error: function (error) {
      alert(error);
    },
  });
}

//FUNCION DELETE

let idEliminar = "";

function eliminar(idEliminar) {
  const _txtIDEliminar = document.getElementById("txtIDEliminar");

  idEliminar = {
    id: _txtIDEliminar.value,
  };

  $.ajax({
    type: "DELETE",
    dataType: "json",
    url: "http://localhost:58112/api/Usuario/" + idEliminar.id,
    data: idEliminar,
    success: function (data) {
      alert("DELETE OK!");
      _txtIDEliminar.value = "";
      _txtIDEliminar.focus();
    },
    error: function (error) {
      alert(error);
    },
  });
}

//FUNCION BUSCAR POR ID EN DELETE

function buscarDelete(id) {
  const _txtIDEliminar = document.getElementById("txtIDEliminar");
  id = _txtIDEliminar.value;

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:58112/api/Usuario/" + id,
    success: function (data) {
      const txtNombreDelete = document.getElementById("txtNombreDelete");
      const txtApellidoDelete = document.getElementById("txtApellidoDelete");
      const txtDireccionDelete = document.getElementById("txtDireccionDelete");
      const txtTelefonoDelete = document.getElementById("txtTelefonoDelete");

      txtNombreDelete.value = data.Nombre;
      txtApellidoDelete.value = data.Apellido;
      txtDireccionDelete.value = data.Direccion;
      txtTelefonoDelete.value = data.Telefono;
    },
  });
}

//FUNCION BUSCAR POR ID EN PUT

function buscarPut(id) {
  const txtIDPut = document.getElementById("txtIDPut");
  id = txtIDPut.value;

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:58112/api/Usuario/" + id,
    success: function (data) {
      const _txtNombrePut = document.getElementById("txtNombrePut");
      const _txtApellidoPut = document.getElementById("txtApellidoPut");
      const _txtDireccionPut = document.getElementById("txtDireccionPut");
      const _txtTelefonoPut = document.getElementById("txtTelefonoPut");

      _txtNombrePut.value = data.Nombre;
      _txtApellidoPut.value = data.Apellido;
      _txtDireccionPut.value = data.Direccion;
      _txtTelefonoPut.value = data.Telefono;
    },
  });
}
