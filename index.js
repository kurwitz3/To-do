const workButton = document.querySelector('button')
const workInput = document.querySelector('input')
const workOl = document.getElementById('work-ol')

document.addEventListener('DOMContentLoaded',function(){
  
})

function appendDeleteButton(element){
    const completeButton = document.createElement('button')
    completeButton.setAttribute('class','work-complete-button')
    completeButton.innerText = 'Complete Task'
    element.appendChild(completeButton)
}

function createLi(){
    let workLi = document.createElement('li')
    workLi.setAttribute('class','work-li')
    workLi.innerText = workInput.value
    workOl.append(workLi)
    appendDeleteButton(workLi)
    workInput.value = ''
}

 workButton.addEventListener('click',createLi)
 workOl.addEventListener('click',function(e){
    e.target.closest('li').remove()
 })
 
