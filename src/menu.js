import {divContent} from "./home.js";

export function menuPage () {

    // Clear div#content and update it with newly created divs(squares)
    const div1 = document.createElement("div");
    div1.setAttribute("class", "menu-item");
    const div2 = document.createElement("div");
    div2.setAttribute("class", "menu-item");
    const div3 = document.createElement("div");
    div3.setAttribute("class", "menu-item");
    const div4 = document.createElement("div");
    div4.setAttribute("class", "menu-item");
    const div5 = document.createElement("div");
    div5.setAttribute("class", "menu-item");
    const div6 = document.createElement("div");
    div6.setAttribute("class", "menu-item");
    // clear div#content
    console.log(divContent);
    divContent.innerHTML = "";
    // Append new divs
    divContent.appendChild(div1);
    divContent.appendChild(div2);
    divContent.appendChild(div3);
    divContent.appendChild(div4);
    divContent.appendChild(div5);
    divContent.appendChild(div6);
    divContent.setAttribute("class", "menu-style")
    // update new divs innerHTML
    div1.innerHTML = `<h2>Butter Chicken</h2>
                      <p>Served with garlic butter naan or rice</p>`
    div2.innerHTML = `<h2>Chicken Tikka Masala</h2>
                      <p>Served with a side of briyani</p>`
    div3.innerHTML = `<h2>Palak Paneer</h2>
                      <p>The perfect vegetarian option. Served with plain naan</p>`
    div4.innerHTML = `<h2>Tandoori Chicken</h2>
                      <p>The most popular dish at our restaurant</p>`
    div5.innerHTML = `<h2>Lamb Korma</h2>
                      <p>Yum</p>`
    div6.innerHTML = `<h2>Vegetable Briyani</h2>
                      <p>Less yum. But still yum.</p>`
}