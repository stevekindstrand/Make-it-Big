const myBtn = document.getElementById("myBtn");
const input = document.getElementById("input");

myBtn.addEventListener("click", function() {
    input.value = input.value.toUpperCase();
});
