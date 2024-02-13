

export default async function GetAnswe(msg,id){
try {
   /* data={
        "key":msg,
        "id":id
    };*/
    const d = new Date();
    var url="http://127.0.0.1:5000/res/"+"AS47F45DE555GDDSS52"+"/"+d.getTime(); var res;
    var data=await axios
    .post(url,{res:msg}) 
    .then((response) => {
       res = response.data.ans;
     return res;
       
    })
    .catch((error) => {console.error(error); return "Hello, I regret to inform you that the server is currently offline.";});
    return data;
} catch (error) {
    console.log(error);
    return "I apologize for the inconvenience, but it seems that the server you are trying to access is currently unavailable.";
}
; 
}

