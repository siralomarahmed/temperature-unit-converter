// You can change the kelvin degree here:
const kelvin = 0;



let celsius = kelvin -273;
let fahrenheit = celsius * (9/5) + 32;
let newton = celsius * (33/100);

// Round the temperatures down
let roundedFahrenheit = Math.floor(fahrenheit);
let roundedNewton = Math.floor(newton);

console.log(
  `Here is the temperature values:
  The temperature in Kelvin = ${kelvin}
  The temperature in Celsius = ${celsius}
  The temperature in Fahrenheit = ${roundedFahrenheit}
  The temperature in Newton = ${roundedNewton}`
);