const { json } = require('express');
const truecallerjs = require('truecallerjs');
let alert = require('alert'); 



function Search(ph){

    let searchData = {
        number: ph,
        countryCode: "IN",
        installationId: "a1i0I--df_m08VCFrct8pcCxeT_wH8U2CXgkRMLP2JsqEzQ7Fce8OJBve6grtZln",
        output: "JSON"
    }

    let data = truecallerjs.searchNumber(searchData);

    data.then(function(responce){

        responce = JSON.parse(responce)

        let name = responce['data'][0]['name']

        let spam = responce['data'][0]['spamInfo']

        if(spam !== undefined){
            spam = spam['spamScore']
        }else{
            spam = 0;
        }
        
        if(spam <= 50 && spam > 0){
            alert("This number looks suspicious!!");
        }else if(spam > 50){
            alert("this number looks Fraud Continue at your own risk!!");
        }

        

    });

}



module.exports = Search;



