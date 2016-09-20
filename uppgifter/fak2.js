//rekursion
function fak2 (n) {
  if(n===1) return 1;
  return fak2(n-1)*n;
}
alert (fak2(8));