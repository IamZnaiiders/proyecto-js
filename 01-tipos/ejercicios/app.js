const students = ["Ana", "Luis", "Carlos", "Andrea"]

const lista = document.getElementById("lista")

students.forEach(function (item) {
  const li = document.createElement("li")
  li.textContent = item
  lista.appendChild(li)
})


const data = [
  {id:1, nombre:"Juan"},
  {id:2, nombre:"María"},
  {id:3, nombre:"Luis"},
  {id:4, nombre:"Ana"},
  {id:5, nombre:"Pedro"},
  {id:6, nombre:"Laura"},
  {id:7, nombre:"Carlos"},
  {id:8, nombre:"Sofía"}
];
