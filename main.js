//Q No 2:
//personal message: store a person's name in a veriable,and print a message to
//  that person.your message should be simple,such as, "hello eric,wold you like to learn some python today?"
//Task no 2
// let name1:string="Eric";
// console.log(`Hello ${name1}, would you like to learn some python today?`)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function creatcar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = creatcar("honda", "civic", { color: "white", year: "2023" });
console.log(mycar);
