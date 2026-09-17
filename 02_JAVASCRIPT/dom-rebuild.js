const sectionHeading = document.querySelector(".section-heading");
console.log(sectionHeading);
sectionHeading.textContent="JavaScript DOM Practice";
console.log(sectionHeading.textContent);
const headings = document.querySelectorAll(".section-heading");
console.log(headings);
console.log(headings[1].textContent);
for(let i=0;i<headings.length;i++){
    headings[i].textContent = "DOM Practice";
}
const nameInput = document.querySelector("#name");
console.log(nameInput);
console.log(nameInput.value);
nameInput.addEventListener("input", function(event) {
    console.log(event.target.value);
});
const profileImage = document.querySelector("img");
console.log(profileImage);
profileImage.setAttribute("alt","DOM practice image");
console.log(profileImage.getAttribute("alt"));
profileImage.classList.add("highlight");
profileImage.classList.remove("highlight");
profileImage.classList.toggle("highlight");
const changename=document.querySelector("#nameMessage");
nameInput.addEventListener("input",function(event){
     changename.textContent = "Hello, " + event.target.value + "!";
});
const contactButton = document.querySelector("#contactButton");
contactButton.addEventListener("click", function(event){
        console.log("Button clicked");
        event.preventDefault();
        event.target.textContent="Clicked!";
        event.target.classList.add("highlight");
        changename.textContent = "Contact button clicked!";
});