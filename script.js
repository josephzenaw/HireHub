document.addEventListener("DOMContentLoaded", function () {
  const jobListingsContainer = document.querySelector(".job-listings")

  // Sample job data
  const jobs = [
    { title: "Web Developer", company: "Tech Co.", location: "New York" },
    {
      title: "Graphic Designer",
      company: "Design Studio",
      location: "San Francisco",
    },
    {
      title: "Marketing Manager",
      company: "Marketing Agency",
      location: "Los Angeles",
    },
    {
      title: "Software Engineer",
      company: "Software Solutions",
      location: "Chicago",
    },
  ]

  // Populate job listings
  jobs.forEach((job) => {
    const jobCard = document.createElement("div")
    jobCard.classList.add("job-card")
    jobCard.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
        `
    jobListingsContainer.appendChild(jobCard)
  })

  // Search functionality
  const searchInput = document.getElementById("search")
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase()
    const jobCards = document.querySelectorAll(".job-card")

    jobCards.forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase()
      const company = card
        .querySelector("p:nth-child(2)")
        .textContent.toLowerCase()
      const location = card
        .querySelector("p:nth-child(3)")
        .textContent.toLowerCase()

      if (
        title.includes(searchTerm) ||
        company.includes(searchTerm) ||
        location.includes(searchTerm)
      ) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })
})
