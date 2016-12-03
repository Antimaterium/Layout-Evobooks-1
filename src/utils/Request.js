const host = "Evolearn.ddns.net:63000";
var token = "";

export function request(method="GET",url,headers,data){
    return fetch("http://"+host+"/"+url,{
        method: method,
        headers:headers,
        body: JSON.stringify(data)
    })
}