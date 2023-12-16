const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  let dev = data.filter((item) => item.profession == "developer");
  dev.map((dev) => console.log(dev));
}

// 2. Add Data
function addData() {
  let name = prompt("Enter your name.");
  let age = prompt("Enter your age.");
  let profession = prompt("Enter your profession.");
  let age2 = parseInt(age);
  let newArray = { name:name, age:age2, profession:profession };
  data.push(newArray);
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  let ans = data.filter((item) => item.profession != "admin");
  console.log(ans);
}

// 4. Concatenate Array
function concatenateArray() {
  let New_array = [
    { name: "Rajat", age: 30, profession: "developer" },
    { name: "Alex", age: 22, profession: "developer" }
  ];
  for (let i = 0; i < New_array.length; i++) {
    data.push(New_array[i]);
  }
  console.log(data);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  for (let key in data) {
    sum += data[key].age;
  }
  console.log("Average of the age is:- " + sum / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for (let key in data) {
    if (data[key].age >= 25) {
      console.log(data[key]);
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let ans = [];
  for (let key in data) {
    if (ans.includes(data[key].profession) == true) {
      continue;
    } else {
      ans.push(data[key].profession);
    }
  }
  console.log(ans);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  for (let key in data) {
    if (data[key].name === "john") {
      data[key].profession = "manager";
      console.log(data[key]);
    }
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let developer = 0;
  let admin = 0;
  for (let key in data) {
    if (data[key].profession==="developer") {
      developer++;
    }else if(data[key].profession==="admin") {
      admin++;
    }
  }
  console.log("Total number of developers :- "+ developer);
  console.log("Total number of admin :- "+ admin);
}