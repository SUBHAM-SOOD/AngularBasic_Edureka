var myclass = /** @class */ (function () {
    function myclass(k) {
        this.j = k;
    }
    myclass.prototype.value = function () {
        return ("the number is " + this.j);
    };
    return myclass;
}());
var myobj = new myclass(10);
console.log(myobj.value());
