const app = () => {
  var args = process.argv;
  var start = args.indexOf("--operation");
  if (start < 2) {
    console.log("Please enter the right statement");
    process.exit();
  }
  let operation = args[start + 1];
  let num;
  switch (operation) {
    case "addition":
      num = 0;
      for (let i = start + 2; i < args.length; i++) {
        num += Number.parseInt(args[i]);
      }
      console.log(num);
      break;
    case "multiplication":
      num = 1;
      for (let i = start + 2; i < args.length; i++) {
        num *= Number.parseInt(args[i]);
      }
      console.log(num);
      break;
    case "subtraction":
      num = 0;
      if (args.length != 6) {
        console.log("Please enter only two numbers for subtraction");
        break;
      }
      num += Number.parseInt(args[4]) - Number.parseInt(args[5]);
      console.log(num);
      break;

    case "division":
      num = 0;
      if (args.length != 6) {
        console.log("Please enter only two numbers for division");
        break;
      }
      num += Number.parseInt(args[4]) / Number.parseInt(args[5]);
      console.log(num);
      break;
    default:
      console.log(
        "Please choose from addition,subtraction,multiplication,division"
      );
      break;
  }
};
app();
