var myModule = angular.module('myApp.core', []);

myModule.service('apiService', function() {
  
    this.urlAPI;

    this.request = function (url, params, method) {

        let options = {
            method
        };
    
        if (method === 'GET') {
            url += '?' + (new URLSearchParams(params)).toString();
        }
        else {
            options.body = JSON.stringify(params);
        }
    
        return fetch(url, options)
            .then(response => response.json());
    }
    
    this.get = function (endpointRequest, params) {

        let url = this.urlAPI + endpointRequest;
        return this.request(url, params, 'GET');
    }

});