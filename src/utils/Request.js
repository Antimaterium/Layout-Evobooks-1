const host = "Evolearn.ddns.net:63000";
var token = "";

export function request(url,method="GET",data){
    localStorage.getItem(token).length > 0 ? token = localStorage.getItem(token) : null;
    return fetch("http://"+host+"/"+url,{
        method: method,
        headers:{
            "Authorization": "Bearer "+token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}