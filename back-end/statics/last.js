function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

data = httpGet('http://localhost:3000/getData');

data = JSON.parse(data);

if(data.amount !== undefined) {
    document.getElementById('amount').innerHTML += data['amount'];
    document.getElementById('ph').innerHTML += data['ph'];
}

