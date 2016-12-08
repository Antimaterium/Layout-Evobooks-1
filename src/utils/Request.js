const host = "Evolearn.ddns.net:63000";
//const host = "localhost:63367";
var token = "";

export function request(url, method="GET",headers,data){
    return fetch("http://"+host+"/"+url,{
        method: method,
        headers:headers,
        cache: 'default',
        body: data
    })
}