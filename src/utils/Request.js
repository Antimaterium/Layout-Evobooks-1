const host = "localhost";
const token = "";

export function request(url,method="GET",data){
    return fetch("http://"+host+"/"+url,{
        method: method,
        headers:{
            "Authorization": "Bearer "+token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}