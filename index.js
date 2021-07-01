const workButton = document.querySelector('button')

document.addEventListener('DOMContentLoaded',function(){
  addWorkTask()
})


function addWorkTask(){
    const workInput = document.querySelector('input')
    const workOl = document.getElementById('work-ol')
    const workLi = document.createElement('li')
    workLi.setAttribute('class','work-li')
  workButton.addEventListener('click',() =>{
    workLi.innerText = workInput.value
    workOl.appendChild(workLi)

})
 
}