
// Vertical tab navigation

function openTab(event, tab) {
    let i,
    tabContent,
    tabLinks;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }


    tabLinks = document.getElementsByClassName("tabLinks");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }


    document.getElementById(tab).style.display = "block";
    event.currentTarget.className += " active";
 }


// Form funtionality
// let form = document.getElementById("contact-form");
// let formEvent = form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let formInputs = new FormData(form);

//     submitForm(formInputs);
// })

// // send mail function
// let submitForm = (formInputs) => {
//     fetch("http://localhost:3000/contact", {
//         method: "post",
//         body: formInputs,
//     }).then((response) => {
//         console.log(response.json);
//         // return response.json();
//     })
//     .catch((err) => {
//        console.log('Request Failed', err);
//     });
// };