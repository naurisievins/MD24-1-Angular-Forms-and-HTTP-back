const dateFormat = () => {
  const objectDate = new Date();
  const day = `0${objectDate.getDate()}`;

  let month: string | number = objectDate.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }

  const year = objectDate.getFullYear();
  const hour = objectDate.getHours();
  let minute: string | number = objectDate.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  const dateFormat = `${day}-${month}-${year} ${hour}:${minute}`;

  return dateFormat;
};

export default dateFormat;
