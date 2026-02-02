var lessThan = document.querySelector(".fa-less-than")
lessThan.style.visibility = "hidden"
var images = document.querySelectorAll(".slide")
var greaterThan = document.querySelector(".fa-greater-than")
var container = document.querySelector("div")
var distance = -60
greaterThan.addEventListener("click", function(){
    images.forEach(function(image) {
        image.style.transform = `translateX(${distance}px)`
        image.style.transition = "transform 0.5s ease-in-out"
    });
    distance = distance - 60;
    // Add this below your existing code to make the buttons work
lessThan.addEventListener("click", function() {
    distance = distance + 120; // Reverse the last two steps (current + next)
    images.forEach(function(image) {
        image.style.transform = `translateX(${distance}px)`;
    });
    distance = distance - 60; // Reset to the correct next step
    
    if (distance === -60) {
        lessThan.style.visibility = "hidden";
    }
});

// Update your existing greaterThan listener to show the back button
greaterThan.addEventListener("click", function(){
    lessThan.style.visibility = "visible";
    // ... your existing code ...
});

})