let header = document.querySelector('.header');
let site = document.querySelector('.site');
let cta = document.querySelector('.cta');

let imageOverlay = document.querySelector('.image-container').children[0];
let mainImage = document.querySelector('.image-container').children[1];

let links = Array.from(document.querySelectorAll('.link'));



function animate(){

    setTimeout(()=>{
        header.classList.add('active');
        imageOverlay.style.animation = 'slide 1s forwards';
        mainImage.style.animation = 'slide-perm 1s forwards';
    }, 2000);

    setTimeout(()=>{
        site.classList.add('active');
        cta.classList.add('active');
    },3000);

    links.forEach(link =>{
        setTimeout(()=>{
            link.classList.add('active');
        },(idx = 200) +2500);
    })
}

animate()


let aosElements = Array.from(document.querySelectorAll('.aos'));

window.addEventListener('scroll', _.throttle(scanElements, 50))


function scanElements(){
    aosElements.forEach(element => {
        if(isVisable(element)){
            element.classList.add('active');
        }else{
            element.classList.remove('active');
        }
    })
}



function isVisable(element){
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -300;
    return elementDiv.top - window.innerHeight < distanceFromTop? true : false;
}

// function throttle(fn, delay){
//     let lastCall = 0;

//     return (...arg)=>{
//       let context = this;
      
//       let current = new Date().getTime()

//       if (current - lastCall < delay){
//           return 
//       }
//       lastCall = current;
//       return fn.apply(context, ...args)

//     }
// }