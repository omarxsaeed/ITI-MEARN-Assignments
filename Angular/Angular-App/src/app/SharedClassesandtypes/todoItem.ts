export class ToDoItem{
    constructor(public text:string,public isDone:boolean,public Date:Date){}
}

export interface IToDoItem{
     info:string,
     isDone:boolean,
     Date:Date
}