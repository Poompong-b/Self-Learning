import User, { printAge as printUserAge, printName } from "./user.js";

const user = new User("Bob", 11);
console.log(user);
printUserAge(user);
printName(user);
