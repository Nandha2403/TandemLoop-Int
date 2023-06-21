const generateSeries = (x) => {
  let series = [];
  let num = 1;

  for (let i = 0; i < x; i++) {
    series.push(num);
    num += 2;
  }

  return series.join(", ");
};

// Enter the value of x here
const x = 4;
const series = generateSeries(x);
console.log("Output:", series);
