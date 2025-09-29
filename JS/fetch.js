const url = "https://dummyjson.com/users";
const pr = fetch(url);
pr.then(function (response) {
    return response.json()
})
.then((data)=>{
    console.log("Data: ", data);
})
.catch((err)=>{
    console.log("Error: ", err);
})
.finally(()=>{
    console.log("Fetch attempt finished.");
});
console.log("After fetch call");
// Output will be:
// After fetch call
// Data:  {login: 'Lakshit1031', id: 12345678, ...}
// Fetch attempt finished.