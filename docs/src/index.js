document.addEventListener('DOMContentLoaded', () => {
	const specUrl = 'api.yaml'
	const ui = SwaggerUIBundle({
		url: specUrl,
		dom_id: '#swagger-ui',
		presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
		layout: 'StandaloneLayout',
	})
	window.addEventListener('resize', () => ui.updateLayout())
})
