const lightOnImage = document.querySelector('.light--on--image');

window.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;

    lightOnImage.style.top = `${y - 100}px`;
    lightOnImage.style.left = `${x - 100}px`;
})