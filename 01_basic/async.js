// console.log("Start");

// setTimeout(() => console.log("Hello Everyone "),2000);

// console.log("End");


const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 1000);
});

fetchData
    .then(data => console.log(data)) // Handles success
    .catch(error => console.error(error)); // Handles failure
