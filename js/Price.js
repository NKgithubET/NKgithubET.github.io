document.addEventListener("DOMContentLoaded", function () {
    // Set initial total price
    updateTotalPrice();
  
    // Checkbox and slider event listeners
    const checkboxes = document.querySelectorAll(".websiteCheckbox");
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", updateTotalPrice);
    });

    document.getElementById("pagesSlider").addEventListener("input", function () {
        // Update pages count
        document.getElementById("pagesCount").textContent = document.getElementById("pagesSlider").value;

        // Update total price
        updateTotalPrice();
    });
});

function updateTotalPrice() {
    // Get slider value
    const pagesSlider = document.getElementById("pagesSlider");
    
    // Calculate additional pages cost
    const additionalPagesCost = pagesSlider.value * 1000;

    // Calculate total price based on selected checkboxes
    let totalPrice = additionalPagesCost;
    const checkboxes = document.querySelectorAll(".websiteCheckbox");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            totalPrice += parseInt(checkbox.getAttribute("data-cost"));
        }
    });

    // Update pages count and total price display
    document.getElementById("pagesCount").textContent = pagesSlider.value;
    document.getElementById("additionalPagesCost").textContent = additionalPagesCost;
    document.getElementById("totalPrice").textContent = totalPrice;
}