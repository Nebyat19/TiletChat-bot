
export default class Chat_layout
{

    constructor(args){
     var container =document.querySelector(".webchat_use_id");
    
     let layout=`
     <div class="chatbot_container">
        <div  class="chatbox">
            <div id="chat" class="chat chat--hidden">
      
      <div class='chat_header' >
      <div class='icons'>
          <img class="min" src="src/icon/dot.png" alt="">
          <div class="bot">
            <img  src="src/icon/bot.png" alt="">
            <span>TiletChat</span>
          </div>
        <button onclick="togglebox(false);"> <img class="min" id="close_btn" src="src/icon/close.png" alt=""></button> 
      </div>
      </div>
      <div class='chat_body'>
      <div class="chatbox__messages" >
      <div id='chat_message' class='messages__item'>
       <div class="messages__item--operator">Hello, my name is Tiletchat. How may I assist you today?</div>
       <span> <img  src="src/icon/bot.png" alt=""></span>
      
     </div>
            </div>
     
      </div>
      <div class='chat_footer'>
       
        <div class="footer_main">
            <img src="src/icon/mic.png" alt="">
            <div class="input"><input type="text" id='input' placeholder="Ask..."></div>
           <div class="send"><button id='send_btn'><img src="src/icon/send.png" alt=""></button></div>
        </div>
        <div class="text"><span>Powered By Tiletsolution</span></div>
      </div>
            </div>
            <div class="chat_button " id="chat_button_box">
              
              <button  id="chat_button">
                <img src="src/icon/chat.png" alt="">
             </button>
            </div>
           
          </div>
    </div>
    `;

     container.innerHTML=layout;
    }
       
    
}
