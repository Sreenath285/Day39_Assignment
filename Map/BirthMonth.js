let sameBirthMonth = new Map();
for (month = 1; month <= 12; month++) {
  sameBirthMonth.set(month, 0);
}

let count = 0;
while (count <= 50) {
  let birthMonth = (Math.floor(Math.random() * 100) % 12) + 1;
  let year = "199" + (Math.floor(Math.random() * 10) % 10);
  if (year == "1992" || year == "1993") {
    sameBirthMonth.set(birthMonth, sameBirthMonth.get(birthMonth) + 1);
    count++;
  }
}
for (key of sameBirthMonth.keys()) {
  console.log( "Month : " + key + " - " + "Number of people having birthday in same month : " + sameBirthMonth.get(key));
}
