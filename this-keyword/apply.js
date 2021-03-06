
var lastName = 'Wrong Name'; // the var key word add the variable to the Window object
                                 // where "this" of declared functions using "function declaration" refers
const person = {
    firstName: 'Skandar',
    lastName: 'benali',
    greet() {
        function formatName () {
            return this.lastName.toUpperCase(); // note that this refers to Window Object
        }
        console.log('hi', this.firstName, formatName()); // note that this refers to the container object when it is directly in the method
        }
};
// change this using apply (call works exactly the same)
const person2 = {
    firstName: 'Skandar',
    lastName: 'benali',
    greet() {
        formatName = function () {
           return this.lastName.toUpperCase();
        };
        console.log('hi', this.firstName, formatName.apply(this));
    }
};

person.greet();
person2.greet();
