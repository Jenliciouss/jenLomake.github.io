document.getElementById("lomake").addEventListener("submit", function(event) {

    event.preventDefault();

    let kayttajaID = document.getElementById("kayttajaID").value;
    let salasana = document.getElementById("salasana").value;
    let nimi = document.getElementById("nimi").value;
    let osoite = document.getElementById("osoite").value;
    let maa = document.getElementById("maa").value;
    let postinumero = document.getElementById("postinumero").value;
    let sahkoposti = document.getElementById("sahkoposti").value;

    let onnistui = true;

    document.getElementById("kayttajaIDVirhe").textContent = "";
    document.getElementById("salasanaVirhe").textContent = "";
    document.getElementById("nimiVirhe").textContent = "";
    document.getElementById("osoiteVirhe").textContent = "";
    document.getElementById("maaVirhe").textContent = "";
    document.getElementById("postinumeroVirhe").textContent = "";
    document.getElementById("sahkopostiVirhe").textContent = "";
    document.getElementById("sukupuoliVirhe").textContent = "";
    document.getElementById("kieliVirhe").textContent = "";
    document.getElementById("tulos").textContent = "";


    // käyttäjä ID

    if (kayttajaID === "") {
        document.getElementById("kayttajaIDVirhe").textContent =
            "Anna käyttäjä ID";
        onnistui = false;
    }
    else if (kayttajaID.length < 6) {
        document.getElementById("kayttajaIDVirhe").textContent =
            "Vähintään 6 merkkiä";
        onnistui = false;
    }


    // salasana

    if (salasana === "") {
        document.getElementById("salasanaVirhe").textContent =
            "Anna salasana";
        onnistui = false;
    }
    else if (salasana.length < 6) {
        document.getElementById("salasanaVirhe").textContent =
            "Vähintään 6 merkkiä";
        onnistui = false;
    }
    else {
        let numero = /[0-9]/;
        let isoKirjain = /[A-Z]/;
        let erikoismerkki = /[!@£$€&%#]/;

        if (!numero.test(salasana)) {
            document.getElementById("salasanaVirhe").textContent =
                "Salasanassa pitää olla numero.";
            onnistui = false;
        }
        else if (!isoKirjain.test(salasana)) {
            document.getElementById("salasanaVirhe").textContent =
                "Salasanassa pitää olla iso kirjain.";
            onnistui = false;
        }
        else if (!erikoismerkki.test(salasana)) {
            document.getElementById("salasanaVirhe").textContent =
                "Salasanassa pitää olla erikoismerkki.";
            onnistui = false;
        }
    }


    // nimi

    if (nimi === "") {
        document.getElementById("nimiVirhe").textContent =
            "Anna nimi";
        onnistui = false;
    }


    // osoite

    if (osoite === "") {
        document.getElementById("osoiteVirhe").textContent =
            "Anna osoite";
        onnistui = false;
    }


    // maa

    if (maa === "") {
        document.getElementById("maaVirhe").textContent =
            "Valitse maa";
        onnistui = false;
    }


    // postinumero

    if (postinumero === "") {
        document.getElementById("postinumeroVirhe").textContent =
            "Anna postinumero";
        onnistui = false;
    }
    else if (!/^[0-9]{5}$/.test(postinumero)) {
        document.getElementById("postinumeroVirhe").textContent =
            "Postinumerossa pitää olla 5 numeroa";
        onnistui = false;
    }


    // sähköposti

    if (sahkoposti === "") {
        document.getElementById("sahkopostiVirhe").textContent =
            "Anna sähköpostiosoite";
        onnistui = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sahkoposti)) {
        document.getElementById("sahkopostiVirhe").textContent =
            "Anna oikean muotoinen sähköpostiosoite";
        onnistui = false;
    }


    // sukupuoli

    let sukupuoli = document.querySelector(
        'input[name="sukupuoli"]:checked'
    );

    if (sukupuoli === null) {
        document.getElementById("sukupuoliVirhe").textContent =
            "Valitse sukupuoli";
        onnistui = false;
    }


    // kieli

    let kielet = document.querySelectorAll(
        'input[name="kieli"]:checked'
    );

    if (kielet.length === 0) {
        document.getElementById("kieliVirhe").textContent =
            "Valitse vähintään yksi kieli";
        onnistui = false;
    }


    // tulos

    if (onnistui) {
        document.getElementById("tulos").textContent =
            "Kiitos rekisteröitymisestä!";
    }

});