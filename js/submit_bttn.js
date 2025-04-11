var submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (event) => {
    submitBtn.disabled = true;
    sleep(5000);
    submitBtn.disabledd = false;


});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}