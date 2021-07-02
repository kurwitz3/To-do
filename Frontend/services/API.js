class API{
    static createToDo(input){
        const formData={
            to_do: input
        }
        const configObj ={
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }
        fetch('http://localhost:3000/',configObj)
        .then(resp => resp.json())
        .then(json => new ToDo(json))
    }
}