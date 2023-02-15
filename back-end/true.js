const truecallerjs = require('truecallerjs');


function Search(ph){

    let searchData = {
        number: ph,
        countryCode: "IN",
        installationId: "a1i0u--dfBi4IVJkxstMYPPYyVfvhzS_xZWseonOYsncOCxNaf-qgkeBu6gqKK1Q",
        output: "JSON"
    }

    return truecallerjs.searchNumber(searchData);

}



module.exports = Search;



