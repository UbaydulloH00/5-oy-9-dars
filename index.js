const cards = document.getElementById('cards');
const btn = document.getElementById('btn');
const search = document.getElementById('search');
const button = document.getElementById('button');
const toza = document.getElementById('toza');

function setapis(){
  fetch('https://dummyjson.com/products')  
  .then(data =>{
    return data.json();
  })
  .then(dataJson=>{
    // console.log(dataJson);
    localStorage.setItem('counter',JSON.stringify(dataJson));
  })
  .catch(error=>{
    console.log(error);
  })
}

toza.addEventListener('click',function(){
  cards.innerHTML = '';
})

button.addEventListener('click',function(){
  let data = localStorage.getItem('counter')?JSON.parse(localStorage.getItem('counter')):[];
  let arr = [];
  arr = Object.values(data);
  arr.pop();
  arr.pop();
  arr.pop();
  let newarr =arr.flat();
  
  console.log(newarr);
 let fakedom = '';
 newarr.forEach(el => {
     let a = `
     <div class="card">
               <ul>
                   
                   <li>Brend: ${el.brand}</li>
                   <li>Sinfi: ${el.category}</li>
                   <li>Narxi: ${el.price} $</li>
                   <li>Tarifi: ${el.description}</li>

               </ul>
     </div> 
     `    
     fakedom +=a
 });
cards.innerHTML += fakedom;
})

document.addEventListener('DOMContentLoaded',function(){
  setapis();
  let data = localStorage.getItem('counter')?JSON.parse(localStorage.getItem('counter')):[];
  
});
btn.addEventListener('click',function(){
  cards.innerHTML = '';
  let sea = search.value;
  
  if(isNaN(sea)){
    let data = localStorage.getItem('counter')?JSON.parse(localStorage.getItem('counter')):[];
  let arr = [];
  arr = Object.values(data);
  arr.pop();
  arr.pop();
  arr.pop();
  let newarr =arr.flat();
  let filtered = newarr.filter(el=>{
    return el.brand.toLowerCase() === sea.toLowerCase();
  })
  let fakedom = '';
 filtered.forEach(el => {
     let a = `
     <div class="card">
               <ul>
                   
                   <li>Brend: ${el.brand}</li>
                   <li>Sinfi: ${el.category}</li>
                   <li>Narxi: ${el.price} $</li>
                   <li>Tarifi: ${el.description}</li>

               </ul>
     </div> 
     `    
     fakedom +=a
 });
cards.innerHTML += fakedom;
  }
  if(!isNaN(sea)){
    sea = sea *1;
    let data = localStorage.getItem('counter')?JSON.parse(localStorage.getItem('counter')):[];
  let arr = [];
  arr = Object.values(data);
  arr.pop();
  arr.pop();
  arr.pop();
  let newarr =arr.flat();
  let filtered = newarr.filter(el=>{
    return el.prise == sea;
  })
  let fakedom = '';
 filtered.forEach(el => {
     let a = `
     <div class="card">
               <ul>
                   
                   <li>Brend: ${el.brand}</li>
                   <li>Sinfi: ${el.category}</li>
                   <li>Narxi: ${el.price} $</li>
                   <li>Tarifi: ${el.description}</li>

               </ul>
     </div> 
     `    
     fakedom +=a
 });
cards.innerHTML += fakedom;
  }
})

