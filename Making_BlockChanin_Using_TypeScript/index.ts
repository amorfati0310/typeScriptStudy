const name = "Dali :ㅇ",
age = 31,
gender = "male";


const sayHi = (name, age, gender?)=> {
  console.log(`Hello ${name} you are ${age} adn ${gender}`)
}
sayHi(name, age);


// sayHI(name,age) typescript-> error 3개 받아야 하는데 2개쓰고 있어!
// ? optional
export {};