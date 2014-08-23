'use strict';

// Declare app level module which depends on filters, and services
var keyValueApp = angular.module('KeyValueApp', [
    'KeyValueApp.controllers',
    'KeyValueStorage',
    'ngCookies'
    ]);

keyValueApp.config(function (){
   // No conf
});