const loadFirst = async () => {
    const url =`https://openapi.programming-hero.com/api/news/categories`
    const res  = await fetch(url);
    const data = await res.json();
    displayFirst(data.data.news_category);
}
const displayFirst = phones => {
 console.log (phones);
 const category = document.getElementById("category");
 category.innerHTML =`` 
 phones.forEach(phone => {
  category.innerHTML += `<p onclick="loadMoreData('${phone.category_id}')" > ${phone.category_name}</p> `
 })
}

const loadMoreData = category_id => {
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}` 
  fetch(url)
  .then( res => res.json())
  .then ( data => displayNewData (data.data))
}
const displayNewData = phones => {
const mainContainer = document.getElementById ("main-container");
 mainContainer.innerHTML ='';
 phones.forEach (phone => {
  console.log (phone)
  const phoneDiv = document.createElement("phoneDiv")
  phoneDiv.classList.add('row')
  phoneDiv.innerHTML = `
  <div class="col-md-4">
            <img src="${phone.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8 ">
            <div class="card-body">
              <h5 class="card-title">${phone.title}</h5>
              <p class="card-text">${phone.details.slice(0 , 200)}...</p>
            <div class = "d-flex gap-5">
              <a class="navbar-brand rounded" href="#" >
              <img class ="rounded-lg" src="${phone.thumbnail_url}" width="30" height="30" alt="">
            </a>
            <div> 
            <p> ${phone.author.name ? phone.author.name :'payel dhar' } </p>
            <p> ${phone.author.published_date ? phone.author.published_date :'no date found'} </p>
            </div>
            <div>
            <i class="fa-regular fa-eye"></i> <span> ${ phone.total_view ? phone.total_view : 'no view' } </span>
            </div>
           <div>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star-half-stroke"></i>
           </div>
           <div>
          <button onclick ="loadMoreDetails('${phone.category_id}')" href="#" class="btn btn-primary mb-2 rounded"  data-bs-toggle="modal" data-bs-target="#exampleModal">Go somewhere</button>
          </div>
             </div>
          </div>
          </div>
  `
 mainContainer.appendChild(phoneDiv);
 })
toggleSpinner(false);
}
const loadMoreDetails = category_id =>{
  toggleSpinner(true);
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}` 
  fetch(url)
  .then(res => res.json())
  .then (data => displaymoreData (data.data[0]))
}
const displaymoreData = phones => {
  console.log (phones);
  const exampleModalLabel =document.getElementById('exampleModalLabel');
  exampleModalLabel.innerHTML = phones.author.name ? phones.author.name :'payel dhar' ;
  const modalBodies = document.getElementById("modal-bodies" );
  modalBodies.innerHTML = phones.title.slice(0 , 20);
  const modalFooter = document.getElementById ("modal-footer");
  modalFooter.innerHTML =`
  <img src="${phones.image_url}" class="img-fluid rounded-start" alt="...">
 
  <div class = "d-flex gap-5 justify-content-center">
              <a class="navbar-brand rounded" href="#" >
              <img src="${phones.thumbnail_url}" width="30" height="30" alt="">
            </a>
            <div> 
            <p> ${phones.author.published_date ? phones.author.published_date :'no date found'} </p>
            </div>
            <div>
            <i class="fa-regular fa-eye"></i> <span> ${ phones.total_view ? phones.total_view : 'no view' } </span>
            </div>
           <div>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star-half-stroke"></i>
           </div>
           <div>
  `

}
 const toggleSpinner = isloading => {
  const loader = document.getElementById ("loader");
  if(isloading){
    loader.classList.remove("d-none");
  }
  else{
    loader.classList.add("d-none");
  }
 }
loadFirst();
loadMoreData('01');