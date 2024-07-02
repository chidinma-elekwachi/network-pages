// import React from "react";

let myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulating a condition

    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

myPromise
    .then((message) => {
        console.log(message); // "Operation successful!"
    })
    .catch((error) => {
        console.error(error); // "Operation failed!"
    });