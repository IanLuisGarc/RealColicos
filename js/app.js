//selecting .burger-menu class
const menu = document.querySelector('.burger-menu');

//selecting .navigation class
const navigation = document.querySelector('.navigation');

const images = document.querySelectorAll('img');

const btnAll = document.querySelector('.all');
const btnJw = document.querySelector('.jw');
const btnCr = document.querySelector('.cr');
const btnJd = document.querySelector('.jd');
const btnBs = document.querySelector('.bs');

const productContainer = document.querySelector('.products');

//adding browser loaded content event
document.addEventListener('DOMContentLoaded',()=>{

    //adding menu reveal event
    events();
    products();
});

//opening menu event
const events = () =>{
    menu.addEventListener('click', openMenu);
}

//removing .hide class 
const openMenu = () =>{
    navigation.classList.remove('hide');
    closeButton();
}

//creating 'x' element
const closeButton = () =>{
    const btnClose = document.createElement('p');
    const overlay = document.createElement('div');

    //adding .full-screen class
    overlay.classList.add('full-screen');

    const body = document.querySelector('body');
    if(document.querySelectorAll('.full-screen').length > 0) return;

    //adding .overlay html to body
    body.appendChild(overlay);
    btnClose.textContent = 'x';

    //adding .btn-close class
    btnClose.classList.add('btn-close')

    //adding .btnClose html
    navigation.appendChild(btnClose);
    closeMenu(btnClose,overlay);
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const image = entry.target;
            image.src = image.dataset.src;
            observer.unobserve(image);
        }
    })
});

images.forEach(image=>{
    
    observer.observe(image);
})

//deleting 'p' and overlay screen
const closeMenu = (button, overlay) =>{
    button.addEventListener('click',() =>{
        navigation.classList.add('hide');
        overlay.remove();
        button.remove();
    });

    //recharge .hide class
    overlay.onclick = function(){
        overlay.remove();
        navigation.classList.add('hide');
        button.remove();
    }
}

const products = () =>{
    let productArray = [];
    const products = document.querySelectorAll('.product');

    products.forEach(product=> productArray = [...productArray, product]);

    const walker= productArray.filter(jwk=> jwk.getAttribute('data-product') === 'jwk');
    const regal= productArray.filter(cre=> cre.getAttribute('data-product') === 'cre');
    const daniels= productArray.filter(jck=> jck.getAttribute('data-product') === 'jck');
    const ballantine= productArray.filter(bal=> bal.getAttribute('data-product') === 'bal');

    showProducts(walker, regal, daniels, ballantine, productArray);

}

const showProducts = (walker, regal, daniels, ballantine, all) =>{
    btnJw.addEventListener('click', ()=>{
        cleanHtml(productContainer);
        walker.forEach(jwk=>productContainer.appendChild(jwk));
    })

    btnCr.addEventListener('click', ()=>{
        cleanHtml(productContainer);
        regal.forEach(cre=>productContainer.appendChild(cre));
    })

    btnJd.addEventListener('click', ()=>{
        cleanHtml(productContainer);
        daniels.forEach(jck=>productContainer.appendChild(jck));
    })

    btnBs.addEventListener('click', ()=>{
        cleanHtml(productContainer);
        ballantine.forEach(bal=>productContainer.appendChild(bal));
    })

    btnAll.addEventListener('click', ()=>{
        cleanHtml(productContainer);
        all.forEach(all=>productContainer.appendChild(all));
    })
}

const cleanHtml = (container)=>{
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}