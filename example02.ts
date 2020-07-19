class myclass{
    
    j:number;

    constructor(k: number){
        this.j = k;

    }
    value (){
        return("the number is "+this.j)
    }

}

let myobj = new myclass(10)
    console.log(myobj.value()) 