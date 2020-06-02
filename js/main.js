let svg = document.getElementById('arrow')
let headPosition = 101.5
let basePosition = svg.getBoundingClientRect().height * 0.4
let arrowBreakpoints = `M0 ${basePosition} L${headPosition} ${basePosition} L${headPosition} 0 L${svg.getBoundingClientRect().width} ${svg.getBoundingClientRect().height / 2} L${headPosition} ${svg.getBoundingClientRect().height} L${headPosition} ${svg.getBoundingClientRect().height - basePosition} L0 ${svg.getBoundingClientRect().height - basePosition}`
let drawArrow = () => {
  svg.innerHTML = `
    <path id="arrow-figure" d="${arrowBreakpoints}"/>
    <circle id="arrow-head-point" cx="${headPosition}" cy="3" r="3" fill="red" />
    <circle id="arrow-base-point" cx="2" cy="${svg.getBoundingClientRect().height * 0.4 + 1.5}" r="3" fill="red"/>
    <rect id="top-left" x="0" y="0" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="top-right" x="${svg.getBoundingClientRect().width - 5}" y="0" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="bottom-right" x="${svg.getBoundingClientRect().width - 5}" y="${svg.getBoundingClientRect().height - 5}" width="5" height="5" fill="blue" stroke-width="1"/>
    <rect id="bottom-left" x="0" y="${svg.getBoundingClientRect().height - 5}" width="5" height="5" fill="blue" stroke-width="1"/>
  `
}
drawArrow()
let arrowHeadPoint = document.getElementById('arrow-head-point')
let arrowBasePoint = document.getElementById('arrow-base-point')
let arrowFigure = document.getElementById('arrow-figure')

arrowHeadPoint.addEventListener('mousedown', (event) => {
  let point = event.target
  let onMouseMove = (event) => {
    headPosition = event.clientX - svg.getBoundingClientRect().left + 1.5
    arrowFigure.setAttribute("d", `M0 ${basePosition} L${headPosition} ${basePosition} L${headPosition} 0 L${svg.getBoundingClientRect().width} ${svg.getBoundingClientRect().height / 2} L${headPosition} ${svg.getBoundingClientRect().height} L${headPosition} ${svg.getBoundingClientRect().height - basePosition} L0 ${svg.getBoundingClientRect().height - basePosition}`)
    point.setAttribute("cx", headPosition)
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
    basePosition = event.clientY - svg.getBoundingClientRect().top + 1.5
    point.setAttribute("cy", basePosition)
    arrowFigure.setAttribute("d", `M0 ${basePosition} L${headPosition} ${basePosition} L${headPosition} 0 L${svg.getBoundingClientRect().width} ${svg.getBoundingClientRect().height / 2} L${headPosition} ${svg.getBoundingClientRect().height} L${headPosition} ${svg.getBoundingClientRect().height - basePosition} L0 ${svg.getBoundingClientRect().height - basePosition}`)
  }

  document.addEventListener('mousemove', onMouseMove)

  document.addEventListener('mouseup', (event) => {
    document.removeEventListener('mousemove', onMouseMove)
    document.onmouseup = null
  })
})

