"use strict"

var searchButton = document.querySelector('button');
// document.querySelector('button')

var city = document.querySelector('#city');

var loadingText= document.querySelector("#load");
var weatherBox = document.querySelector("#weather");


var weatherCity = weatherBox.firstElementChild;
var weatherTemperature = document.querySelector("#weatherTemperature")
var weatherDescription = weatherBox.lastElementChild;