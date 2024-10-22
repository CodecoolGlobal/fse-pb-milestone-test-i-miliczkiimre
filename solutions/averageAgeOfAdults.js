/*
Work only in the solution/*.js file, don't touch the other files.
Fill the function adultsAverageAge(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "name": "Alex Smith",
  "age": 20,
}

Calculate the average age of those users who are adults (above or equal 18). Return the result (as a number).
You do not have to deal with the case, when there are only underage users in the list.

*/

function averageAgeOfAdults(users) {
  let result = 0;
  let counter = 0;
    for (let index = 0; index < users.length; index++) {
      if (users[index].age >= 18){
      result += users[index].age
      counter += 1;}
    }
    result = result/counter;
    return result;
}

module.exports = averageAgeOfAdults;