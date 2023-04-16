function showText(number) {
    document.querySelector(`#desc${number}`).classList.remove("hideText")
    document.querySelector(`#desc${number}`).classList.add("showText")
  }

  function hideText(number) {
    document.querySelector(`#desc${number}`).classList.remove("showText")
    document.querySelector(`#desc${number}`).classList.add("hideText")
  }