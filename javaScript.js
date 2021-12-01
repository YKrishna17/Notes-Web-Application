function addNote(){
    if(newNote.value==''){
        alert('Please enter some text for Note')
        return
    }
    if(list.firstElementChild.tagName=='P') empty.remove()
    let text=newNote.value
    let note=document.createElement("li")
    note.className='list-group-item d-flex justify-content-around'
    note.innerHTML=`<span class="fs-4 flex-grow-1 me-2 noteText">${text}</span>
    <button class="btn btn-outline-secondary edit me-3 align-self-center" onclick="editNote(this)">Edit</button>
    <button class="btn btn-outline-secondary remove align-self-center" onclick="removeNote(this)">Remove</button>`
    list.appendChild(note)
    newNote.value=''
}
function removeNote(e){
    e.parentElement.remove()
    if(list.children.length <=0){
        list.innerHTML=`<p class="text-center" id="empty">Notes are Empty</p>`
    }
}
function editNote(e){
    if(e.textContent=='Edit'){
        let text= e.previousElementSibling.textContent
        let reNew=document.createElement('input')
        reNew.type='text'
        reNew.className='form-control me-3'
        reNew.placeholder='Enter Note...'
        reNew.value=text
        e.parentElement.replaceChild(reNew,e.previousElementSibling)
        e.textContent='Done'
        reNew.focus()
    }else{
        e.textContent='Edit'
        let text=e.previousElementSibling.value
        let noteText=document.createElement('span')
        noteText.className='fs-4 flex-grow-1 me-2 noteText'
        noteText.textContent=text
        e.parentElement.replaceChild(noteText,e.previousElementSibling)
    }
}
add.addEventListener("click",addNote)

