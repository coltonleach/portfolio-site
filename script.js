const sections = document.querySelectorAll('.inactive')

const options = {
  root: null, //viewport
  threshold: 0.3, //Percentage of element required to be visisble in viewport for observer to fire
  
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting)
      entry.target.classList.remove('inactive', 'left', 'right')
  })
}, options)

sections.forEach((section) => observer.observe(section))
