const myimg = document.getElementById('myimage');

myimg.addEventListener('mouseenter',() => {
    myimg.classList.remove('oldimgcss');
    myimg.classList.add('newimgcss');
});

myimg.addEventListener('mouseout',()=>{
    myimg.classList.remove('newimgcss');
    myimg.classList.add('oldimgcss');
})
    
