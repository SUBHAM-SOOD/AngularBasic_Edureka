class ParentClass{

    j :number;
    constructor (k){
        this.j = k;
    }
}

class ChildClass extends ParentClass{
    l:number;
    constructor(m,k){
        super(k); //need to tell that we are inhariting this value
        this.l = m;
    }
    value(){
        return ("Value from child is "+this.l+ " and value from parent is "+this.j);
    }
}

let object01 = new ChildClass(10,20);
console.log(object01.value())
