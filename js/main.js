let svg = document.getElementById('arrow')
let svgWidth = svg.getBoundingClientRect().width
let svgHeight = svg.getBoundingClientRect().height - 20
let headPosition = 101.5
let basePosition = svgHeight * 0.4
let rectSize = 5

//SVG initialization
let drawArrow = () => {
  svg.innerHTML = `
    <path fill="#EEEEEE" stroke="#000" id="arrow-figure" d="M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svgWidth - rectSize * 2} ${svgHeight / 2} L${headPosition} ${svgHeight - rectSize * 2} L${headPosition} ${svgHeight - basePosition} L${rectSize * 2} ${svgHeight - basePosition} L${rectSize * 2} ${basePosition}"/>
    <circle id="rotate-point" cx="${svgWidth / 2}" cy="-15" r="3" fill="blue" />
    <circle id="arrow-head-point" cx="${headPosition}" cy="${rectSize * 2}" r="3" fill="red" />
    <circle id="arrow-base-point" cx="${rectSize * 2}" cy="${svgHeight * 0.4 + 1.5}" r="3" fill="red"/>
    
    <rect id="top" x="${svgWidth / 2 - rectSize / 2}" y="0" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="right" x="${svgWidth - rectSize}" y="${svgHeight / 2 - rectSize/2}" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="bottom" x="${svgWidth / 2 - rectSize/2}" y="${svgHeight - rectSize}" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="left" x="0" y="${svgHeight / 2 - rectSize/2}" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="top-left" x="0" y="0" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="top-right" x="${svgWidth - rectSize}" y="0" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="bottom-right" x="${svgWidth - rectSize}" y="${svgHeight - rectSize}" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="bottom-left" x="0" y="${svgHeight - rectSize}" width="5" height="5" fill="blue" stroke-width="1"/>
    
    <line class="line" x1="${rectSize * 2}" y1="${rectSize / 2}" x2="${svgWidth / 2 - rectSize * 2}" y2="${rectSize / 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${svgWidth / 2 + rectSize * 2}" y1="${rectSize / 2}" x2="${svgWidth - rectSize * 2}" y2="${rectSize / 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${svgWidth - rectSize / 2}" y1="${rectSize * 2}" x2="${svgWidth - rectSize / 2}" y2="${svgHeight / 2 - rectSize * 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${svgWidth - rectSize / 2}" y1="${svgHeight / 2 + rectSize * 2}" x2="${svgWidth - rectSize / 2}" y2="${svgHeight - rectSize * 2}" stroke="blue" stroke-width="1.5"/>    
    <line class="line" x1="${svgWidth - rectSize * 2}" y1="${svgHeight - rectSize / 2}" x2="${svgWidth / 2 + rectSize * 2}" y2="${svgHeight - rectSize / 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${svgWidth / 2 - rectSize * 2}" y1="${svgHeight - rectSize / 2}" x2="${rectSize * 2}" y2="${svgHeight - rectSize / 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${rectSize / 2}" y1="${svgHeight - rectSize * 2}" x2="${rectSize / 2}" y2="${svgHeight / 2 + rectSize * 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${rectSize / 2}" y1="${svgHeight / 2 - rectSize * 2}" x2="${rectSize / 2}" y2="${rectSize * 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${svgWidth / 2}" y1="-${rectSize / 2}" x2="${svgWidth / 2}" y2="-10" stroke="blue" stroke-width="1.5"/>
    `
}
drawArrow()

//border lines and points initialization
let lines = document.querySelectorAll('.line')
let topRect = document.getElementById('top')
let rightRect = document.getElementById('right')
let bottomRect = document.getElementById('bottom')
let leftRect = document.getElementById('left')
let topLeftRect = document.getElementById('top-left')
let topRightRect = document.getElementById('top-right')
let bottomRightRect = document.getElementById('bottom-right')
let bottomLeftRect = document.getElementById('bottom-left')

let rotatePoint = document.getElementById('rotate-point')

//function for updating border sizes
let borderResize = () => {
  svgWidth = svg.getBoundingClientRect().width
  svgHeight = svg.getBoundingClientRect().height - 20

  rotatePoint.setAttribute("cx", svgWidth / 2)

  lines[0].setAttribute("x2", svgWidth / 2 - rectSize * 2)

  lines[1].setAttribute("x1", svgWidth / 2 + rectSize * 2)
  lines[1].setAttribute("x2", svgWidth - rectSize * 2)

  lines[2].setAttribute("x1", svgWidth - rectSize / 2)
  lines[2].setAttribute("x2", svgWidth - rectSize / 2)
  lines[2].setAttribute("y2", svgHeight / 2 - rectSize * 2)

  lines[3].setAttribute("x1", svgWidth - rectSize / 2)
  lines[3].setAttribute("y1", svgHeight / 2 + rectSize * 2)
  lines[3].setAttribute("x2", svgWidth - rectSize / 2)
  lines[3].setAttribute("y2", svgHeight - rectSize * 2)

  lines[4].setAttribute("x1", svgWidth - rectSize * 2)
  lines[4].setAttribute("y1", svgHeight - rectSize / 2)
  lines[4].setAttribute("x2", svgWidth / 2 + rectSize * 2)
  lines[4].setAttribute("y2", svgHeight - rectSize / 2)

  lines[5].setAttribute("x1", svgWidth / 2 - rectSize * 2)
  lines[5].setAttribute("y1", svgHeight - rectSize / 2)
  lines[5].setAttribute("y2", svgHeight - rectSize / 2)

  lines[6].setAttribute("y1", svgHeight - rectSize * 2)
  lines[6].setAttribute("y2", svgHeight / 2 + rectSize * 2)

  lines[7].setAttribute("y1", svgHeight / 2 - rectSize * 2)

  lines[8].setAttribute("x1", svgWidth / 2)
  lines[8].setAttribute("x2", svgWidth / 2)

  topRect.setAttribute("x", svgWidth / 2 - rectSize / 2)

  rightRect.setAttribute("x", svgWidth - rectSize)
  rightRect.setAttribute("y", svgHeight / 2 - rectSize / 2)

  bottomRect.setAttribute("x", svgWidth / 2 - rectSize / 2)
  bottomRect.setAttribute("y", svgHeight - rectSize)

  leftRect.setAttribute("y", svgHeight / 2 - rectSize / 2)

  topRightRect.setAttribute("x", svgWidth - rectSize)

  bottomRightRect.setAttribute("x", svgWidth - rectSize)
  bottomRightRect.setAttribute("y", svgHeight - rectSize)

  bottomLeftRect.setAttribute("y", svgHeight - rectSize)
}

//points for editing initialization
let arrowHeadPoint = document.getElementById('arrow-head-point')
let arrowBasePoint = document.getElementById('arrow-base-point')

//arrow figure initialization
let arrowFigure = document.getElementById('arrow-figure')

//rotate function
rotatePoint.addEventListener('mousedown', (event) => {
  let initialLeft = rotatePoint.getBoundingClientRect().left
  let initialRotate = 0
  if (svg.style.transform.split('(')[1]) {
    initialRotate = Number(svg.style.transform.split('(')[1].split('deg')[0])
  }
  let onMouseMove = (event) => {
    svg.style.transform = `rotate(${(event.clientX - initialLeft) * 0.4 + initialRotate}deg)`
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

//function for resizing arrow head
arrowHeadPoint.addEventListener('mousedown', (event) => {
  let point = event.target
  let onMouseMove = (event) => {
    if (event.clientX - svg.getBoundingClientRect().left + 1.5 > 15 &&
      event.clientX - svg.getBoundingClientRect().left + 1.5 < svgWidth - 15) {
      headPosition = event.clientX - svg.getBoundingClientRect().left + 1.5
      arrowFigure.setAttribute("d", `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svgWidth - rectSize * 2} ${svgHeight / 2} L${headPosition} ${svgHeight - rectSize * 2} L${headPosition} ${svgHeight - basePosition} L${rectSize * 2} ${svgHeight - basePosition} L${rectSize * 2} ${basePosition}`)
      point.setAttribute("cx", headPosition)
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

//function for resizing arrow base
arrowBasePoint.addEventListener('mousedown', (event) => {
  let point = event.target
  let onMouseMove = (event) => {
    if (event.clientY - svg.getBoundingClientRect().top + 1.5 < svgHeight / 2 - rectSize * 2 &&
      event.clientY - svg.getBoundingClientRect().top + 1.5 > rectSize * 2) {
      basePosition = event.clientY - svg.getBoundingClientRect().top + 1.5
      point.setAttribute("cy", basePosition)
      arrowFigure.setAttribute("d", `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svgWidth - rectSize * 2} ${svgHeight / 2} L${headPosition} ${svgHeight - rectSize * 2} L${headPosition} ${svgHeight - basePosition} L${rectSize * 2} ${svgHeight - basePosition} L${rectSize * 2} ${basePosition}`)
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

//function for figure movement
arrowFigure.addEventListener('mousedown', (event) => {
  let shiftX = event.clientX - svg.getBoundingClientRect().left;
  let shiftY = event.clientY - svg.getBoundingClientRect().top;

  let onMouseMove = (event) => {
    svg.style.left = event.pageX - shiftX + 'px'
    svg.style.top = event.pageY - shiftY + 'px'
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

//function for resizing using the top center point
topRect.addEventListener('mousedown', (event) => {
  let initialHeight = svgHeight
  let initialTop = svg.getBoundingClientRect().top
  let onMouseMove = (event) => {
    if (initialHeight + initialTop - event.clientY > 100) {
      svg.style.height = (initialHeight + initialTop - event.clientY) + 'px'
      svg.style.top = (event.clientY) + 'px'
      basePosition = svgHeight * 0.4
      arrowBasePoint.setAttribute("cy", basePosition)
      arrowFigure.setAttribute("d", `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svgWidth - rectSize * 2} ${svgHeight / 2} L${headPosition} ${svgHeight - rectSize * 2} L${headPosition} ${svgHeight - basePosition} L${rectSize * 2} ${svgHeight - basePosition} L${rectSize * 2} ${basePosition}`)
      borderResize()
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

//function for resizing using the right center point
rightRect.addEventListener('mousedown', (event) => {
  let onMouseMove = (event) => {
    if (event.clientX - svg.getBoundingClientRect().left > 100) {
      svg.style.width = (event.clientX - svg.getBoundingClientRect().left) + 'px'
      basePosition = svgHeight * 0.4
      arrowBasePoint.setAttribute("cy", basePosition)
      if (svg.getBoundingClientRect().width - 15 <= headPosition) {
        headPosition = svg.getBoundingClientRect().width - 15
      }
      arrowHeadPoint.setAttribute("cx", headPosition)
      arrowFigure.setAttribute("d", `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svgWidth - rectSize * 2} ${svgHeight / 2} L${headPosition} ${svgHeight - rectSize * 2} L${headPosition} ${svgHeight - basePosition} L${rectSize * 2} ${svgHeight - basePosition} L${rectSize * 2} ${basePosition}`)
      borderResize()
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

//function for resizing using the bottom center point
bottomRect.addEventListener('mousedown', (event) => {
  let onMouseMove = (event) => {
    if (event.clientY - svg.getBoundingClientRect().top > 100) {
      svg.style.height = (event.clientY - svg.getBoundingClientRect().top) + 'px'
      basePosition = svgHeight * 0.4
      arrowBasePoint.setAttribute("cy", basePosition)
      arrowFigure.setAttribute("d", `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svgWidth - rectSize * 2} ${svgHeight / 2} L${headPosition} ${svgHeight - rectSize * 2} L${headPosition} ${svgHeight - basePosition} L${rectSize * 2} ${svgHeight - basePosition} L${rectSize * 2} ${basePosition}`)
      borderResize()
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

//function for resizing using the left center point
leftRect.addEventListener('mousedown', (event) => {
  let initialWidth = svgWidth
  let initialLeft = svg.getBoundingClientRect().left
  let onMouseMove = (event) => {
    if (initialWidth + initialLeft - event.clientX > 100) {
      svg.style.width = (initialWidth + initialLeft - event.clientX) + 'px'
      svg.style.left = (event.clientX) + 'px'
      basePosition = svgHeight * 0.4
      arrowBasePoint.setAttribute("cy", basePosition)
      if (svg.getBoundingClientRect().width - 15 <= headPosition) {
        headPosition = svg.getBoundingClientRect().width - 15
      }
      arrowHeadPoint.setAttribute("cx", headPosition)
      arrowFigure.setAttribute("d", `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svgWidth - rectSize * 2} ${svgHeight / 2} L${headPosition} ${svgHeight - rectSize * 2} L${headPosition} ${svgHeight - basePosition} L${rectSize * 2} ${svgHeight - basePosition} L${rectSize * 2} ${basePosition}`)
      borderResize()
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

//function for resizing using the top left point
topLeftRect.addEventListener('mousedown', (event) => {
  let initialHeight = svgHeight
  let initialTop = svg.getBoundingClientRect().top
  let initialWidth = svgWidth
  let initialLeft = svg.getBoundingClientRect().left
  let onMouseMove = (event) => {
    if (initialHeight + initialTop - event.clientY > 100 && initialWidth + initialLeft - event.clientX > 100) {
      svg.style.height = (initialHeight + initialTop - event.clientY) + 'px'
      svg.style.top = (event.clientY) + 'px'
      svg.style.width = (initialWidth + initialLeft - event.clientX) + 'px'
      svg.style.left = (event.clientX) + 'px'
      basePosition = svgHeight * 0.4
      arrowBasePoint.setAttribute("cy", basePosition)
      if (svg.getBoundingClientRect().width - 15 <= headPosition) {
        headPosition = svg.getBoundingClientRect().width - 15
      }
      arrowHeadPoint.setAttribute("cx", headPosition)
      arrowFigure.setAttribute("d", `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svgWidth - rectSize * 2} ${svgHeight / 2} L${headPosition} ${svgHeight - rectSize * 2} L${headPosition} ${svgHeight - basePosition} L${rectSize * 2} ${svgHeight - basePosition} L${rectSize * 2} ${basePosition}`)
      borderResize()
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

//function for resizing using the top right point
topRightRect.addEventListener('mousedown', (event) => {
  let initialHeight = svgHeight
  let initialTop = svg.getBoundingClientRect().top
  let onMouseMove = (event) => {
    if (initialHeight + initialTop - event.clientY > 100 && event.clientX - svg.getBoundingClientRect().left > 100) {
      svg.style.height = (initialHeight + initialTop - event.clientY) + 'px'
      svg.style.top = (event.clientY) + 'px'
      svg.style.width = (event.clientX - svg.getBoundingClientRect().left) + 'px'
      basePosition = svgHeight * 0.4
      arrowBasePoint.setAttribute("cy", basePosition)
      if (svg.getBoundingClientRect().width - 15 <= headPosition) {
        headPosition = svg.getBoundingClientRect().width - 15
      }
      arrowHeadPoint.setAttribute("cx", headPosition)
      arrowFigure.setAttribute("d", `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svgWidth - rectSize * 2} ${svgHeight / 2} L${headPosition} ${svgHeight - rectSize * 2} L${headPosition} ${svgHeight - basePosition} L${rectSize * 2} ${svgHeight - basePosition} L${rectSize * 2} ${basePosition}`)
      borderResize()
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

//function for resizing using the bottom right point
bottomRightRect.addEventListener('mousedown', (event) => {
  let onMouseMove = (event) => {
    if (event.clientY - svg.getBoundingClientRect().top > 100 && event.clientX - svg.getBoundingClientRect().left > 100) {
      svg.style.width = (event.clientX - svg.getBoundingClientRect().left) + 'px'
      svg.style.height = (event.clientY - svg.getBoundingClientRect().top) + 'px'
      basePosition = svgHeight * 0.4
      arrowBasePoint.setAttribute("cy", basePosition)
      if (svg.getBoundingClientRect().width - 15 <= headPosition) {
        headPosition = svg.getBoundingClientRect().width - 15
      }
      arrowHeadPoint.setAttribute("cx", headPosition)
      arrowFigure.setAttribute("d", `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svgWidth - rectSize * 2} ${svgHeight / 2} L${headPosition} ${svgHeight - rectSize * 2} L${headPosition} ${svgHeight - basePosition} L${rectSize * 2} ${svgHeight - basePosition} L${rectSize * 2} ${basePosition}`)
      borderResize()
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

//function for resizing using the bottom left point
bottomLeftRect.addEventListener('mousedown', (event) => {
  let initialWidth = svgWidth
  let initialLeft = svg.getBoundingClientRect().left
  let onMouseMove = (event) => {
    if (initialWidth + initialLeft - event.clientX > 100 && event.clientY - svg.getBoundingClientRect().top > 100) {
      svg.style.width = (initialWidth + initialLeft - event.clientX) + 'px'
      svg.style.left = (event.clientX) + 'px'
      svg.style.height = (event.clientY - svg.getBoundingClientRect().top) + 'px'
      basePosition = svgHeight * 0.4
      arrowBasePoint.setAttribute("cy", basePosition)
      if (svg.getBoundingClientRect().width - 15 <= headPosition) {
        headPosition = svg.getBoundingClientRect().width - 15
      }
      arrowHeadPoint.setAttribute("cx", headPosition)
      arrowFigure.setAttribute("d", `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svgWidth - rectSize * 2} ${svgHeight / 2} L${headPosition} ${svgHeight - rectSize * 2} L${headPosition} ${svgHeight - basePosition} L${rectSize * 2} ${svgHeight - basePosition} L${rectSize * 2} ${basePosition}`)
      borderResize()
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})
