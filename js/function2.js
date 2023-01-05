class Person {
    name;
    profession;
    avatar;
  
    constructor(name, profession, avatar) {
      this.name = name;
      this.profession = profession;
      this.avatar = avatar;
    }
}
class Menu_Item {
    name;
    ingredients;
    price;

    constructor(name, ingredients, price) {
        this.name = name;
        this.ingredients = ingredients;
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

var staff = [
    new Person("bruhdasda", "moment", "../img/persons/avatar-1b1afc16e9bc79edbb292d32abbc2a86.jpg"),
    new Person("nah fam", "moment", "../img/persons/avatar-1b1afc16e9bc79edbb292d32abbc2a86.jpg"),
    new Person("lipton fam go braupp skrrrt skatt booom", "moment", "../img/persons/avatar-1b1afc16e9bc79edbb292d32abbc2a86.jpg")
];
//låter mig spara namet på personer och deras bilder lättare samt låter mig använda elemten och textern hur jag vill
function staff_load(){
    for (var i = 0; i < staff.length; i++) {
        document.getElementById("card_top").innerHTML += "<p>" + staff[i].name + "</p>";
    }
}

var menu = [

]

//laddar alla element som jag har sparat i javascript (meny, live cams och staff)
window.onload = function WindowLoad() {
    staff_load();
}