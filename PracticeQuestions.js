
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function add(num1, num2){
  return num1 + num2 + x
}
console.log(add(2,2)) // returns 10

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const add2 = (num1, num2) => {
  return num1 + num2 + x
}
console.log(add2(7,7)) // returns 20

// 3. Write a function that returns another function. (use arrow functions please)
const addSomeThings = (num1, num2) => {
  return add2(num1, num2)
}

console.log(addSomeThings(7,7)) // returns 20

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

// it can still access it due to it still being in it's scope. the parent to the function 'insideFunc' will automatically pass it to it's children


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  
  return 'success'
}

console.log(couldThrowError())


////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const mappedResults = userData.map((user) => {
  return {
    "id" : user.id,
    "favoriteFoods" : user.favorites.food.length
  }
})
console.log(mappedResults)

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']
const reducedResults = userData.reduce((accumulator, user) => {

  if(user.favorites.food.includes('pizza')){
    return [...accumulator, user.name]
  }
  return accumulator
}, [])
console.log(reducedResults)

// 7. Show an an example of a switch statement being used
const switchMonth = () => {
  const monthsByNum = [1,2,3,4,5,6,7,8,9,10,11,12]
  return monthsByNum.map(month => {
    switch (month) {
      case 1: 
        return 'Jan'
      case 2: 
        return 'Feb'
      case 3: 
        return 'Mar'
      case 4: 
        return 'Apr'
      case 5: 
        return 'May'
      case 6: 
        return 'Jun'
      case 7: 
        return 'Jul'
      case 8: 
        return 'Aug'
      case 9: 
        return 'Sep'
      case 10: 
        return 'Oct'
      case 11: 
        return 'Nov'
      case 12: 
        return 'Dec'
      default: 
        return month
    }
  })
}

console.log(switchMonth())

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const fullUserData = {
  ...userPersonalData,
  ...userGameData
}

console.log(fullUserData)

// 9. Make a copy of your new user object but override the birthday to december 31st

const fullUserDataCopy = {
  ...fullUserData,
  birthday : 'december 31st'
}

console.log(fullUserDataCopy)
 

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable





//  11.Given the object below, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
};

const {name, age, favoriteThings : {food : favoriteFood2}} = user
console.log(favoriteFood2)

// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //
const [food1, food2] = favoriteFood2
console.log(food1, food2)


// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

const [name2, age2, ...foods] = data

console.log(name2, age2, foods)



// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

const {name : userName, favorites : {needs : {food : favoriteFood}, wants : {things : [favoriteThing1, secondFavoriteThing]}}} = userInfo
console.log(userName)
console.log(favoriteFood)
console.log(favoriteThing1)
console.log(secondFavoriteThing)

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData()
.then(res => console.log(res))
.catch(err => console.log(err))




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fetchData2 = async () => {
  await fetchData()
                  .then(res => console.log(res))
                  .catch(err=> console.log(err))
}

fetchData2()