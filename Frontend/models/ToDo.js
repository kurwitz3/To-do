class ToDo{
    static allToDos = []
    constructor({id,listItem}){
        this.id = id
        this.listItem = listItem
        ToDo.allToDos.push(this)
    }
}