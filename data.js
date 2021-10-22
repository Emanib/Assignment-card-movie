const urlParam = new URLSearchParams(window.location.search)
let data = {};
data = Object.fromEntries(urlParam.entries());
console.log(data)

function card(data)
{

    const card = document.querySelector(".card")
    card.innerHTML = `
    
    
    <h1>  ${data.title}</h1>
       <p>  ${data.Actor}</p>
       <p> ${data.yearProduction} </p>
       <p>  ${data.Producer}</p>
         <p>  ${data.summary}</p>
         <img src = ${data.file} alt =".." />

    
   
    `
}
 card(data)