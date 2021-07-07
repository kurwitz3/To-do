class ToDo{
    static allToDos = []
    constructor({id,listItem}){
        this.id = id
        this.listItem = listItem
        ToDo.allToDos.push(this)
    }

    static appendDeleteButton(element){
      const completeButton = document.createElement('button')
      completeButton.setAttribute('class','work-complete-button')
      completeButton.innerText = 'Task Completed'
      element.appendChild(completeButton)
    }
    
    static createLi(input){
      let workLi = document.createElement('li')
      workLi.setAttribute('class','work-li')
      workLi.innerText = input
      workOl.append(workLi)
      ToDo.appendDeleteButton(workLi)
    }
    
     static butttonListener(){
      const workButton = document.getElementById('button')
        workButton.addEventListener('click', (e) => {
          const workInput = document.getElementById('input').value
          e.preventDefault()
          API.createToDo(workInput)
          ToDo.createLi(workInput)
          e.target.form.elements[0].value = ""
        })
    }
    
    static deleteButton(){
      workOl.addEventListener('click',function(e){
        e.target.closest('li').remove()
      })
    }
  


  


}