const sections = document.querySelectorAll('.inactive')

const options = {
  root: null, //viewport
  threshold: 0.3, //Percentage of element required to be visisble in viewport for observer to fire
}

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('intersecting')
      entry.target.classList.remove('inactive', 'left', 'right')
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(observerCallback, options)

sections.forEach((section) => observer.observe(section))
