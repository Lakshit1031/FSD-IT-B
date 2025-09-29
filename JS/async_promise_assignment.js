function asyncAction(name, del) {
    console.log(`${name} start`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} end`);
            resolve();
        }, del);
    });
}

console.log("2300320130139");
asyncAction("login", 1000)
    .then(() => asyncAction("getData", 1000))
    .then(() => asyncAction("displayData", 1000))
    .then(() => console.log("call other application"));
