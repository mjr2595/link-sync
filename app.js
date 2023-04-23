// Select all share buttons with link (doesn't include resume button)
const shareButtons = document.querySelectorAll(".tile-share-button[link]");

// Tooltip for share buttons
tippy(shareButtons, {
  content: "Copy link 🔗",
});

// copy link to clipboard
async function copyText(e) {
  //prevent button going to site
  e.preventDefault();
  const link = this.getAttribute("link");
  try {
    await navigator.clipboard.writeText(link);
  } catch (err) {
    console.error(err);
  }
}
shareButtons.forEach((shareButton) => shareButton.addEventListener("click", copyText));

tippy(shareButtons, {
  trigger: "click",
  content: "Copied! 🔥",
  hideOnClick: false,
  onShow(instance) {
    setTimeout(() => {
      instance.hide();
    }, 2000);
  },
});
