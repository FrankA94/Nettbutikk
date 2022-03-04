function show() {
    let html = '';
    html += `${showMeny()}
    
    ${model.innhold}
    `;
    appDiv.innerHTML = html;
}

function showMeny() {
    let html = `<div class="page"> <div class="menu">
    
    <button class="a" onclick="changePage('home')"> Hjem </button>
    <button class="a" onclick="changePage('shop')"> Sykler </button>
    <button class="a" onclick="changePage('gear')"> Utstyr </button>
    <button class="a" onclick="changePage('kurv')"> Handlekurv (${model.antallVarer}) </button>
    <button class="a" onclick="changePage('gallery')"> Galleri </button>
    <button class="a" onclick="changePage('kontakt')"> Kontakt </button>
    
    </div>
 </div>
 <br>
 
    `
    return html;
}

function changePage(side) {
    model.aktivside = side;
    updateView();
}
updateView();

function updateView() {
    const side = model.aktivside;
    if (side == 'home') viewHome();
    if (side == 'gear') viewGear();
    if (side == 'shop') viewShop();
    if (side == 'kurv') viewCart();
    if (side == 'kontakt') viewKontakt();
    if (side == 'kasse') viewKasse();
    if (side == 'gallery') viewGallery();
}

function viewHome() {

    let html = /*html*/`<div class="header">
     <h1>Velkommen til Ktm-shop!</h1>
    </div>
    <div class="mainContent">
    <p>
    &nbsp;  Her kan du ikke bestille sykler eller mc-utstyr!<br>
    &nbsp; Du kan heller ikke komme i kontakt med forhandlere!<br>
    &nbsp; Og du finner definitivt ingen nyttig informasjon om Ktm,<br>
    &nbsp; så her gjør du ikke annet enn å kaste bort tiden din!
    </div>
    <img src="https://s7g10.scene7.com/is/image/ktm/390_adv_22_header:Medium?wid=1607&hei=1200&dpr=off" alt="ktm.com">
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="fa fa-facebook">
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="fa fa-twitter">
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="fa fa-google">
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="fa fa-linkedin">
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="fa fa-youtube">
</div>
    `

    model.innhold = html;
    show()


}


function viewGear() {

    let html = '<div class="container"> <h1>Utstyr</h1> </div>';

    for (let i = 0; i < model.utstyr.length; i++) {
        let first = i % 3 == 0 ? 'first' : '';
        html += `<div class="mainContent">
        <div>
            Utstyr: ${model.utstyr[i].navn} <br>
            Pris: ${model.utstyr[i].pris} <br>
            På lager: ${model.utstyr[i].lagerAntall}<br>
            <button class="cell ${first} "onclick="addToVogn(${i})" >Legg til i handlevogn</button>
            <img class="albumPic" src="${model.utstyr[i].picture}">
            <hr>
            </div>
        </div>
        `
    }
    model.innhold = html;
    show();
}

function viewShop() {

    let html = '<div class="container"> <h1>Sykler</h1> </div>';

    for (let i = 0; i < model.produkt.length; i++) {
        let first = i % 3 == 0 ? 'first' : '';
        html += `<div class="mainContent">
        <div>
            Modell: ${model.produkt[i].navn} <br>
            Pris: ${model.produkt[i].pris} <br>
            På lager: ${model.produkt[i].lagerAntall} <br>
            <button  class="cell ${first} "onclick="addToCart(${i})">Legg til i handlevogn</button>
            <img class="albumPic" src="${model.produkt[i].picture}">
            <hr>
            </div>
        </div>
        `
    }
    model.innhold = html;
    show();
}

function viewCart() {

    let html = `<div class="container"> <h1>Handlekurv</h1> </div>
    <button onclick="changePage('kasse')"> Gå til kasse </button>
    <h2>&nbsp; Totalt: ${model.totalpris}kr</h2>
    `;

    for (let i = 0; i < model.handlekurv.length; i++) {
        html += ` <div class="mainContent">
            ${model.handlekurv[i]}
            <div class="flytt"><button class="cell "onclick="slett(${i})">slett</button> </div><hr>
           </div>
           `
    }

    model.innhold = html;
    show();
}

function viewKontakt() {
    let html = /*html*/`
    <div class="container"><h1>Kontakt forhandler!</h1> </div>
    <div class="kassa">
    <form action="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
    <label for="fname">Navn:</label><br>
    <input type="text" id="fname" name="firstname" placeholder="Skriv navn her"><br>
    <label for="lname">Etternavn:</label><br>
    <input type="text" id="lname" name="lastname" placeholder="Skriv etternavn her"><br>
    Epost:</label><br>
    <input type="text" id="email" name="email" placeholder="john@example.com"><br>
    <label for="subject">Din beskjed:</label><br>
    <textarea id="subject" name="subject" placeholder="Skriv her" style="height:170px"></textarea><br>
    <input type="submit" value="Send"><br>
    <div class="logo"> <img src="https://cdn-icons.flaticon.com/png/128/542/premium/542689.png?token=exp=1646054295~hmac=b5fcdaf94c7fd149d576e5fc372e4bb4"></div>
   </div>

    `
    model.innhold = html;
    show();
}
function viewKasse() {
    let html = /*html*/ `
    <div class="container"> <h1>Kasse</h1> </div>
    <h2>&nbsp; Totalt: ${model.totalpris}kr </h2>
    <div class="kassa">
    Navn:</label><br>
    <input type="text" id="fname" Navn="firstname" placeholder="Skriv navn her"><br>
    Etternavn:</label><br>
    <input type="text" id="fname" Navn="firstname" placeholder="Skriv etternavn her"><br>
    Epost:</label><br>
    <input type="text" id="email" name="email" placeholder="john@example.com"><br>
    Adresse:</label><br>
    <input type="text" id="adr" name="address" placeholder="Skriv adressen din her"><br>
    Sted :</label><br>
    <input type="text" id="city" name="city" placeholder="Sted"><br>
    Post.nr:</label><br>
    <input type="text" id="zip" name="zip" placeholder="Post.nr"><br><br><br>
    Navn på kort:</label><br>
    <input type="text" id="cname" name="cardname" placeholder="Navn på kort"><br>
    <label for="ccn">Kort.nr:</label><br>
    <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"><br>
    Utløpts.mnd:</label><br>
    <input type="text" id="expmonth" name="expmonth" placeholder="00"><br>
    Utløps.år</label><br>
    <input type="text" id="expyear" name="expyear" placeholder="0000"><br>
    CVV:</label><br>
    <input type="text" id="cvv" name="cvv" placeholder="xxx"><br><br>
    <button onclick=>Betal</button>
    </div>
    `

    model.innhold = html;
    show();
}

function viewGallery() {
    let html = /*html*/ `
   <div class="container"> <h1> Galleri</h1> </div>
<div class="galleri">
<div class="row">
<div class="column">

<img src="http://cdn.shopify.com/s/files/1/0951/1406/articles/2022-ktm-1290-super-adventure-r-lone-rider.jpg?v=1642093259" style="width:100%">
<img src="https://press.ktm.com/Content/572915/3cdc61e1-7d71-4046-ae88-e48797ef3834/1200/2400/.jpg" style="width:100%">
<img src="https://press.ktm.com/Content/502949/fa2cb68d-4922-430c-ac3e-7ad7952de044/1200/2400/.jpg" style="width:100%">
<img src="https://images.thequint.com/thequint%2F2019-09%2Fa984b4c1-30d0-4269-b8c8-7bcb0bbe5842%2F2018_KTM_790_Duke_India_Launch_Price_Engine_Specs_Features_Performance_Top_Speed_4.jpg?rect=0%2C0%2C1024%2C576" style="width:100%">
<img src="https://s7g10.scene7.com/is/image/ktm/enduro22-segment-header:Medium?wid=1838&hei=1382&dpr=off" style="widht%">
</div>
<div class="column">
<img src="https://s7g10.scene7.com/is/image/ktm/KTM_Segment_Freeride-E_Header_2020:Medium?wid=1838&hei=1376&dpr=off" style="widht%">
<img src="https://s7g10.scene7.com/is/image/ktm/336485_350%20XCF-W%202021:Small?wid=800&hei=800&dpr=off" style="widht%">
<img src="https://www.ktm.com/ktmgroup-storage/PHO_STAGE_390-duke-21-header_%23SALL_%23AEPI_%23V1.jpg" style="widht%">
<img src="https://s7g10.scene7.com/is/image/ktm/sdr-evo-22-header:Medium?wid=1838&hei=1379&dpr=off" style="widht%">
</div>
</div>
</div>

`

    model.innhold = html;
    show();
}



