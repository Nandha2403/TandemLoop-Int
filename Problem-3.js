const generateSeries = (a) => {
    let series = [];
    let num = 1;
  
    for (let i = 1; i < a; i++) {
      series.push(num);
      num += 2;
    }
  
    return series.join(", ");
  };
  
  // Enter the value of x here
  const x = 6;
  const series = generateSeries(x);
  console.log("Output:", series);
  