function addToCart(index) {
    if (model.produkt[index].lagerAntall == 0) alert('Beklager, varen er utsolgt');
    else {
        model.produkt[index].lagerAntall--;
        model.antallVarer++;
        model.totalpris += model.produkt[index].pris;
        model.prisliste.push(model.produkt[index].pris);
        model.handlekurv.push(
            model.produkt[index].navn
        )

    }
    viewShop();

}

function addToVogn(index) {
    if (model.utstyr[index].lagerAntall == 0) alert('Beklager, varen er utsolgt');
    else {
        model.utstyr[index].lagerAntall--;
        model.antallVarer++;
        model.totalpris += model.utstyr[index].pris;
        model.prisliste.push(model.utstyr[index].pris);
        model.handlekurv.push(model.utstyr[index].navn)

    }
    viewGear();
}

function slett(index) {
    model.handlekurv.splice(index, 1);
    model.antallVarer--;
    model.totalpris -= model.prisliste[index];
    model.prisliste.splice(index, 1);

    viewCart();
}















