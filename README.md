## 🎯 Interview Questions - Blog Task


1. What are some differences between interfaces and types in TypeScript?
Answer:

১. Interface মূলত অবজেক্টকে বর্ণ্না করতে ব্যবহার করা হয় আর Type বেশী নমনীয়।

Interface মূলত Object এর গঠন বর্ণ্না করতে ব্যবহার করা হয়ে থাকে।

Example:

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

এখানে interface এর নাম হলো Book, যেখানে title,author key এর জন্য string ধরনের data, publishedYear এর জন্য নাম্বার এবং isAvailable key এর জন্য boolean ধরনের data 
সংজ্ঞায়িত করা হয়েছে। 


আর অন্যদিকে type Object ছাড়া যে কোনো কিছু বর্ণ্না করতে পারে। যেমনঃ 
- Union
- Primitive Types
- Tuples
- Function Types

Example:

type Item = {
  title: string;
  rating: number;
}

এখানে type এর নাম হলো Item যেখানে title এর জন্য string ধরনের data এবং rating এর জন্য নাম্বার ধরনের data 
সংজ্ঞায়িত করা হয়েছে।

২. interface বার বার declare করে একসাথে সংযুক্ত করা যায় কিন্তু type দিয়ে তা করা যায় না।

Example:

interface Person{
  name: string;
}

interface Person{
  age: number;
}

Final interface হবেঃ

interface Person{
  name: string;
  age: number;
}

Type এর ক্ষেত্রে duplicate type নামে Error দেখা দিবে।

Example:

type Person = {
  name: string;
}

type Person = {
  age: number
}

// Error - duplicate type

৩. Class এর সাথে interface বেশী ব্যবহার করা হয়ে থাকে। 

Example:

interface Vehicle {
  speed: number;
  drive(): void;
}

class Bike implements Vehicle{
  speed = 120;
  drive (){

  }
}

Type দিয়ে ও করা যায় তবে interface বেশী ব্যবহার করা হয়।

৪. Type union (|) বানাতে পারে কিন্তু interface বানাতে পারে না।

Example:

type Result = number | string | boolean;

এখানে type Result এর ধরন number অথবা string অথবা boolean হতে পারে।




2. What is the use of the `keyof` keyword in TypeScript? Provide an example.
3. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.
4. What is the use of `enums` in TypeScript? Provide an example of a numeric and string enum.
5. Provide an example of using **union** and **intersection** types in TypeScript.


---
