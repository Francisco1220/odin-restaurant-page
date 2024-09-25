// Import homepage image
import homePageImage from "./assets/images/homepage.jpg";

// Create content div, child container div, image div, and overlay text div
export const divContent = document.querySelector("#content");
export const childContainer = document.createElement("div");
export const image = document.createElement("img");
export const overlayTxtDiv = document.createElement("div");

export function homePage () {
    // Give child container div a class, and append to parent container div
    childContainer.setAttribute("class", "child-container");
    const parentContainer = document.querySelector(".parent-container");
    // Append image div to child container div
    image.setAttribute("id", "home-image");
    image.src = homePageImage;
    childContainer.appendChild(image);

    // Grab div#content. Add text to div#content, and append it to child container
    divContent.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac commodo sapien. Integer rutrum pretium enim sed tempus. In vitae dapibus enim, ac sodales felis. 
    Nullam laoreet urna sit amet gravida fermentum. Integer eleifend arcu tempor rhoncus iaculis. Donec pulvinar enim sit amet orci porttitor, eu condimentum nisi dignissim. 
    Duis quam sem, euismod a commodo sed, molestie quis nunc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
    ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`;
    parentContainer.insertBefore(childContainer, divContent);

    // Set class for overlayTxtDiv, and and append it to the second container. Add text to .overlayText
    overlayTxtDiv.setAttribute("class","overlay-text");
    overlayTxtDiv.innerHTML = "Authentic Indian Food";
    childContainer.appendChild(overlayTxtDiv);
}