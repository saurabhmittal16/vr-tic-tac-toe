import { ReactInstance, Surface } from "react-360-web";

function init(bundle, parent, options = {}) {
	const r360 = new ReactInstance(bundle, parent, {
		fullScreen: true,
		...options
	});

	r360.renderToSurface(r360.createRoot("Main"), r360.getDefaultSurface());
}

window.React360 = { init };
