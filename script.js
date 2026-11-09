const shareBtn = document.getElementById("share-btn")
const sharePanel = document.getElementById("share-panel")

shareBtn.addEventListener("click",() => {
    const isOpen = shareBtn.getAttribute("aria-expanded") === "true";
    shareBtn.setAttribute("aria-expanded", String(!isOpen));
    sharePanel.classList.toggle("hidden")
    sharePanel.classList.toggle("flex")
})