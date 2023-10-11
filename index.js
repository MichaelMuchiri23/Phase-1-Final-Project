//Adding link to API Documentation to the logo
const logo=document.querySelector('#logo');
document.addEventListener('DOMContentLoaded',()=>{
    const a=document.createElement('a')
    a.href='https://soruly.github.io/trace.moe-api/#/docs'
    document.querySelector('#first-div').appendChild(a)
    a.appendChild(logo)
})

//Adding a submit event listener to the form and performing a fetch
//request.
const form=document.querySelector('')