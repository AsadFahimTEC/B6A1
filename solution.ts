/*
- This solution.ts file is an example; replace it with your own code.
- Use the same function names and parameter names as in the problem statement.
- Write only the code inside the function bodies and return the result.
- Do not use any console.log statements or comments.
*/

function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  else if (typeof value === "number") {
    return value * 10;
  }
  return !value;

}


function getLength(value: string | unknown[]): number {
  if ((typeof value === "string") || (Array.isArray(value))) {
    return value.length;
  }
  return 0;
}


class Person {
  name: string;
  age: number;

  constructor(name: string,
    age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person('John Doe', 30);

const person2 = new Person('Alice', 25);


const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

type Item = {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]) {
  return items.filter(item => item.rating >= 4);
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]) {
  return users.filter(user => user.isActive === true);
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availiablity = book.isAvailable ? 'Yes' : 'No';
  (`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`);
}

printBookDetails(myBook);


function getUniqueValues(array1: (number | string)[], array2: (number | string)[]): (number | string)[] {
  const result: (number | string)[] = [];
  const combined = [array1 , array2];

  for (let a = 0; a < combined.length; a++) {
    const currentArray = combined[a];

    for (let i = 0; i < currentArray.length; i++) {
      let found = false;

      for (let j = 0; j < result.length; j++) {
        if (result[j] === currentArray[i]) {
          found = true;
          break;
        }
      }
      if (!found) {
        result[result.length] = currentArray[i];
      }
    }
  }
  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(getUniqueValues(array1, array2));






