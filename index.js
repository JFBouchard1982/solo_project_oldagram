// nextbtn function
// // when i click next btn i want all the comments to clear from the list.
    // let listedComments = ""
    // ulEl.innerHTML = listedComments


const avatarImageArr = ["images/avatar-vangogh.jpg","images/avatar-courbet.jpg","images/avatar-ducreux.jpg"]
const postImageArr = ["images/post-vangogh.jpg","images/post-courbet.jpg","images/post-ducreux.jpg"]
const namesArr = ["Vincent van Gogh","Gustave Courbet","Joseph Ducreux"]
const userNameArr = ["vincey1853","gus1819","jd1735"]
const locationArr = ["Zundert, Netherlands","Ornans, France","Paris, France"]
const commentArr = ["just took a few mushrooms lol","i'm feelin a bit stressed tbh","gm friends! which coin are YOU stacking up today?? post below and WAGMI!"]
const likesArr = ["21,492","12,502","15,137"]

const previousBtn = document.getElementById("previous-btn")
const nextBtn = document.getElementById("next-btn")
const ulEl = document.getElementById("ul-el")
let nameEl = document.getElementById("name")
let locationEl = document.getElementById("location")
let avatarEl = document.getElementById("avatar-image-container")
let postEl = document.getElementById("post-image")
let likesEl = document.getElementById("likes")
let counter = 0;
// nextBtn.addEventListener("click", function() {
//     counter +=1;
//     if (counter > namesArr.length - 1) {
//         counter = 0
//     }
//     postEl.src = postImageArr[counter];
//     nameEl.textContent = namesArr[counter];
//     locationEl.textContent = locationArr[counter];
//     likesEl.textContent = `${likesArr[counter]} likes`;
    
        
//     })
//     previousBtn.addEventListener("click", function() {
//     counter -1;
//     if (counter === namesArr[0]) {
//         counter = narmesArr.length
//     }
//     postEl.src = postImageArr[counter];
//     nameEl.textContent = namesArr[counter];
//     locationEl.textContent = locationArr[counter];
//     likesEl.textContent = `${likesArr[counter]} likes`;
    
        
//     })