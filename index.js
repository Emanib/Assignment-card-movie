// constants
const title = document.getElementById("title")
const Actor = document.getElementById("Actor")
const Producer = document.getElementById("Producer")
const year= document.getElementById("yearProduction")
const summary = document.getElementById("summary")
const titleData = document.getElementById("title-data")
const ActorData = document.getElementById("Actor-data")
const ProducerData = document.getElementById("Producer-data")
const yearData = document.getElementById("year-data")
const summaryData = document.getElementById("summary-data")
const img = document.getElementById("img")
  const file = document.querySelector('input[type=file]').files[0];

const imgData = document.getElementById("img-data")
// object 
const obj =
{
    title: title.value, Actor: Actor.value,
    Producer: Producer.value, year: year.value,
    summary: summary.value,
    img:img.value
}

// function binding 
function Binding(b)
{
    
 this.element = b.element; //div from html
  this.value = b.object[b.property]; //obj["key"]
  this.attribute = b.attribute; // type og dom "innerHTML"

  this.valueGetter = () => {
    return this.value; //obj["key"]
  };

  this.valueSetter = (val) => {
    this.value = val;
    this.element[this.attribute] = val; //div.innerHTML=obj["key"]
  };

  Object.defineProperty(b.object, b.property, {
    get: this.valueGetter,
    set: this.valueSetter,
  });

  b.object[b.property] = this.value;

  this.element[this.attribute] = this.value;
}

new Binding({
    object: obj,
    property: "title",
    element: titleData,
    attribute: "innerHTML",

})
new Binding({
    object: obj,
    property: "Actor",
    element: ActorData,
    attribute: "innerHTML",

})
new Binding({
    object: obj,
    property: "Producer",
    element: ProducerData ,
    attribute: "innerHTML",

})
new Binding({
    object: obj,
    property: "year",
    element: yearData,
    attribute: "innerHTML",

})
new Binding({
    object: obj,
    property: "summary",
    element: summaryData,
    attribute: "innerHTML",

})
new Binding({
    object: obj,
    property: "img",
    element: imgData,
    attribute: "innerHTML",

})
// title.addEventListener("input", e =>
// {
//     obj.title = e.target.value;
// })
// Actor.addEventListener("input", e =>
// {
//     obj.Actor = e.target.value
// })
// Producer.addEventListener("input", e =>
// {
//     obj.Producer= e.target.value
// })
// year.addEventListener("input", e =>
// {
//     obj.year= e.target.value
// })
// summary.addEventListener("input", e =>
// {
//     obj.summary= e.target.value
// })
// img.addEventListener("input", e =>
// {
//     obj.img= e.target.value
// })
