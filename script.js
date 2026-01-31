let BgSection=document.querySelector(".BgSection");
let prebtn=document.querySelector(".prebtn");
let nextBtn=document.querySelector(".nextBtn");

let bgarr=[
    '../images/Destinations/azhimala.webp',
    '../images/Destinations/kedarnath-temple.webp',
   '../images/Destinations/marinaBeach.jpg',
    '../images/Destinations/meghalaya.jpg',
    '../images/Destinations/rameshwaram.jpeg'
]
let curentBgimageindex=0;
function Add(){
    BgSection.style.backgroundImage=`url${bgarr[curentBgimageindex]}`
    console.log(bgarr[curentBgimageindex])
    
}
prebtn.addEventListener('click',()=>{
    curentBgimageindex++;
    if(curentBgimageindex==bgarr.length){
        curentBgimageindex=0;
    }
    Add()
})
nextBtn.addEventListener('click',()=>{
    curentBgimageindex--;
    if(curentBgimageindex==0){
        curentBgimageindex=bgarr.length-1;
    }
    Add()
})