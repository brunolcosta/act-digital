angular.module('myApp.api', [])
    .factory('CharactersApi', ['md5', 'apiService', function(md5, apiService) {

        const apiURL = 'https://gateway.marvel.com/';
        const privateKey = '37eb33ea5cf75d6bfb41243eb795de2a6a568d1c';
        const publicKey = 'c3cd26538a256d90acce10d36735035a';

        apiService.urlAPI = apiURL;

        let getAll = function (offset) {

            const endpointRequest = '/v1/public/characters';

            let timeStamp = Date.now();

            let params = [
                ['apikey', publicKey],
                ['hash', getHash(timeStamp)],
                ['ts', timeStamp],
                ['offset', offset]
            ];

            return apiService.get(endpointRequest, params);

        }

        let get = function(heroId) {

            const endpointRequest = '/v1/public/characters/' + heroId;

            let timeStamp = Date.now();

            let params = [
                ['apikey', publicKey],
                ['hash', getHash(timeStamp)],
                ['ts', timeStamp]
            ];

            return apiService.get(endpointRequest, params);

        }

        let getHash = function (timeStamp) {

            let hash = md5.createHash(timeStamp + privateKey + publicKey).toString();
            
            return hash;

        }

        return {
            getHash: getHash,
            getAll: getAll,
            get: get
        };

    }]);

