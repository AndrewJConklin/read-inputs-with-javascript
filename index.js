function logValues() {
  const form = document.querySelector("form")
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const firstName = formData.get("first-name")
    const lastname = formData.get("last-name")
    const email = formData.get("email")
    console.log(firstName, lastname, email)
  })
}