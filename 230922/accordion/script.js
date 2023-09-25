const listItem = document.querySelectorAll('.list-item')
console.log(listItem)

// for (let i = 0; i < listItem.length; i++) {
//     listItem[i].addEventListener('click', () => {
//         for(let i = 0; i < listItem.length; i++){
//             listItem[i].classList.remove('selected')
//         }
//         listItem[i].classList.add('selected')
//     })
// }

listItem.forEach(item => {
    item.addEventListener('click', () => {
        listItem.forEach(item => {
            item.classList.remove('selected')
        })
        item.classList.add('selected')
    })
})


