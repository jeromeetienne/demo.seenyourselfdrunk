define( [ 'module'	// to set .baseURL
	, './threex.toxicpproc'
	, './threex.uniformstween'
	, './threex.toxicpprocdatgui'
	], function(module){
	// set baseUrl for this extension
	THREEx.ToxicPproc.baseURL	= module.uri+'/../';
});