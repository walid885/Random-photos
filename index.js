const imageContainerEL = document.querySelector(".imageContainer");
const btnEL = document.querySelector(".btn");
btnEL.addEventListener("click",()=>{
    imageNum = 10 ;
    AddNewImages()
})
function AddNewImages(){
    for (let index = 0; index < imageNum; index++) {
        const newImgEL = document.createElement("img");
        newImgEL.src=`https://picsum.photos/300?random=${Math.floor( Math.random()*2000)}`
        imageContainerEL.appendChild(newImgEL);        
    }
  
}