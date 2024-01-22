Manifest
========


#### Configuration Options
Manifest is configured with a set of options passed in main.js.
		
	let options = { 
		serviceurl: 'https://manifest.supplystudies.com/services/', // Nodejs server location for services
		hoverHighlight: false, // On mouseover hides nodes unconnected to target
		retinaTiles: false, // Forces load of retina (2x) tiles (can impact performance)
		simpleLines: false // Instead of 60+ point line segements, uses 3 point quadratic bezier curves
	};
	
	MI = new Manifest(options);
	
Individual manifests can support their own options. 
