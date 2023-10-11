//Adding link to API Documentation to the eye logo
const logo=document.querySelector('#logo');
document.addEventListener('DOMContentLoaded',()=>{
    const a=document.createElement('a');
    a.href='https://soruly.github.io/trace.moe-api/#/docs';
    document.querySelector('#first-div').appendChild(a);
    a.appendChild(logo);
})

//Adding a submit event listener to the form and performing a fetch
//request.
const form=document.querySelector('#url-form');
form.addEventListener('submit',e=>{
    e.preventDefault();
    const input=document.querySelector('#img-url');

    fetch(`https://api.trace.moe/search?url=${input.value}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const video=document.querySelector('#video-result')
        const ul=document.querySelector('.info')
        const li1=document.createElement('li')
        const li2=document.createElement('li')
        const arr=data.result

        li1.className='name'
        li2.className='name'

        video.src=arr[0].video
        li1.textContent=arr[0].filename
        li2.textContent=arr[0].episode

        ul.appendChild(li1)
        ul.appendChild(li2)

    })
})

// Adding event listener to input element
const input=document.querySelector('#img-url')
input.addEventListener('click',()=>{
    input.classList.toggle('image-url')
})