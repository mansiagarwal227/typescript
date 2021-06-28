var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var man = /** @class */ (function () {
    function man(name) {
        this.name = name;
    }
    man.prototype.display = function () {
        console.log(this.name);
    };
    return man;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(name, Id) {
        var _this = _super.call(this, name) || this;
        _this.id = Id;
        return _this;
    }
    employee.prototype.find = function (name) {
        return new employee(name, 1001);
    };
    return employee;
}(man));
var emp = new employee("mansi", 10001);
emp.display();
var emp2 = emp.find('agarwal');
