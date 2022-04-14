export function numberWithCommas(num) {
  //para birimlerini düzelmek için bir helper function
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
