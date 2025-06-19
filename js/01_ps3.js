let marks = [85,97,44,37,76,60];
 let total = 0;

 for (let i=0; i<marks.length; i++) {
    total = total + marks[i];
 }

 let average = total / marks.length;

 console.log("Total Marks: "  + total);
    console.log("Average Marks: " + average);