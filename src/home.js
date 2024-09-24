// Import homepage image
import homePageImage from "./assets/images/homepage.jpg";

export function homePage () {
    // Create a child container div, give it a class, and append to parent container div
    const childContainer = document.createElement("div");
    childContainer.setAttribute("class", "child-container");
    const parentContainer = document.querySelector(".parent-container");

    // Create image div and append it to child container div
    const image = document.createElement("img");
    image.setAttribute("id", "home-image");
    image.src = homePageImage;
    childContainer.appendChild(image);

    // Grab div#content. Add text to div#content, and append it to child container
    const divContent = document.querySelector("#content");
    divContent.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac commodo sapien. Integer rutrum pretium enim sed tempus. In vitae dapibus enim, ac sodales felis. 
    Nullam laoreet urna sit amet gravida fermentum. Integer eleifend arcu tempor rhoncus iaculis. Donec pulvinar enim sit amet orci porttitor, eu condimentum nisi dignissim. 
    Duis quam sem, euismod a commodo sed, molestie quis nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
    ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`;
    parentContainer.insertBefore(childContainer, divContent);

    // Create .overlayText div, set class, and and append it to the second container. Add text to .overlayText. Use CSS styling to overlay
    const overlayTxtDiv = document.createElement("div");
    overlayTxtDiv.setAttribute("class","overlay-text");
    overlayTxtDiv.innerHTML = "Authentic Indian Food";
    childContainer.appendChild(overlayTxtDiv);
}