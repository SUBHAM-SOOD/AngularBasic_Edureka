var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ParentClass = /** @class */ (function () {
    function ParentClass(k) {
        this.j = k;
    }
    return ParentClass;
}());
var ChildClass = /** @class */ (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass(m, k) {
        var _this = _super.call(this, k) || this;
        _this.l = m;
        return _this;
    }
    ChildClass.prototype.value = function () {
        return ("Value from child is " + this.l + " and value from parent is " + this.j);
    };
    return ChildClass;
}(ParentClass));
var object01 = new ChildClass(10, 20);
console.log(object01.value());
