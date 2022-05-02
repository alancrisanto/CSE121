const newParagrapgh = document.createElement("p");
newParagrapgh.innerText = "Added with Javascript";
document.body.appendChild(newParagrapgh);

const image = document.createElement("img");
image.setAttribute("src", "https://placeimg.com/200/200/animals");
image.setAttribute("alt", "randomImage");
document.body.appendChild(image);

const newDiv = document.createElement("div");
newDiv.innerHTML = `<ul><li>One</li><li>Two</li><li>Three</li></ul>`;
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = `<h2>CSE 121b</h2>
                        <p>Welcome to Javascript Language</p>
                        `;
document.body.appendChild(newSection);
