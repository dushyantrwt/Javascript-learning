let companies = ["Bloomberg", "Microsoft", "Uber", "google", "IBM", "Netflix"];

companies.shift();

console.log(companies);

companies.splice(2, 1, "Apple");

console.log(companies);