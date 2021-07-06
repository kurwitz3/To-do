class API{
    static addToDo(){
        return fetch('http://localhost:3000/to_dos',)
        .then(resp => resp.json())
        .then(json => {
           for(let i = 0; i< Object.values(json).length; i++) 
              ToDo.createLi(Object.values(json)[i].listItem)
         } )
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
}