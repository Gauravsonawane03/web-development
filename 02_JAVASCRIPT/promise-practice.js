const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Operation successful");
    }, 2000);
});
console.log("Before");
myPromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });
console.log("After");

async function test() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
test();