

async function rate(key,count){
 const url='./src/php/stat.php';
 const userid="1234";
 const agentid=document.querySelector("#this-chat-userid-webid").value;
 data=await axios
 .post(url,{key:key, id:count, user:userid, agent:agentid,case:'stat'}) 
 .then((response) => {
    //res = response.data.ans;
  return response;
    
 })
 .catch((error) => {console.error(error); 
    
});
 console.log (data);;

}

 async function upmsg(msg){
    const url='./src/php/stat.php';
    const userid="1234";
    const agentid=document.querySelector("#this-chat-userid-webid").value;
    data=await axios
    .post(url,{msg:msg, user:userid, agent:agentid,case:'msg'}) 
    .then((response) => {
       //res = response.data.ans;
     return response;
       
    })
    .catch((error) => {console.error(error); 
       
   });
    console.log (data);;
}
/**  set cooke
 * 
 * get cookie send to stat.php
 */