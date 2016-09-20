alert (fak(7));
function fak(n) {
  if (n===1) return 1;
  if (n===2) return 2;
  let produkt=2;
  for (let i=2;i<=n;i++) {
     produkt=produkt*i;
  }
  return produkt;
}
 
