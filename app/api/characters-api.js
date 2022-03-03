angular.module('myApp.api', [])
    .factory('CharactersApi', function() {

        const apiURL = 'https://gateway.marvel.com/';

        let get = function (sunLightValue, waterValue, petsValue) {

            const endpointRequest = '/v1/public/characters';



            let params = [
                ['apikey', sunLightValue],
                ['hash', waterValue],
                ['ts', petsValue]
            ];

            //return super.get(endpointRequest, params);
        }

        let getHash = function () {

            let ts = Date.now;

            let privateKey = '5a237863b3cc2061003cbbc4fe20dc06';
            let publicKey = 'fbf255068eccea6d0ef951b9f25626b57ab2fe72';

            //console.log(MD5(ts + privateKey + publicKey));
            console.log('teste');

        }

        return {
            getHash: getHash
        };

    });

