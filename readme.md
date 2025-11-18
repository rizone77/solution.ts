
Explain the difference between any, unknown, and never types in TypeScript.

any মানে হলো যেকোনো ভ্যালু চলবে, কোনো টাইপ চেক হবে না।
unknown এ যেকোনো ভ্যালু রাখা যায় 
আর never এমন যা কখনো রিটার্ন করে না।


What is the use of the keyof keyword in TypeScript? Provide an example.

keyof হলো object এর সব property কে একটি টাইপ হিসেবে বের করা।

type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; 
