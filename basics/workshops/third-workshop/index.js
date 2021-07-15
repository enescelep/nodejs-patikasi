const { circleArea, circleCircumference } = require('./circle');

const r = 5,
 area = circleArea(r).toFixed(2),
  circumference = circleCircumference(r).toFixed(2);

console.log(`Dairenin alanı: ${area}\nDairenin çevresi: ${circumference}`);