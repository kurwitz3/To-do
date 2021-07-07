class API{
    static addToDo(){
        return fetch('http://localhost:3000/to_dos',)
        .then(resp => resp.json())
        .then(json => {
            json.forEach(todo => {
                new ToDo(todo)
            })
        })
    }
    static createToDo(input){
        const formData={
            listItem: input
        }
        const configObj ={
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }
        fetch('http://localhost:3000/to_dos',configObj)
        .then(resp => resp.json())
        .then(json => new ToDo(json))
    }

    static deleteTodo(id){
       return fetch(`http://localhost:3000/to_dos/${id}`, {
            method: 'delete'
          })
    }
}