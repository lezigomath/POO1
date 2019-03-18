class Person {
    constructor (name, age)
{
    this.name = name; 
    this.age = age;
};

tellMyName () {
    return (`I am ${this.name}`);
}

tellMyAge () {
    return (`I am ${this.age} years old`);
}

}

person1 = new Person ("Jhon", 40);
person2 = new Person ("Mary", 35);

console.log(person1.tellMyName());
console.log(person1.tellMyAge());

console.log(person2.tellMyName());
console.log(person2.tellMyAge());