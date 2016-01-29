var app = angular.module("main", ['ngMaterial']);

app.config(function($mdThemingProvider) {
	$mdThemingProvider.definePalette('water', {
		'50':  'acf',
		'100': '8ae',
		'200': '79d',
		'300': '68f',
		'400': '67b',
		'500': '57a',
		'600': '569',
		'700': '458',
		'800': '357',
		'900': '356',
		'A100':'255',
		'A200':'145',
		'A400':'024',
		'A700':'003',
		'contrastDefaultColor': 'light',
		'contrastDarkColors': ['50','100','200','300','400','A100'],
		'contrastLightColors': undefined
	});
	$mdThemingProvider.theme('default')
		.primaryPalette('water');
});

app.config(function($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist([
		'self',
		'https://www.youtube.com/**'
	]);
})

app.controller('sidebarCtrl', function($scope) {
	$scope.curriculum = [
		{
			'stripeColor': 'white',
			'title': 'Korean Vocabulary',
			'subtitle': 'Joon bi, Seijak, Goman',
			'src': 'vocab-3'
		},		
		{
			'stripeColor': 'rgb(255,255,50)',
			'title': 'Physical Conditioning',
		},
		{
			'stripeColor': 'rgb(225,120,0)',
			'title': 'Hand Strikes',
			'subtitle': 'Hook Punches',
			'src': 'h2h-3'
		},
		{
			'stripeColor': 'rgb(50,255,50)',
			'title': 'Self-Defense',
			'subtitle': 'Bob & Weave',
			'src': 'self-defense-3'
		},
		{
			'stripeColor': 'rgb(0,75,200)',
			'title': 'Sparring',
			'subtitle': 'Inside-Step Drills',
			'src': 'inside-step-spar',
			'video': 'qD9rPbPB4Jc'
		},
		{
			'stripeColor': 'rgb(100,50,10)',
			'title': 'Board Break',
			'subtitle': 'Step-Behind Side Kick',
			'src': 'break-3'
		},
		{
			'stripeColor': 'rgb(255,30,30)',
			'title': 'Kicks',
			'subtitle': 'Double Roundhouse Kick, Back Kick, Crescent Kick',
			'src': 'kick-3',
			'video': 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm'
		},
		{
			'stripeColor': 'rgb(25,25,25)',
			'title': 'Form',
			'subtitle': 'Taeguk Sam Jang',
			'video': 'XMhY2Ioeof8'
		}
	];

	$scope.selectedStripe = {};

	$scope.returnData = function(data) {
		$scope.data = this.stripe;
		$scope.selectedStripe = $scope.data;
		console.log($scope.selectedStripe);
		return $scope.selectedStripe;
	};

	$scope.getVideo = function(src) {
		return 'https://www.youtube.com/embed/' + src;
	};
});