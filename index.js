//Adding link to API Documentation to the logo
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
        const arr=data.result

        video.src=arr[0].video
    })
})