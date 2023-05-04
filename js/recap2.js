const loadMore = async () => {
    const url = ` https://openapi.programming-hero.com/api/news/categories`
    const res  = await fetch(url);
    const data = await res.json();
    displayMore (data.data.news_category);
}
const displayMore =phones => {
    console.log(phones);
    phones.forEach(phone => {
        console.log (phone.category_name )
    })
}
document.getElementById("load").addEventListener ('click' , function (){
    const breaking = document.getElementById("breaking");
    breaking.innerHTML =`
    
   <li> ${category_name} </li>
    `
    breaking.appendChild(li)
})
loadMore()