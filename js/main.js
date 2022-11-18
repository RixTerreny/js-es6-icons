import data from "./data.js";

const row = document.querySelector(".row")

for (let i = 0; i < data.length; i++) {
    const item = data[i];
    //creazione col
    const box = document.createElement("div");
    box.classList.add("col-2","box");
    //aggiunta icona
    const icon = document.createElement("div");
    icon.classList.add(item.family,item.prefix+item.name,item.color,"fs-1");
    //aggiunta titolo
    const name = document.createElement("div");
    name.textContent=item.name.toUpperCase();
    name.classList.add("fw-semibold");
    //append elementi
    row.append(box);
    box.append(icon);
    box.append(name);
}

const selector = document.getElementById("selector");

selector.addEventListener("change", function(){

    row.innerHTML = "";

    if (selector.value==1) {
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            //creazione col
            const box = document.createElement("div");
            box.classList.add("col-2","box");
            if (item.type=="animal") {
                box.classList.add("animal");
            } else if(item.type=="vegetable"){
                box.classList.add("vegetable");
            }else{
                box.classList.add("user");
            };
            //aggiunta icona
            const icon = document.createElement("div");
            icon.classList.add(item.family,item.prefix+item.name,item.color,"fs-1");
            //aggiunta titolo
            const name = document.createElement("div");
            name.textContent=item.name.toUpperCase();
            name.classList.add("fw-semibold");
            //append elementi
            row.append(box);
            box.append(icon);
            box.append(name);
        }
    } else if (selector.value==2) {
        for (let i = 0; i < 8; i++) {
            const item = data[i];
            //creazione col
            const box = document.createElement("div");
            box.classList.add("col-2","box");
            if (item.type=="animal") {
                box.classList.add("animal");
            } else if(item.type=="vegetable"){
                box.classList.add("vegetable");
            }else{
                box.classList.add("user");
            };
            //aggiunta icona
            const icon = document.createElement("div");
            icon.classList.add(item.family,item.prefix+item.name,item.color,"fs-1");
            //aggiunta titolo
            const name = document.createElement("div");
            name.textContent=item.name.toUpperCase();
            name.classList.add("fw-semibold");
            //append elementi
            row.append(box);
            box.append(icon);
            box.append(name);
        }
    }else if (selector.value==3) {
        for (let i = 8; i < 12; i++) {
            const item = data[i];
            //creazione col
            const box = document.createElement("div");
            box.classList.add("col-2","box");
            if (item.type=="animal") {
                box.classList.add("animal");
            } else if(item.type=="vegetable"){
                box.classList.add("vegetable");
            }else{
                box.classList.add("user");
            };
            //aggiunta icona
            const icon = document.createElement("div");
            icon.classList.add(item.family,item.prefix+item.name,item.color,"fs-1");
            //aggiunta titolo
            const name = document.createElement("div");
            name.textContent=item.name.toUpperCase();
            name.classList.add("fw-semibold");
            //append elementi
            row.append(box);
            box.append(icon);
            box.append(name);
        }
    }else if (selector.value==4) {
        for (let i = 12; i < data.length; i++) {
            const item = data[i];
            //creazione col
            const box = document.createElement("div");
            box.classList.add("col-2","box");
            if (item.type=="animal") {
                box.classList.add("animal");
            } else if(item.type=="vegetable"){
                box.classList.add("vegetable");
            }else{
                box.classList.add("user");
            };
            //aggiunta icona
            const icon = document.createElement("div");
            icon.classList.add(item.family,item.prefix+item.name,item.color,"fs-1");
            //aggiunta titolo
            const name = document.createElement("div");
            name.textContent=item.name.toUpperCase();
            name.classList.add("fw-semibold");
            //append elementi
            row.append(box);
            box.append(icon);
            box.append(name);
        }
    }
});

