const workButton = document.querySelector('button')

document.addEventListener('DOMContentLoaded',function(){
  addWorkTask()
})


function addWorkTask(){
    const workInput = document.querySelector('input')
    const workOl = document.getElementById('work-ol')
    
  workButton.addEventListener('click',() =>{
    let workLi = document.createElement('li')
    workLi.setAttribute('class','work-li')
    const completeButton = document.createElement('button')
    completeButton.innerText = 'Completed Task'
    workLi.innerText = workInput.value
    workOl.append(workLi,completeButton)
    workInput.value = ''
})
 
}