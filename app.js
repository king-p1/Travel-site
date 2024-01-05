AOS.init()


// homepage image slider

const sliderI = ['img1.png','img2.png','img3.png','img4.png','img5.png','img6.png',]

let slider = document.querySelector('.background-image')

let sliderGridItm = [...document.querySelectorAll('.griditem')]

let currentImg = 0

setInterval(()=>{
    changeSliderImg()
},5000)

const changeSliderImg = () =>{
    sliderGridItm.map((gridItem,index)=>{
        setTimeout(()=>{
            gridItem.classList.remove('hide')

setTimeout(()=>{

if(index=== sliderGridItm.length - 1){
    if(currentImg >= sliderI.length -1){
        currentImg=0

    }else{
        currentImg++
    }

slider.src =`img/${sliderI[currentImg]}`

sliderGridItm.map((item,i)=>{
    setTimeout(()=>{
        item.classList.add('hide')
    },i*100)
})

}

},100)


        },index * 100)
    })
}
// homepage image slider 


const navbar = document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
    if(scrollY >= 180){
        navbar.classList.add('bg')
    }else{
        navbar.classList.remove('bg')

    }
})