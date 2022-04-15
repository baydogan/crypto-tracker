export function numberWithCommas(num) {
  //para birimlerini düzelmek için bir helper function
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const convertTime = (date) => { //haberler icin time formatını düzenleme
  const d = new Date(date);
  return d.toLocaleString("tr-TR").slice(0, -8);
};
