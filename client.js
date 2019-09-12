import { ReactInstance, Surface } from "react-360-web";

function init(bundle, parent, options = {}) {
	const r360 = new ReactInstance(bundle, parent, {
		fullScreen: true,
		...options
	});

	const centerPanel = new Surface(500, 600, Surface.SurfaceShape.Flat);
	centerPanel.setAngle(0, 0);

	r360.renderToSurface(r360.createRoot("Main"), centerPanel);

	// Load the initial environment
	r360.compositor.setBackground(r360.getAssetURL("360_world.jpg"));
}

window.React360 = { init };
