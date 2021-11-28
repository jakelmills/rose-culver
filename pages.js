let pageNumber = 0

const nextTag = document.querySelector("footer img.next")
const prevTag = document.querySelector("footer img.prev")
const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")
const pages = [
  { copy: "a Brooklyn-based graphic designer", background: "#edc7a9", cirlce: "#3e78ed"},
  { copy: "Kanye West's biggest fan", background: "#a1fffe", cirlce: "#e34a47"},
  { copy: "looking for a job at the start of October", background: "#d3c7f3", cirlce: "#f7fe00"},
  { copy: "letting you <a href='pdf.pdf'>download her PDF</a>", background: "#faffb8", cirlce: "#b472e6"}
]

const next = function(){
  pageNumber ++

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

const prev = function(){
  pageNumber --

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

const updateSection = function(){
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].cirlce
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

nextTag.addEventListener("click", function(){
  next()
})

prevTag.addEventListener("click", function(){
  prev()
})
