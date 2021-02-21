import './index.css'

(async () => {
  if (CSS['paintWorklet'] === undefined) {
		await import('https://unpkg.com/css-paint-polyfill')
	}
  CSS.paintWorklet.addModule('paint-board/quadratic-curve.js')
})()
