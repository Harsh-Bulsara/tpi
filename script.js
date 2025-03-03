document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded!");

    // Example of changing frame-8 background dynamically
    setTimeout(() => {
        document.querySelector(".frame-8").style.background = "#2B8994";
        console.log("Frame 8 background updated.");
    }, 3000);
});
