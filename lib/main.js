require.config({
	baseUrl: './',
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
			exports: 'test_01',
			deps: ['test_02'],
		},
		'test_02': {
			exports: 'test_01',
			deps: ['jquery'],
		},
		'test_03': {
			exports: 'test_03',
			deps: ['jquery'],
		},
	}
})
// requirejs 是 require 的别名
requirejs([
	'jquery',
	'test_01',
	'test_02',
	'test_03',
], function() {
	alert('所有 js 加载完成！')
})