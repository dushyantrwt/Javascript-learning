function countVowels (str) {
    let count = 0;
    for (const char of str.toLowerCase()) {
        if ( char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
            count++;
         }
    }
    console.log(count);
};

// let count = countVowels("apna college");

// console.log(count);

const countVow = (str) => {
    let count = 0;
    for (const char of str.toLowerCase()) {
        if ( char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
            count++;
         }
    }
    console.log(count);
}