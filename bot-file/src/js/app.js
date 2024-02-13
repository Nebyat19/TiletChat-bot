
import Chat_layout from "./chatbox.js";
import GetAnswe from "./api.js";
import countWords from "./text.js";
/** <script src="src/js/axion.js"></script>
    <script src="src/js/jquery.js"></script>
    <script src="src/js/inner.js"></script> */
var head = document.getElementsByTagName('HEAD')[0]; 
var body=document.getElementsByTagName('BODY')[0]; 
/****script 
 var script1= document.createElement('script'); script1.src='src/js/axion.js';
 var script2= document.createElement('script'); script2.src='src/js/jquery.js';
 var script3= document.createElement('script'); script3.src='src/js/inner.js';
 body.appendChild(script1);body.appendChild(script2);body.appendChild(script3);
 */
var link = document.createElement('link');
var linkicon=document.createElement('link');
linkicon.rel='stylesheet';
linkicon.type='text/css';
link.href="https://fonts.googleapis.com/icon?family=Material+Icons";
head.appendChild(linkicon);
var webchat_use_id=document.querySelector(".webchat_use_id").id;
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'src/css/style.css';
head.appendChild(link);
 countWords();
var body=document.getElementsByTagName('BODY')[0];
let container =document.createElement('div');
container.id='chatbot_container';
container.className='chat_container';
body.appendChild(container);
container.style.display='none';
const main_chat  = new Chat_layout();
setTimeout(function(){container.style.display='block'; }, 1000); 

let close_btn =document.querySelector("#close_btn");
let chatarea =document.querySelector('#chat');
let chat_button=document.querySelector("#chat_button");
let chat_button_box=document.querySelector('#chat_button_box');
close_btn.addEventListener('click',()=>{ 
    chatarea.classList.add('chat--hidden');
    chat_button_box.classList.remove('btn--hidden');
});
chat_button.addEventListener('click',()=>{ 
    chatarea.classList.remove('chat--hidden');
    chat_button_box.classList.add('btn--hidden');});
 
 let sendButton =document.querySelector('#send_btn');
 var input =document.querySelector('#input');
 input.addEventListener("keyup", ({key}) => { 
  
   if (key === "Enter") {
   /* var text='<div class="messages__item--operator wait hide">.wait.. </div>';
    let chatmsg = document.querySelector("#chat_message");
     chatmsg.innerHTML+=text; 
    //*/
      sendMessage(input);
   }});
 sendButton.addEventListener('click',()=>{
 /* var text='<div class="messages__item--operator wait hide"> wait... </div>';
    let chatmsg = document.querySelector("#chat_message");
     chatmsg.innerHTML+=text; */
   sendMessage(input);
 });


   
 let count=0;
 async function sendMessage(input){
  var msg =input.value; document.getElementById('input').value=""; //("value","");
  var chatscroll=document.querySelector('.chat_body');
   var answer= await GetAnswe(msg,webchat_use_id);
   upmsg(msg);
  /* var wait =document.querySelector('.wait'); 
   ; wait.childElementCount;
   wait.children[0].classList.remove('hide');*/
   if(msg!=""){

      var text=`
      
      <div class=" messages__item--visitor"> `+msg+`</div>
      <div class="messages__item--operator">`+answer+` </div>
      <span> <img  src="src/icon/bot.png" alt=""></span> <div class="rate">
     <button onclick="rate(0,`+count+++`)"> <a> <i  class="bi bi-hand-thumbs-down-fill"></i></a></button>
     <button onclick="rate(1,`+count+++`)"> <a><i  class="bi bi-hand-thumbs-up-fill"></i></a></button></div>
      `;
  
     let chatmsg = document.querySelector("#chat_message");
     chatmsg.innerHTML+=text; 
     
     chatscroll.scrollTop = chatscroll.scrollHeight+100;
     
   }
 }

