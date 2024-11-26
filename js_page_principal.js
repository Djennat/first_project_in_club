let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carcouselDom = document.querySelector('.carousel');
let listItemDDom = document.querySelector('.carousel .list');
let thumbnailDDom = document.querySelector('.carousel .thumbnail');
nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning =3000;//3s
let runTimeOut ;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    if( type === 'next'){
        listItemDDom.appendChild(itemSlider[0]);
        thumbnailDDom.appendChild(itemThumbnail[0]);//  move first to the end 
        carcouselDom.classList.add('next');
    }
    else{
        let positionLastItem = itemSlider.length - 1; //last item to fist position 
        listItemDDom.prepend(itemSlider[positionLastItem]);
        thumbnailDDom.prepend(itemThumbnail[positionLastItem]);  //prepend has the same pranciple of appendchild
        carcouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);    //to insure that the showSlider is run  the start from the beginig
    //
    runTimeOut =setTimeout(() =>{
        //to start from the begining
         carcouselDom.classList.remove('next');  //remove after 3s
         carcouselDom.classList.remove('prev');


    },timeRunning)
}