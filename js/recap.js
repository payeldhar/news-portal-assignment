const loadMore = async _id =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${_id}`
    const res = await  fetch(url);
    const data = await res.json();
  displaySecond (data.data)
   }
   const displaySecond = phones => {
    console.log (phones);
    const mainContainer = document.getElementById("main-container");
   
     phoneDiv.classList.add(row);
     phoneDiv.innerHTML = `
     <img src="..." class="img-fluid rounded-start" alt="...">
     <div class="card-body ">
     <h5 class="card-title">${phones.category_name}</h5>
     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
     <button onclick ="loadMore($'{phone.category_id}')" href= "#" >information</button>
   </div>
     
     `
    mainContainer.appendChild(phoneDiv)
    
   }