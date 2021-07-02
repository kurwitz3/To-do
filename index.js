const workButton = document.getElementsByClassName('button')
const workInput = document.getElementsByClassName('input')
const workOl = document.getElementsByClassName('work-ol')

document.addEventListener('DOMContentLoaded',function(){
butttonListener()
deleteButton( )
})

function appendDeleteButton(element){
    const completeButton = document.createElement('button')
    completeButton.setAttribute('class','work-complete-button')
    completeButton.innerText = 'Complete Task'
    element.appendChild(completeButton)
}

function createLi(input,ol){
    let workLi = document.createElement('li')
    workLi.setAttribute('class','work-li')
    workLi.innerText = input
    ol.append(workLi)
    appendDeleteButton(workLi)
    
}

function butttonListener(){
  for(i = 0; i < workButton.length; i++)
    workButton[i].addEventListener('click', (e) => {
      e.preventDefault()
      let inputValue = e.target.form.elements[0].value
      let div = e.target.form.nextElementSibling
      let taskOl = div.lastElementChild
      createLi(inputValue,taskOl)
      e.target.form.elements[0].value = ""
    })
}
 
function deleteButton(){
  for(i = 0; i< workOl.length; i++)
    workOl[i].addEventListener('click',function(e){
      e.target.closest('li').remove()
    })
}
