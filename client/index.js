//IIFE initializing agular module goes here
(function(){
  'use strict';

  angular.module('zoeames', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/skills', {templateUrl:'/views/skills/skills.html', controller:'SkillsCtrl'})
    .when('/portfolio', {templateUrl:'/views/portfolio/portfolio.html', controller:'PortfolioCtrl'})
    .when('/resume', {templateUrl:'/views/resume/resume.html', controller:'ResumeCtrl'})
    .otherwise({redirectTo:'/'});

  }]);
})();
