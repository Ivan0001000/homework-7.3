function enterNum() {
  let number;
  let maxIterations = 10;

  for (let i = 0; i < maxIterations; i++) {
    number = parseInt(
      prompt(
        "Enter a numeric value that not bigger than 100 (attempt# " +
          (i + 1) +
          " of " +
          maxIterations +
          "):"
      )
    );

    while (isNaN(number)) {
      alert("You enterd not a numeric value. Please, try again");
      number = parseInt(
        prompt(
          "Enter a numeric value that not bigger than 100 (attempt# " +
            (i + 1) +
            " of " +
            maxIterations +
            "):"
        )
      );
    }
    if (number > 100) {
      console.log("You entered a numeric value bigger than 100: ", number);
      return;
    }
  }

  console.log(
    "You have not entered a number greater than 100. Last number entered: ",
    number
  );
}

enterNum();
