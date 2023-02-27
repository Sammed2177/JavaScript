// How can you remove all the duplicate elements from an array in JavaScript?
/*
const arr = [1, 2, 3, 2, 4, 1];

const filteredArr = arr.filter((value, index, self) => {
  return self.indexOf(value) === index && self.includes(value);
});

console.log(filteredArr); 
*/

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", published: 1925, price: 9.99 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", published: 1960, price: 12.99 },
    { title: "1984", author: "George Orwell", published: 1949, price: 8.99 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", published: 1951, price: 11.99 },
    { title: "The Hunger Games", author: "Suzanne Collins", published: 2008, price: 14.99 },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", published: 1997, price: 10.99 },
    { title: "The Da Vinci Code", author: "Dan Brown", published: 2003, price: 9.99 }
  ];
  
// Use the filter() method to create a new array that includes only books published in the 21st century (i.e., after the year 2000).
// Use the map() method to create a new array that includes the titles of the books in the filtered array.
// Use the reduce() method to calculate the total price of all the books in the filtered array.

const res = books.filter(b => b.published >= 2000).map(b => b).reduce((i, b) => i + b.price, 0);
console.log(res);

