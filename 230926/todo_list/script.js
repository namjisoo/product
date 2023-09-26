console.log('running...')
const input = document.getElementById('add-todo')
const addButton = document.querySelector('.add-button')
const list = document.getElementById('list')
// console.log(input)
// console.log(addButton)
// console.log(list)

input.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
     addListItem()
    }
})
addButton.addEventListener('click', () => {
    console.log(input.value)
    addListItem()
})

const addListItem = () => {
    if(input.value.length === 0){
        return alert('내용을 입력해주세요')
    }
    const li = document.createElement('li')
    li.innerHTML = `${input.value} <button class= "list-delete">&#x2716</button>`
    li.classList.add('list-item')
    list.append(li)
    input.value=''
    input.focus();
    saveList(list.innerHTML)
}

list.addEventListener('click', (e) => {
    // event.currenttarget: 이벤트가 걸려있는 해당요소
    // event.target: 클릭하는 요소
    console.log(e.target)

    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveList(list.innerHTML)
    }

    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
        saveList(list.innerHTML)
    }
})

//새로고침 했을 때 값이 저장되어 불러오게 만드는 것
//saveList가 필요한 곳 모두에 뿌려줘야 한다
const saveList = (list) => {
    localStorage.setItem('todo', JSON.stringify(list))
}

const loadList = () => {
    const getList = JSON.parse(localStorage.getItem('todo'))
    list.innerHTML = getList
}

//DOMcontentLoaded : DOM이 그려지고 난 뒤
//load : DOM도 그려지고, 이미지와 같은 요소들도 모두 로드되었을 때
document.addEventListener('DOMContentLoaded', loadList())