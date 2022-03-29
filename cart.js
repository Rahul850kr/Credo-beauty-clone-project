var cartData1 = JSON.parse(localStorage.getItem("hairDAta"));//hair
var cartData2 = JSON.parse(localStorage.getItem("makeupData"));//makup
var cartData3 = JSON.parse(localStorage.getItem("fragranceData"));//fragrance
var cartData4 = JSON.parse(localStorage.getItem("homeData"));//home
var cartData5 = JSON.parse(localStorage.getItem("bestsellerData"));//bestseller
//hair
var total = cartData1.reduce(function (sum, elem, index, arr) {
    console.log(elem.price);
    sum = sum + Number(elem.price);
    return sum;
}, 0);


var length = cartData1.length;

//makup

var total = cartData2.reduce(function (sum, elem, index, arr) {
    console.log(elem.price);
    sum = sum + Number(elem.price);
    return sum;
}, 0);



var length = cartData2.length;

//fragrance


var total = cartData3.reduce(function (sum, elem, index, arr) {
    console.log(elem.price);
    sum = sum + Number(elem.price);
    return sum;
}, 0);



var length = cartData3.length;

//home


var total = cartData4.reduce(function (sum, elem, index, arr) {
    console.log(elem.price);
    sum = sum + Number(elem.price);
    return sum;
}, 0);



var length = cartData4.length;

//bestseller


var total = cartData5.reduce(function (sum, elem, index, arr) {
    console.log(elem.price);
    sum = sum + Number(elem.price);
    return sum;
}, 0);



var length = cartData5.length;




var btn_promo = document
    .querySelector("#checkPromocode")
    .addEventListener("click", promochceker);
function promochceker() {
    var promo_val = document.querySelector("#enterPromocode").value;
    console.log("promo", promo_val);

    if (promo_val == "rahul30") {
        // alert("good ")
        var to_price = 0.3 * total;
        total = total - to_price;
        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    } else {

        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    }

    if (promo_val == "shubham25") {
        //alert("good ");
        var t_price = 0.25 * total;
        total = total - t_price;
        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    } else {

        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    }

    if (promo_val == "vivek20") {
        // alert("good ")
        var tot_price = 0.2 * total;
        total = total - tot_price;
        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    } else {

        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    }


    if (promo_val == "varun5") {
        // alert("good ")
        var tota_price = 0.05 * total;
        total = total - tota_price;
        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    } else {

        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    }


    if (promo_val == "khaja15") {
        // alert("good ")
        var total_price = 0.15 * total;
        total = total - total_price;
        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    } else {

        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    }


    if (promo_val == "gourav10") {
        // alert("good ")
        var tt_price = 0.10 * total;
        total = total - tt_price;
        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    } else {

        document.querySelector(
            "p"
        ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;
    }

}

document.querySelector(
    "p"
).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;

//value got ocheck out page
document.querySelector("#checkOut").addEventListener("click", gotocartval);
function gotocartval() {
    localStorage.setItem("cartTotalPayValue", JSON.stringify(total));
    console.log(total);

}

// hair page

hairData.map(function (elem, index) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;

    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
        removeItem(elem, index);
    });

    box.append(img, name, price, btn);

    document.querySelector("#container").append(box);
});

function removeItem(elem, index) {
    console.log(elem, index);
    hairData.splice(index, 1);


    localStorage.setItem("hairData", JSON.stringify(hairData));
    window.location.reload();
}


// makup page

makupData.map(function (elem, index) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;

    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
        removeItem(elem, index);
    });

    box.append(img, name, price, btn);

    document.querySelector("#container").append(box);
});

function removeItem(elem, index) {
    console.log(elem, index);
    makupData.splice(index, 1);


    localStorage.setItem("makupData", JSON.stringify(makupData));
    window.location.reload();
}


// fragrance page


fragranceData.map(function (elem, index) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;

    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
        removeItem(elem, index);
    });

    box.append(img, name, price, btn);

    document.querySelector("#container").append(box);
});

function removeItem(elem, index) {
    console.log(elem, index);
    fragranceData.splice(index, 1);


    localStorage.setItem("fragranceData", JSON.stringify(fragranceData));
    window.location.reload();
}

// home page


homeData.map(function (elem, index) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image_url;

    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;

    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
        removeItem(elem, index);
    });

    box.append(img, name, price, btn);

    document.querySelector("#container").append(box);
});

function removeItem(elem, index) {
    console.log(elem, index);
    homeData.splice(index, 1);


    localStorage.setItem("homeData", JSON.stringify(homedata));
    window.location.reload();
}

//    var arr =[1,2,3,4]
//    console.log(arr.splice(0,1)) // []