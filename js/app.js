/**
 * Created by terryholt on 2/9/15.
 */
var time4lunch = angular.module("time4lunch",[]);

time4lunch.controller("AppCtrl", function ($http) {
    var app = this;
    var url = "http://localhost:3000";

    app.saveItem = function (itemName , itemPrice) {
        $http.post(url + "/addItem", {name:itemName,price:itemPrice}).success(function () {
            loadItems();
        })
    }

    app.saveMenu = function (title , description) {
        $http.post(url + "/addMenu", {title:title,description:description}).success(function () {
            //loadItems();
        })
    }

    app.saveUser = function (username,email,password,type ) {
        $http.post(url + "/addUser", {userName:username,email:email,password:password,accountType:type}).success(function () {
           // loadItems();
        })
    }

    function loadItems() {
        $http.get(url).success(function (items) {
            app.items = items;
        })
    }

    loadItems();
})