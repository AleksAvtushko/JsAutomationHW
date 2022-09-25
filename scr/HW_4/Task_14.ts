
  const date1: Date = new Date();
  const month1 = date1.getMonth();
  const year1 = date1.getFullYear();
  const day = date1.getDate();

  console.log("текущая дата:" + ' ' + month1 + '/' + year1 + '/' + day);
  console.log("Текущее время:" + ' ' + date1.toLocaleTimeString());
