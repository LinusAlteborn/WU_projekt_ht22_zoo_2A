class Person {
    name;
    profession;
    avatar;
    number;
  
    constructor(name, profession, avatar) {
      this.name = name;
      this.profession = profession;
      this.avatar = avatar;
    }
}
class Menu_Item {
    name;
    info;
    price;

    constructor(name, info, price) {
        this.name = name;
        this.info = info;
        this.price = price;
    }
}
class Menu_Category {
    name;
    icon;
    items;

    constructor(name, icon, items) {
        this.name = name;
        this.icon = icon;
        this.items = items;
    }
}
class Live_Cam {
    name;
    link;
    icon;

    constructor(name, link, icon) {
        this.name = name;
        this.link = link;
        this.icon = icon;
    }
}
class Ticket {
    name;
    price;
    icon;

    constructor(name, price, icon) {
        this.name = name;
        this.price = price;
        this.icon = icon;
    }
}

// header and footer custom element definitions
class MyHeader extends HTMLElement {
    connectedCallback() {
        fetch("../html_templates/" + "header" + ".html").then(r=>r.text()).then((html)=>{ // get the content of products.html
            this.outerHTML = html;
        });
    }
}
class MyFooter extends HTMLElement {
    connectedCallback() {
        fetch("../html_templates/" + "footer" + ".html").then(r=>r.text()).then((html)=>{ // get the content of products.html
            this.outerHTML = html;
        });
    }
}

// card fetching
var cards = [
    'card-top',
    'card-tickets',
    'card-menu',
    'card-cams',
    'card-staff',
    'card-donate',
    'card-our-food',
    'card-our-mission'
];
function fetch_cards(cards){
    for (var i = 0; i < cards.length; i++){
        fetch_card(cards[i]);
    }
}
function fetch_card(card){
    fetch("../html_templates/" + card + ".html").then(r=>r.text()).then((html)=>{ // get the content of card-any.html
        document.getElementsByTagName(card)[0].outerHTML = html;
    });
}

var staff = [
    new Person("bruhdasda", "moment", "../img/persons/avatar-1b1afc16e9bc79edbb292d32abbc2a86.jpg"),
    new Person("nah fam", "moment", "../img/persons/avatar-1b1afc16e9bc79edbb292d32abbc2a86.jpg"),
    new Person("lipton fam go braupp skrrrt skatt booom", "moment", "../img/persons/avatar-1b1afc16e9bc79edbb292d32abbc2a86.jpg")
];
//låter mig spara namet på personer och deras bilder lättare samt låter mig använda elemten och textern hur jag vill
function staff_load(){
    for (var i = 0; i < staff.length; i++) {
        fetch("../html_templates/" + "employee" + ".html").then(r=>r.text()).then((html)=>{ // get the content of products.html
            document.getElementById("card-staff").innerHTML += html;
        });
    }
}

var menu = [

];
function menu_load(){

}

var tickets = [
    new Ticket("Family Ticket", "59.99$", "../img/tickets/family")
];
function tickets_load(){

}

// ersätter custom element med mina templates
customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
fetch_cards(cards);
//laddar alla element som jag har sparat i javascript (meny, live cams och staff)
window.onload = function WindowLoad() {
    staff_load();
    menu_load();
    tickets_load();
}