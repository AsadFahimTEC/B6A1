
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
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]) {
  return items.filter(item => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]) {
  return users.filter(user => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availiablity = book.isAvailable ? 'Yes' : 'No';
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`);
}


function getUniqueValues(array1: (number | string)[], array2: (number | string)[]): (number | string)[] {
  const result: (number | string)[] = [];
  const combined = [array1, array2];

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

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    let productTotal = product.price * product.quantity;
    if (product.discount) {
      productTotal -= (productTotal * product.discount) / 100;
    }
    return total + productTotal;
  }, 0);
}