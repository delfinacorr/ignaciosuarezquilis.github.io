function mostrarResultados(informacion) {
  console.log(informacion);
  let dolaroficial = informacion[0].casa;
  let dolarblue = informacion[1].casa;
  let dolarMEP = informacion[4].casa;

  console.log(dolaroficial);
  document.getElementById(
    "dolaroficial"
  ).innerHTML = `${dolaroficial.compra} / ${dolaroficial.venta}`;
  console.log(dolarblue);
  document.getElementById(
    "dolarblue"
  ).innerHTML = `${dolarblue.compra} / ${dolarblue.venta}`;
  console.log(dolarMEP);
  document.getElementById(
    `dolarMEP`
  ).innerHTML = `${dolarMEP.compra} / ${dolarMEP.venta}`;
}

function consultaCotizaciones() {
  let informacion = [];
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((response) => response.json())
    .then(mostrarResultados);
}

consultaCotizaciones();