const data = [
    {title: '풍경1', url: 'image/1.jpg'},
    {title: '풍경2', url: 'image/2.jpg'},
    {title: '풍경3', url: 'image/3.webp'},
    {title: '풍경4', url: 'image/4.jpg'},
    {title: '풍경5', url: 'image/5.webp'},
]

const list = document.getElementById('list')
console.log(list)

for(let i = 0; i < data.length; i++){
    console.log(data[i])
    list.innerHTML +=`<li class="button">${data[i].title}</li>`
}

const buttons = document.querySelectorAll('.button')
console.log(buttons)
const image = document.getElementById('image')
const title = document.getElementById('title')
console.log(image)
console.log(title)

for(let i = 0; i< buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        console.log(data[i].url)
        image.src = data[i].url
        title.textContent = data[i].title

        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove('check')
        }
        
        buttons[i].classList.add('check')
    })
}

