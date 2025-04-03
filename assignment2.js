const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));

if (isNaN(maxLimit) || maxLimit <= 0) {
  console.error("Invalid input. Please enter a positive integer.");
} else {
   let addedValue = 0;

  for (let i = 0; i < maxLimit; i++) {
    for (let j = 0; j < maxLimit; j++) {
      addedValue = i + j;
      console.log(`[${i}] [${j}] Added value is ${addedValue}`);
    }
  }
}
