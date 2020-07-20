let name = "lm";
let age = 18;
function say() {
    console.log("hello");
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
export { name, age, say };
export default Person;