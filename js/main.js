let svg = document.getElementById('arrow')
let headPosition = 101.5
let basePosition = svg.getBoundingClientRect().height * 0.4
let rectSize = 5
let arrowBreakpoints = `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svg.getBoundingClientRect().width - rectSize * 2} ${svg.getBoundingClientRect().height / 2} L${headPosition} ${svg.getBoundingClientRect().height - rectSize * 2} L${headPosition} ${svg.getBoundingClientRect().height - basePosition} L${rectSize * 2} ${svg.getBoundingClientRect().height - basePosition} L${rectSize * 2} ${basePosition}`
let drawArrow = () => {
  svg.innerHTML = `
    <path fill="#EEEEEE" stroke="#000" id="arrow-figure" d="${arrowBreakpoints}"/>
    <circle id="arrow-head-point" cx="${headPosition}" cy="${rectSize * 2}" r="3" fill="red" />
    <circle id="arrow-base-point" cx="${rectSize * 2}" cy="${svg.getBoundingClientRect().height * 0.4 + 1.5}" r="3" fill="red"/>
    <rect id="top" x="${svg.getBoundingClientRect().width / 2 - rectSize/2}" y="0" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="right" x="${svg.getBoundingClientRect().width - rectSize}" y="${svg.getBoundingClientRect().height / 2 - rectSize/2}" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="bottom" x="${svg.getBoundingClientRect().width / 2 - rectSize/2}" y="${svg.getBoundingClientRect().height - rectSize}" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="left" x="0" y="${svg.getBoundingClientRect().height / 2 - rectSize/2}" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="top-left" x="0" y="0" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="top-right" x="${svg.getBoundingClientRect().width - rectSize}" y="0" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="bottom-right" x="${svg.getBoundingClientRect().width - rectSize}" y="${svg.getBoundingClientRect().height - rectSize}" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="bottom-left" x="0" y="${svg.getBoundingClientRect().height - rectSize}" width="5" height="5" fill="blue" stroke-width="1"/>
    <line class="line" x1="${rectSize * 2}" y1="${rectSize / 2}" x2="${svg.getBoundingClientRect().width / 2 - rectSize * 2}" y2="${rectSize / 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${svg.getBoundingClientRect().width / 2 + rectSize * 2}" y1="${rectSize / 2}" x2="${svg.getBoundingClientRect().width - rectSize * 2}" y2="${rectSize / 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${svg.getBoundingClientRect().width - rectSize / 2}" y1="${rectSize * 2}" x2="${svg.getBoundingClientRect().width - rectSize / 2}" y2="${svg.getBoundingClientRect().height / 2 - rectSize * 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${svg.getBoundingClientRect().width - rectSize / 2}" y1="${svg.getBoundingClientRect().height / 2 + rectSize * 2}" x2="${svg.getBoundingClientRect().width - rectSize / 2}" y2="${svg.getBoundingClientRect().height - rectSize * 2}" stroke="blue" stroke-width="1.5"/>    
    <line class="line" x1="${svg.getBoundingClientRect().width - rectSize * 2}" y1="${svg.getBoundingClientRect().height - rectSize / 2}" x2="${svg.getBoundingClientRect().width / 2 + rectSize * 2}" y2="${svg.getBoundingClientRect().height - rectSize / 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${svg.getBoundingClientRect().width / 2 - rectSize * 2}" y1="${svg.getBoundingClientRect().height - rectSize / 2}" x2="${rectSize * 2}" y2="${svg.getBoundingClientRect().height - rectSize / 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${rectSize / 2}" y1="${svg.getBoundingClientRect().height - rectSize * 2}" x2="${rectSize / 2}" y2="${svg.getBoundingClientRect().height / 2 + rectSize * 2}" stroke="blue" stroke-width="1.5"/>
    <line class="line" x1="${rectSize / 2}" y1="${svg.getBoundingClientRect().height / 2 - rectSize * 2}" x2="${rectSize / 2}" y2="${rectSize * 2}" stroke="blue" stroke-width="1.5"/>
    `
}
drawArrow()
let arrowHeadPoint = document.getElementById('arrow-head-point')
let arrowBasePoint = document.getElementById('arrow-base-point')
let arrowFigure = document.getElementById('arrow-figure')
let lines = document.querySelectorAll('.line')

arrowHeadPoint.addEventListener('mousedown', (event) => {
  let point = event.target
  let onMouseMove = (event) => {
    if (event.clientX - svg.getBoundingClientRect().left + 1.5 > 15 &&
      event.clientX - svg.getBoundingClientRect().left + 1.5 < svg.getBoundingClientRect().width - 15) {
      headPosition = event.clientX - svg.getBoundingClientRect().left + 1.5
      arrowFigure.setAttribute("d", `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svg.getBoundingClientRect().width - rectSize * 2} ${svg.getBoundingClientRect().height / 2} L${headPosition} ${svg.getBoundingClientRect().height - rectSize * 2} L${headPosition} ${svg.getBoundingClientRect().height - basePosition} L${rectSize * 2} ${svg.getBoundingClientRect().height - basePosition} L${rectSize * 2} ${basePosition}`)
      point.setAttribute("cx", headPosition)
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

arrowBasePoint.addEventListener('mousedown', (event) => {
  let point = event.target
  let onMouseMove = (event) => {
    if (event.clientY - svg.getBoundingClientRect().top + 1.5 < svg.getBoundingClientRect().height / 2 - rectSize * 2 &&
      event.clientY - svg.getBoundingClientRect().top + 1.5 > rectSize * 2) {
      basePosition = event.clientY - svg.getBoundingClientRect().top + 1.5
      point.setAttribute("cy", basePosition)
      arrowFigure.setAttribute("d", `M${rectSize * 2} ${basePosition} L${headPosition} ${basePosition} L${headPosition} ${rectSize * 2} L${svg.getBoundingClientRect().width - rectSize * 2} ${svg.getBoundingClientRect().height / 2} L${headPosition} ${svg.getBoundingClientRect().height - rectSize * 2} L${headPosition} ${svg.getBoundingClientRect().height - basePosition} L${rectSize * 2} ${svg.getBoundingClientRect().height - basePosition} L${rectSize * 2} ${basePosition}`)
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

lines.forEach(line => {
  line.addEventListener('mousedown', (event) => {
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
})

