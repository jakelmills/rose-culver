let pageNumber = 0

const nextTag = document.querySelector("footer img.next")
const prevTag = document.querySelector("footer img.prev")
const outputTag = document.querySelector("h2")

const next = function(){
  pageNumber ++

  if (pageNumber > 4) {
    pageNumber = 1
  }

  updateSection()
}

const prev = function(){
  pageNumber --

  if (pageNumber < 1) {
    pageNumber = 4
  }

  updateSection()
}

const updateSection = function(){
  outputTag.innerHTML = pageNumber
}

nextTag.addEventListener("click", function(){
  next()
})

prevTag.addEventListener("click", function(){
  prev()
})
