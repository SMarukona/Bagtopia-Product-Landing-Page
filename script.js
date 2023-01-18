const header = document.querySelector('#header');

const   currentViewPointHeight = window.innerHeight;

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(header.style);
    if(scroll >= currentViewPointHeight/6){
        header.style.backgroundColor = '#fdeced';
        header.style.borderBottom = '1px solid hwb(352deg 85% 17%)';
        
    }else{
        header.style.backgroundColor = '';
        header.style.borderBottom = '';
    }
});


  