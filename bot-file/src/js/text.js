export default function countWords() {

    var collectedText='';

    $('p,h1,h2,h3,h4,h5').each(function(index, element){
        collectedText += element.innerText + " ";
    });   
    collectedText = collectedText.replace('undefined', '');

    collectedText = collectedText.replace(/[0-9]/g, '');

    //console.log("You have " + collectedText.split(' ').length + " in your document.");
   save(collectedText); //console.log();
    return collectedText;

}
;
async function save(txt){
    try {
        
         const d = new Date();
         var url="http://127.0.0.1:5000/save/"+d.getTime(); var res;//
         var data=await axios
         .post(url,{
            txts: txt
            
          },{
            headers: {
              'Content-Type': 'application/json'
             
            }
          }) 
         .then((response) => {
            return response;
            
         })
         .catch((error) => {console.error(error); return "...";});
         return data;
     } catch (error) {
         console.log(error);return "...";
       
     }
     return "data";
}
