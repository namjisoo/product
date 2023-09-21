const image= document.querySelectorAll('.image')
console.log(image)

for(let i = 0; i < image.length; i++){
    image[i].addEventListener('click', () => {
        for(let i = 0; i<image.length; i++){
            image[i].classList.remove('show')
        }
        image[i].classList.add('show')
    })
}