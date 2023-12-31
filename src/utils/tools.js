const timeFormate = (date) => {

  if (!date) return "not found"

  let year = date.getFullYear()
  let month = date.getMonth() + 1 < 10
    ? "0" + (date.getMonth() + 1)
    : date.getMonth() + 1;
  let day = date.getDate() < 10
    ? "0" + date.getDate()
    : date.getDate();
  let hours = date.getHours() < 10
    ? "0" + date.getHours()
    : date.getHours();
  let minutes = date.getMinutes() < 10
    ? "0" + date.getMinutes()
    : date.getMinutes();
  let seconds = date.getSeconds() < 10
    ? "0" + date.getSeconds()
    : date.getSeconds();

  const nowdate = year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds

  return nowdate
}



export { timeFormate }
