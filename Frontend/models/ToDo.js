class ToDo{
    static allToDos = []
    constructor({id,listItem}){
        this.id = id
        this.listItem = listItem
        ToDo.allToDos.push(this)
        ToDo.createLi(this.listItem)
    }
    
    static appendDeleteButton(element){
      let todoId = ToDo.allToDos[this.allToDos.length -1].id
      const completeButton = document.createElement('button')
      completeButton.setAttribute('class','work-complete-button')
      completeButton.setAttribute('id',`${todoId}`)
      completeButton.innerText = 'Task Completed'
      element.appendChild(completeButton)
      completeButton.addEventListener('click',() => {
        API.deleteTodo(todoId)
        element.remove()
      })
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
          e.target.form.elements[0].value = ""
        })
    }

  


  


}