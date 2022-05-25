let id = 0;

let order = document.getElementById("orderId");

function show(e) {
    e.preventDefault();

    let food = document.querySelectorAll(".chk:checked");
    let isOrder = false;

    if(food.length > 0) {
        isOrder = true;
    }

    // Promise Creation
    let foodPromise = new Promise(function (res, rej) {
        let time = Math.random() * 6 * 1000;

        // Delay
        setTimeout(function() {
            if(isOrder === true) {
                res(food);
            } else {
                rej('Order failed, Try Again!');
            }
        },time);
    });

    // Handling Promise
foodPromise.then(function(food) {
    document.getElementById("orderId").innerHTML = null;
    
    food.forEach(elem => {
        id++;
        let box = document.createElement("div");
        let img = document.createElement("img");
        let name  = document.createElement("h2");
        let idx = document.createElement("h2");

        idx.setAttribute("class","idx");
        idx.innerText = "";
        idx.textContent = `Order id: ${id}`;  

        box.setAttribute("class","boxS");
        
        name.textContent = elem.value; 
        let num = document.querySelector(".oNum");

        num.textContent = `Order Number ${id}`; 

        if(elem.value === "Pizza"){
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCUug2yPabV9ilQgthmMhKPRAopTNf-hgUQ&usqp=CAU";
            name.textContent = elem.value;
        } else if(elem.value === "Coke") {
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJ0_XsmQ9I9-NIoMt4VIZaYHTf2FQ5eDjkQ&usqp=CAU";
            name.textContent = elem.value;
        } else if(elem.value === "Burger") {
            img.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Rw2HSxrIQ8uUndcDXN0KpTwYOhOs6EDP_A&usqp=CAU";
            name.textContent = elem.value;
        } 

        box.append(img,name);

        order.append(box);

        
        
    });
})
}



