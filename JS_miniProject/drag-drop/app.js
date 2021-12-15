const item = document.querySelector('.item')
const placeholders= document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event){
    //console.log('drag start', event.target)
    event.target.classList.add('hold')
    setTimeout(() => {event.target.classList.add('hide')}, 0)
}

function dragend(event){
    //console.log('drag end')
    event.target.className = 'item' // Перетирает все классы, оставляет item
    //event.target.classList.remove('hold', 'hide')
}


function dragover (event) {
    //console.log('dragover')
    event.preventDefault()
}

function dragenter (event) {
    event.target.classList.add('hovered')
   // console.log('dragenter')
}

function dragleave (event) {
   // console.log('dragleave')
    event.target.classList.remove('hovered')
}

function dragdrop (event) {
   // console.log('dragdrop')
    event.target.classList.remove('hovered')
    event.target.append(item)
}