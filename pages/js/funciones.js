function getAll()
{
 
 fetch("http://localhost:58112/api/Usuario")
 .then( (response) => response.json())
 .then ( (data) => {

  console.log(data)

 })   
}

function getId(id)
{


    fetch("http://localhost:58112/api/Usuario" + id)
    .then( (response) => response.json())
    .then ( (data) => {

      console.log(data)

 })
}

function post(obj)
{

    fetch("http://localhost:58112/api/Usuario", {

        method: "Post",
        body: JSON.stringify( obj)

    })
}

function Eliminar(id)
{
    fetch("http://localhost:58112/api/Usuario" + id, {
      method: "Delete"
})
}


function Put(id, obj)
{

    fetch("http://localhost:58112/api/Usuario" + id, {
     method: "Put",
     body: JSON.stringify( obj)

})
}