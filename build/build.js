({
	baseUrl: '../',
	name: "lib/main",
	out: 'main-build.js',
	paths: {
		jquery: 'lib/jquery/jquery.min',
		test_01: 'js/test-01',
		test_02: 'js/test-02',
		test_03: 'js/test-03'
	},
	shim: {
		'jquery': {
			exports: '$',
			deps: []
		},
		'test_01': {
			deps: ['jquery'],
		},
		'test_02': {
			deps: ['jquery'],
		},
		'test_03': {
			deps: ['jquery'],
		},
	}
})
