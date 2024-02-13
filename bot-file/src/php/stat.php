<?php 

include "db.php";
$data= file_get_contents("php://input");
$data= json_decode($data,true);

if($data){
 $tye='';
 switch($data['case']){
    case 'stat':{
        $tye='stat';
        savestat($data);
        break;
    }
    case 'msg':{
        $tye='msg';
        savemsg($data);
        break;
    }
    default:{
        break;
    }
 }
 $res=array('ok'=>True, 'data'=>$tye);
echo json_encode($res);
}
function savestat($data){

}

/*
function savemsg($data){
$q="INSERT INTO msgs(agentid, userid,msg) VALUES('?','?','?'); ";
$insert=$con->stmt_init();
   $insert->prepare($q);
   $insert->bind_param("sss",$data['agentid'],$data['userid'],$data['msg']);
   if(!$insert->execute()){
        
    echo json_encode(["check"=>false,"message"=>"error accessing db"]);
}else{
echo json_encode(["check"=>true,"message"=>"msg inserted"]); 
}
}
*/


