// Cvecara Iris - glavna skripta, 2026

var PREVODI = {
    sr: {
        // Navigacija
        nav_naziv: "Cvećara Iris", nav_pocetna: "Početna", nav_o_nama: "O nama",
        nav_usluge: "Usluge", nav_kontakt: "Kontakt", dugme_jezik: "English",
        btn_tema: "Tamna",
        // Početna - hero
        hero_naslov: "Cvećara Iris", hero_podnaslov: "Cveće koje govori iz srca",
        hero_dugme: "Pogledajte naš asortiman",
        // Početna - dobrodošlica
        dobrodoslica_naslov: "Dobrodošli u Cvećaru Iris",
        dobrodoslica_tekst: "Već više od 10 godina donosimo radost, ljubav i lepotu u vaše domove i srca. Svaki aranžman je priča za sebe — pažljivo sastavljena, sa ljubavlju prema cvećarskoj umetnosti.",
        dobrodoslica_tekst2: "Nudimo bukete od svežeg sezonskog cveća, dekoracije za svečanosti, venčanske aranžmane i brzu dostavu na vašu adresu.",
        btn_saznaj_vise: "Saznajte više o nama", btn_cenovnik: "Preuzmite cenovnik (PDF)",
        oznaka_iskustvo: "godina iskustva",
        // Početna - ponuda
        ponuda_naslov: "Naša ponuda", ponuda_podnaslov: "Pronađite savršen cvetni poklon za svaku prigodu",
        ukrasni_aranzmani: "Ukrasni aranžmani", ukrasni_opis: "Dekoracije za dom, kancelariju i poslovne prostore.",
        vencanja: "Venčanja", vencanja_opis: "Buket, dekoracija stola, luk — sve za vaš najsrećniji dan.",
        sahrane: "Sahrane i komemoracije", sahrane_opis: "Dostojni aranžmani kao izraz poslednje pažnje.",
        dostava: "Brza dostava", dostava_opis: "Dostavljamo sveže cveće na vašu adresu u roku od 2 sata.",
        link_saznaj_vise: "Saznaj više", link_naruci: "Naruči",
        // Početna - video
        video_naslov: "Umetnost cvećarstva", video_podnaslov: "Pogledajte kako nastaju naši aranžmani",
        // Početna - baner
        baner_naslov: "Naručite cveće danas",
        baner_tekst: "Iznenadite nekoga koga volite svežim buketom. Kontaktirajte nas i dostavićemo osmeh na vrata.",
        btn_kontakt: "Kontaktirajte nas",
        // Footer
        footer_nav_naslov: "Navigacija", footer_opis: "Cveće koje govori iz srca. Vaš pouzdani partner za sve cvećarske usluge u Zrenjaninu od 2013. godine.",
        footer_adresa: "Adresa: Ulica cveća 12, Zrenjanin", footer_tel: "Telefon: +381 23 123 456",
        footer_email: "Email: info@cvecarairis.rs", footer_radno: "Pon–Sub: 08:00–20:00, Ned: 09:00–15:00",
        footer_prava: "Sva prava zadržana.",
        // O nama
        o_nama_naslov: "O nama", o_nama_podnaslov: "Upoznajte ljude iza Cvećare Iris i priču koja nas inspiriše svakog dana",
        nasa_prica_naslov: "Naša priča",
        nasa_prica_t1: "Cvećara Iris osnovana je 2013. godine sa jednostavnom misijom — doneti radost i lepotu u svaki dom. Krenuli smo od male radnje u centru Zrenjanina, a danas smo jedna od najprepoznatljivijih cvećara u gradu.",
        nasa_prica_t2: "Ime Iris nije slučajno odabrano. Iris je cvet koji simbolizuje mudrost, pouzdanost i divljenje — vrednosti koje ugrađujemo u svaki aranžman koji izlazi iz naše radnje.",
        nasa_prica_t3: "Tokom godina izgradili smo tim stručnih cvećara koji svaki aranžman tretiraju kao umetničko delo.",
        btn_poseti_nas: "Posetite nas", oznaka_osnovana: "osnovana",
        nase_vrednosti_naslov: "Naše vrednosti", vrednosti_podnaslov: "Principi koji nas vode u radu svakog dana",
        vrednost1_naslov: "Svežina", vrednost1_tekst: "Cveće nabavljamo svakodnevno od proverenih dobavljača. Svaki buket sadrži isključivo sveže rezano cveće.",
        vrednost2_naslov: "Održivost", vrednost2_tekst: "Koristimo ekološki prihvatljive materijale za pakovanje i sarađujemo sa lokalnim uzgajivačima cveća.",
        vrednost3_naslov: "Kreativnost", vrednost3_tekst: "Svaki aranžman je jedinstven. Slušamo vaše želje i stvaramo nešto posebno upravo za vas.",
        vrednost4_naslov: "Pouzdanost", vrednost4_tekst: "Dostavljamo na vreme, bez izuzetaka. Vaše poverenje nam je najvažnija nagrada.",
        statistike_naslov: "Cvećara Iris u brojevima",
        stat1: "godina iskustva", stat2: "zadovoljnih kupaca", stat3: "venčanja ukrašena", stat4: "stručna cvećara",
        // Usluge
        usluge_naslov: "Naše usluge", usluge_podnaslov: "Pronađite savršen cvetni poklon za svaku prigodu",
        bedz1: "Sveže cveće", bedz2: "Brza dostava", bedz3: "Individualni pristup",
        sta_nudimo: "Šta nudimo", klikni_vise: "Kliknite na uslugu za više informacija",
        dekoracija_naslov: "Dekoracija prostora",
        kartica1_tekst: "Ručno pravljeni buketi od svežeg sezonskog cveća. Idealni za rodjendane, godišnjice i poklone.",
        kartica2_tekst: "Kompletna cvetna dekoracija za vaš najlepši dan. Buket za mladu, dekoracija stola i cvetni luk.",
        kartica3_tekst: "Ulepšajte vaš dom ili poslovni prostor sa našim ukrasnim kompozicijama.",
        kartica4_tekst: "Brza i pouzdana dostava svežeg cveća na vašu adresu u Zrenjaninu i okolini.",
        cena1: "od 1.200 RSD", cena2: "od 8.000 RSD", cena3: "od 2.500 RSD", cena4: "300 RSD dostava",
        cenovnik_naslov: "Cenovnik", cenovnik_napomena: "Informativne cene — kontaktirajte nas za individualnu ponudu",
        tabela_kol1: "Usluga / Proizvod", tabela_kol2: "Opis", tabela_kol3: "Cena (RSD)",
        red1_naziv: "Buket ruža (10 kom.)", red1_opis: "Sveže crvene, bele ili roze ruže", red1_cena: "od 1.500",
        red2_naziv: "Buket mešanog cveća", red2_opis: "Sezonsko cveće po izboru", red2_cena: "od 1.200",
        red3_naziv: "Venčani buket za mladu", red3_opis: "Belo cveće, kaskadni ili okrugli stil", red3_cena: "od 8.000",
        red4_naziv: "Dekoracija venčanog stola", red4_opis: "Centerpiece, niski ili visoki aranžman", red4_cena: "od 5.000",
        red5_naziv: "Cvetni luk", red5_opis: "Sveže cveće, 2x2 m luk", red5_cena: "od 25.000",
        red6_naziv: "Sahranički aranžman", red6_opis: "Venac ili visoki aranžman", red6_cena: "od 3.000",
        red7_naziv: "Ukrasna kompozicija za dom", red7_opis: "Mešano cveće u vazi ili korpi", red7_cena: "od 2.500",
        red8_naziv: "Dostava", red8_opis: "Zrenjanin i okolina (do 20 km)", red8_cena: "300",
        faq_naslov: "Često postavljena pitanja",
        faq1_pitanje: "Kako da naručim cveće?",
        faq1_odgovor: "Cveće možete naručiti pozivom na broj +381 23 123 456, putem emaila info@cvecarairis.rs ili popunjavanjem forme na stranici Kontakt.",
        faq2_pitanje: "Koliko unapred treba naručiti za venčanje?",
        faq2_odgovor: "Za venčanja preporučujemo narudžbinu najmanje 2–3 meseca unapred, posebno za letnju sezonu. Konsultacija je besplatna.",
        faq3_pitanje: "Da li dostavljate van Zrenjanina?",
        faq3_odgovor: "Redovna dostava je u granicama Zrenjanina. Za mesta do 20 km dostava je moguća uz dogovor i prilagođenu cenu.",
        faq4_pitanje: "Kako da čuvam cveće da duže traje?",
        faq4_odgovor: "Preporučujemo: sveža voda svaka 2 dana, dijagonalno rezanje stabljike i čuvanje na hladnom mestu. Uz svaki buket dobijate prašak za cveće.",
        cta_naslov: "Niste pronašli šta tražite?",
        cta_tekst: "Kontaktirajte nas i napravićemo individualni aranžman prema vašim željama.",
        // Kontakt
        kontakt_naslov: "Kontaktirajte nas",
        kontakt_podnaslov: "Tu smo za vas svakog radnog dana. Pošaljite nam poruku ili nas posetite u radnji.",
        info_naslov: "Informacije", poruka_naslov: "Pošaljite poruku",
        adresa_label: "Adresa", adresa_vrednost: "Ulica cveća 12, 23000 Zrenjanin, Srbija",
        telefon_label: "Telefon", email_label: "Email", radno_label: "Radno vreme",
        radno_tekst: "Ponedeljak – Subota: 08:00 – 20:00 | Nedjelja: 09:00 – 15:00",
        label_ime: "Ime i prezime", label_telefon: "Telefon", label_email: "Email adresa",
        label_usluga: "Vrsta usluge", label_datum: "Željeni datum isporuke", label_poruka: "Poruka",
        label_saglasnost: "Saglasan/na sam sa obradom ličnih podataka.",
        opcija_izaberite: "— Izaberite uslugu —", opcija_buket: "Buket / Aranžman",
        opcija_vencanje: "Venčanje", opcija_sahrana: "Sahrana / Komemoracija",
        opcija_dekoracija: "Dekoracija prostora", opcija_dostava: "Dostava cveća", opcija_ostalo: "Ostalo",
        btn_posalji: "Pošaljite poruku",
        greska_ime: "Unesite vaše ime i prezime.", greska_telefon: "Unesite ispravan broj telefona.",
        greska_email: "Unesite ispravnu email adresu.", greska_datum: "Datum ne može biti u prošlosti.",
        greska_poruka: "Unesite poruku (najmanje 10 karaktera).", greska_saglasnost: "Morate prihvatiti uslove.",
        poruka_uspeh: "Hvala! Vaša poruka je uspešno poslata. Javićemo vam se u najkraćem roku."
    },
    en: {
        nav_naziv: "Iris Flower Shop", nav_pocetna: "Home", nav_o_nama: "About Us",
        nav_usluge: "Services", nav_kontakt: "Contact", dugme_jezik: "Srpski",
        btn_tema: "Dark",
        hero_naslov: "Iris Flower Shop", hero_podnaslov: "Flowers that speak from the heart",
        hero_dugme: "Browse our selection",
        dobrodoslica_naslov: "Welcome to Iris Flower Shop",
        dobrodoslica_tekst: "For over 10 years, we have been bringing joy, love and beauty into your homes and hearts. Every arrangement tells its own story — carefully composed, with love for the art of floristry.",
        dobrodoslica_tekst2: "We offer bouquets of fresh seasonal flowers, event decorations, wedding arrangements and fast delivery to your address.",
        btn_saznaj_vise: "Learn more about us", btn_cenovnik: "Download price list (PDF)",
        oznaka_iskustvo: "years of experience",
        ponuda_naslov: "Our Offer", ponuda_podnaslov: "Find the perfect floral gift for any occasion",
        ukrasni_aranzmani: "Decorative Arrangements", ukrasni_opis: "Decorations for home, office and business spaces.",
        vencanja: "Weddings", vencanja_opis: "Bouquet, table decor, arch — everything for your happiest day.",
        sahrane: "Funerals & Commemorations", sahrane_opis: "Dignified arrangements as a final gesture of respect.",
        dostava: "Fast Delivery", dostava_opis: "We deliver fresh flowers to your address within 2 hours.",
        link_saznaj_vise: "Learn more", link_naruci: "Order",
        video_naslov: "The Art of Floristry", video_podnaslov: "See how our arrangements are made",
        baner_naslov: "Order flowers today",
        baner_tekst: "Surprise someone you love with a fresh bouquet. Contact us and we'll deliver a smile to their door.",
        btn_kontakt: "Contact us",
        footer_nav_naslov: "Navigation", footer_opis: "Flowers that speak from the heart. Your trusted partner for all floral services in Zrenjanin since 2013.",
        footer_adresa: "Address: Cveća Street 12, Zrenjanin", footer_tel: "Phone: +381 23 123 456",
        footer_email: "Email: info@cvecarairis.rs", footer_radno: "Mon–Sat: 08:00–20:00, Sun: 09:00–15:00",
        footer_prava: "All rights reserved.",
        o_nama_naslov: "About Us", o_nama_podnaslov: "Meet the people behind Iris Flower Shop and the story that inspires us every day",
        nasa_prica_naslov: "Our Story",
        nasa_prica_t1: "Iris Flower Shop was founded in 2013 with a simple mission — to bring joy and beauty into every home. We started from a small shop in the center of Zrenjanin, and today we are one of the most recognized flower shops in the city.",
        nasa_prica_t2: "The name Iris was not chosen by accident. Iris is a flower that symbolizes wisdom, trust and admiration — values we build into every arrangement that leaves our shop.",
        nasa_prica_t3: "Over the years we have built a team of skilled florists who treat every arrangement as a work of art.",
        btn_poseti_nas: "Visit us", oznaka_osnovana: "founded",
        nase_vrednosti_naslov: "Our Values", vrednosti_podnaslov: "The principles that guide our work every day",
        vrednost1_naslov: "Freshness", vrednost1_tekst: "We source flowers daily from trusted suppliers. Every bouquet contains only freshly cut flowers.",
        vrednost2_naslov: "Sustainability", vrednost2_tekst: "We use eco-friendly packaging materials and work with local flower growers.",
        vrednost3_naslov: "Creativity", vrednost3_tekst: "Every arrangement is unique. We listen to your wishes and create something special just for you.",
        vrednost4_naslov: "Reliability", vrednost4_tekst: "We deliver on time, without exception. Your trust is our most important reward.",
        statistike_naslov: "Iris Flower Shop in numbers",
        stat1: "years of experience", stat2: "satisfied customers", stat3: "weddings decorated", stat4: "skilled florists",
        usluge_naslov: "Our Services", usluge_podnaslov: "Find the perfect floral gift for any occasion",
        bedz1: "Fresh flowers", bedz2: "Fast delivery", bedz3: "Personal approach",
        sta_nudimo: "What We Offer", klikni_vise: "Click on a service for more information",
        dekoracija_naslov: "Space Decoration",
        kartica1_tekst: "Handmade bouquets from fresh seasonal flowers. Perfect for birthdays, anniversaries and gifts.",
        kartica2_tekst: "Complete floral decoration for your most beautiful day. Bridal bouquet, table decor and floral arch.",
        kartica3_tekst: "Beautify your home or business space with our decorative compositions.",
        kartica4_tekst: "Fast and reliable delivery of fresh flowers to your address in Zrenjanin and surroundings.",
        cena1: "from 1,200 RSD", cena2: "from 8,000 RSD", cena3: "from 2,500 RSD", cena4: "300 RSD delivery",
        cenovnik_naslov: "Price List", cenovnik_napomena: "Prices are approximate — contact us for a personalized quote.",
        tabela_kol1: "Service / Product", tabela_kol2: "Description", tabela_kol3: "Price (RSD)",
        red1_naziv: "Rose bouquet (10 pcs.)", red1_opis: "Fresh red, white or pink roses", red1_cena: "from 1,500",
        red2_naziv: "Mixed flower bouquet", red2_opis: "Seasonal flowers of your choice", red2_cena: "from 1,200",
        red3_naziv: "Bridal bouquet", red3_opis: "White flowers, cascade or round style", red3_cena: "from 8,000",
        red4_naziv: "Wedding table decoration", red4_opis: "Centerpiece, low or high arrangement", red4_cena: "from 5,000",
        red5_naziv: "Floral arch", red5_opis: "Fresh flowers, 2x2 m arch", red5_cena: "from 25,000",
        red6_naziv: "Funeral arrangement", red6_opis: "Wreath or tall arrangement", red6_cena: "from 3,000",
        red7_naziv: "Home decorative arrangement", red7_opis: "Mixed flowers in vase or basket", red7_cena: "from 2,500",
        red8_naziv: "Delivery", red8_opis: "Zrenjanin and surroundings (up to 20 km)", red8_cena: "300",
        faq_naslov: "Frequently Asked Questions",
        faq1_pitanje: "How do I order flowers?",
        faq1_odgovor: "You can order flowers by calling +381 23 123 456, via email info@cvecarairis.rs or by filling out the form on the Contact page.",
        faq2_pitanje: "How far in advance should I book for a wedding?",
        faq2_odgovor: "For weddings we recommend booking at least 2–3 months in advance, especially for the summer season. Consultation is free.",
        faq3_pitanje: "Do you deliver outside Zrenjanin?",
        faq3_odgovor: "Regular delivery is within Zrenjanin. For locations up to 20 km away, delivery is possible by arrangement.",
        faq4_pitanje: "How do I keep flowers fresh longer?",
        faq4_odgovor: "We recommend: fresh water every 2 days, diagonal stem cutting and keeping them in a cool place. Each bouquet comes with flower food.",
        cta_naslov: "Didn't find what you're looking for?",
        cta_tekst: "Contact us and we will create a custom arrangement according to your wishes.",
        kontakt_naslov: "Contact Us",
        kontakt_podnaslov: "We are here for you every working day. Send us a message or visit us in the shop.",
        info_naslov: "Information", poruka_naslov: "Send a Message",
        adresa_label: "Address", adresa_vrednost: "Cveća Street 12, 23000 Zrenjanin, Serbia",
        telefon_label: "Phone", email_label: "Email address", radno_label: "Working Hours",
        radno_tekst: "Monday – Saturday: 08:00 – 20:00 | Sunday: 09:00 – 15:00",
        label_ime: "Full name", label_telefon: "Phone", label_email: "Email address",
        label_usluga: "Type of service", label_datum: "Desired delivery date", label_poruka: "Message",
        label_saglasnost: "I agree to the processing of personal data.",
        opcija_izaberite: "— Select a service —", opcija_buket: "Bouquet / Arrangement",
        opcija_vencanje: "Wedding", opcija_sahrana: "Funeral / Commemoration",
        opcija_dekoracija: "Space Decoration", opcija_dostava: "Flower Delivery", opcija_ostalo: "Other",
        btn_posalji: "Send Message",
        greska_ime: "Please enter your full name.", greska_telefon: "Please enter a valid phone number.",
        greska_email: "Please enter a valid email address.", greska_datum: "Date cannot be in the past.",
        greska_poruka: "Please enter a message (at least 10 characters).", greska_saglasnost: "You must accept the terms.",
        poruka_uspeh: "Thank you! Your message has been sent successfully. We will get back to you shortly."
    }
};

// --- PRISTUPACNOST: tema i font ---
var btnTema      = document.getElementById("btn-tema");
var btnFontVeci  = document.getElementById("btn-font-veci");
var btnFontManji = document.getElementById("btn-font-manji");
var FONT_MIN = 14, FONT_MAX = 22, FONT_KORAK = 2, FONT_DEFAULT = 16;

function primeniTemu(tamna) {
    document.body.classList.toggle("tamna-tema", tamna);
    if (btnTema) btnTema.setAttribute("data-prevod", tamna ? "btn_tema_svetla" : "btn_tema");
    if (btnTema) btnTema.textContent = tamna ? (PREVODI[trenutniJezik] && PREVODI[trenutniJezik].btn_tema_svetla ? PREVODI[trenutniJezik].btn_tema_svetla : "Svetla") : (PREVODI[trenutniJezik] ? PREVODI[trenutniJezik].btn_tema : "Tamna");
    localStorage.setItem("iris-tema", tamna ? "tamna" : "svetla");
}

function primeniFont(v) {
    document.documentElement.style.fontSize = v + "px";
    localStorage.setItem("iris-font", v);
    if (btnFontVeci)  btnFontVeci.disabled  = (v >= FONT_MAX);
    if (btnFontManji) btnFontManji.disabled = (v <= FONT_MIN);
}

var trenutniJezik = localStorage.getItem("iris-jezik") || "sr";
primeniTemu(localStorage.getItem("iris-tema") === "tamna");
primeniFont(parseInt(localStorage.getItem("iris-font") || FONT_DEFAULT, 10));

if (btnTema) {
    btnTema.addEventListener("click", function () {
        primeniTemu(!document.body.classList.contains("tamna-tema"));
    });
}
if (btnFontVeci) {
    btnFontVeci.addEventListener("click", function () {
        var t = parseInt(localStorage.getItem("iris-font") || FONT_DEFAULT, 10);
        if (t < FONT_MAX) primeniFont(t + FONT_KORAK);
    });
}
if (btnFontManji) {
    btnFontManji.addEventListener("click", function () {
        var t = parseInt(localStorage.getItem("iris-font") || FONT_DEFAULT, 10);
        if (t > FONT_MIN) primeniFont(t - FONT_KORAK);
    });
}

// --- HAMBURGER MENI ---
var hamburger = document.getElementById("hamburger");
var navLista  = document.getElementById("nav-lista");

if (hamburger && navLista) {
    hamburger.addEventListener("click", function () {
        var otvoren = navLista.classList.toggle("otvorena");
        hamburger.classList.toggle("otvoren", otvoren);
        hamburger.setAttribute("aria-expanded", otvoren);
    });
    document.addEventListener("click", function (e) {
        if (!hamburger.contains(e.target) && !navLista.contains(e.target)) {
            navLista.classList.remove("otvorena");
            hamburger.classList.remove("otvoren");
            hamburger.setAttribute("aria-expanded", "false");
        }
    });
}

// --- SLAJDER ---
(function () {
    var slike = document.querySelectorAll(".slajder-slika");
    var tacke = document.querySelectorAll(".slajder-tacka");
    if (!slike.length) return;
    var trenutna = 0, ukupno = slike.length, timer;

    function prikaziSliku(n) {
        slike[trenutna].classList.remove("aktivna");
        tacke[trenutna].classList.remove("aktivna");
        trenutna = (n + ukupno) % ukupno;
        slike[trenutna].classList.add("aktivna");
        tacke[trenutna].classList.add("aktivna");
    }
    function pokreniTajmer() { timer = setInterval(function () { prikaziSliku(trenutna + 1); }, 4500); }
    function resetujTajmer() { clearInterval(timer); pokreniTajmer(); }

    var levo  = document.getElementById("slajder-levo");
    var desno = document.getElementById("slajder-desno");
    if (levo)  levo.addEventListener("click",  function () { prikaziSliku(trenutna - 1); resetujTajmer(); });
    if (desno) desno.addEventListener("click", function () { prikaziSliku(trenutna + 1); resetujTajmer(); });
    tacke.forEach(function (t, i) { t.addEventListener("click", function () { prikaziSliku(i); resetujTajmer(); }); });

    var kont = document.querySelector(".slajder-kontejner");
    if (kont) {
        kont.addEventListener("mouseenter", function () { clearInterval(timer); });
        kont.addEventListener("mouseleave", pokreniTajmer);
    }
    pokreniTajmer();
}());

// --- DVOJEZICNA PODRSKA (JSON + JavaScript fallback) ---
(function () {
    var btnJezik = document.getElementById("btn-jezik");

    function primeniPrevod(jezik, recnik) {
        document.querySelectorAll("[data-prevod]").forEach(function (el) {
            var k = el.getAttribute("data-prevod");
            if (recnik[k] !== undefined) el.textContent = recnik[k];
        });
        // Placeholder za textarea
        var ta = document.querySelector("textarea[data-placeholder-sr]");
        if (ta) ta.placeholder = jezik === "sr" ? ta.getAttribute("data-placeholder-sr") : ta.getAttribute("data-placeholder-en");

        document.documentElement.setAttribute("lang", jezik === "sr" ? "sr" : "en");
        localStorage.setItem("iris-jezik", jezik);
        trenutniJezik = jezik;
    }

    // Pokusaj ucitavanja prevod.json
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "js/prevod.json", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            try {
                var podaci = JSON.parse(xhr.responseText);
                Object.assign(PREVODI.sr, podaci.sr);
                Object.assign(PREVODI.en, podaci.en);
            } catch (e) { /* koristi JS fallback */ }
        }
        primeniPrevod(trenutniJezik, PREVODI[trenutniJezik]);
    };
    xhr.onerror = function () {
        primeniPrevod(trenutniJezik, PREVODI[trenutniJezik]);
    };
    xhr.send();

    if (btnJezik) {
        btnJezik.addEventListener("click", function (e) {
            e.preventDefault();
            var noviJezik = trenutniJezik === "sr" ? "en" : "sr";
            primeniPrevod(noviJezik, PREVODI[noviJezik]);
        });
    }
}());

// --- JQUERY EFEKTI ---
$(document).ready(function () {
    $(window).on("scroll", function () {
        $(".nav-zaglavlje").css("box-shadow",
            $(this).scrollTop() > 50 ? "0 4px 20px rgba(139,74,107,0.22)" : "0 2px 10px rgba(139,74,107,0.12)"
        );
    });

    $("body").append(
        '<button id="btn-gore" aria-label="Nazad na vrh" style="display:none;position:fixed;bottom:28px;right:28px;' +
        'width:44px;height:44px;border-radius:50%;background:var(--primarna);color:white;border:none;' +
        'font-size:1.1rem;cursor:pointer;box-shadow:0 4px 12px rgba(139,74,107,0.35);z-index:500;">^</button>'
    );
    $(window).on("scroll", function () {
        $(this).scrollTop() > 300 ? $("#btn-gore").fadeIn(300) : $("#btn-gore").fadeOut(300);
    });
    $("#btn-gore").on("click", function () { $("html,body").animate({ scrollTop: 0 }, 500); });

    $(".sekcija-naslov").css("opacity", 0);
    function animirajNaslove() {
        $(".sekcija-naslov").each(function () {
            if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 40) {
                $(this).animate({ opacity: 1 }, 500);
            }
        });
    }
    $(window).on("scroll", animirajNaslove);
    animirajNaslove();
});

// --- VALIDACIJA FORME ---
(function () {
    var forma = document.getElementById("forma-kontakt");
    if (!forma) return;

    function setStanje(idPolja, idGreske, ispravan) {
        var polje  = document.getElementById(idPolja);
        var greska = document.getElementById(idGreske);
        if (polje)  { polje.classList.toggle("greska", !ispravan); polje.classList.toggle("ispravno", ispravan); }
        if (greska) { greska.classList.toggle("vidljiva", !ispravan); }
        return ispravan;
    }

    function validiraj() {
        var ime    = (document.getElementById("ime")     || {value:""}).value;
        var email  = (document.getElementById("email")   || {value:""}).value;
        var tel    = (document.getElementById("telefon") || {value:""}).value;
        var datum  = (document.getElementById("datum")   || {value:""}).value;
        var poruka = (document.getElementById("poruka")  || {value:""}).value;
        var sagl   = document.getElementById("saglasnost");
        var ok     = true;

        if (!setStanje("ime",   "ime-greska",   ime.trim().length >= 3))                            ok = false;
        if (!setStanje("email", "email-greska", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())))  ok = false;
        if (tel.trim() !== "") {
            if (!setStanje("telefon", "telefon-greska", /^[0-9+\-\s()]{7,15}$/.test(tel.trim())))  ok = false;
        }
        if (datum !== "") {
            var danas = new Date(); danas.setHours(0,0,0,0);
            if (!setStanje("datum", "datum-greska", new Date(datum) >= danas))                       ok = false;
        }
        if (!setStanje("poruka", "poruka-greska", poruka.trim().length >= 10))                      ok = false;

        var saglEl = document.getElementById("saglasnost-greska");
        if (!sagl || !sagl.checked) {
            if (sagl)   sagl.classList.add("greska");
            if (saglEl) saglEl.classList.add("vidljiva");
            ok = false;
        } else {
            if (sagl)   sagl.classList.remove("greska");
            if (saglEl) saglEl.classList.remove("vidljiva");
        }
        return ok;
    }

    ["ime","email","telefon","datum","poruka"].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.addEventListener("blur", validiraj);
    });

    forma.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!validiraj()) {
            var prvaGreska = forma.querySelector(".greska");
            if (prvaGreska) { prvaGreska.scrollIntoView({ behavior:"smooth", block:"center" }); prvaGreska.focus(); }
            return;
        }
        var dugme = document.getElementById("dugme-posalji");
        var uspeh = document.getElementById("uspeh-poruka");
        if (dugme) { dugme.disabled = true; dugme.textContent = "Slanje..."; }
        setTimeout(function () {
            forma.reset();
            forma.querySelectorAll("input,textarea").forEach(function (p) { p.classList.remove("ispravno","greska"); });
            if (dugme) { dugme.disabled = false; dugme.textContent = PREVODI[trenutniJezik].btn_posalji || "Pošaljite poruku"; }
            if (uspeh) {
                uspeh.classList.add("vidljiva");
                uspeh.scrollIntoView({ behavior:"smooth", block:"nearest" });
                setTimeout(function () { uspeh.classList.remove("vidljiva"); }, 6000);
            }
        }, 1000);
    });
}());
