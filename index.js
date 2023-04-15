var imgURL;
function readURL(input){
    document.getElementById("image1").style.visibility="visible";
    var reader = new FileReader();
    reader.onload = function(e){    
       // console.log(e.target.result);
        imgURL = e.target.result;
        document.querySelector('#image1').src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);


}

function hideText()
{
    document.getElementById("image2").style.visibility="visible";
    document.querySelector('#image2').src = steg.encode(document.querySelector('#text').value , imgURL); 
}

function decode(input){
var reader = new FileReader();
reader.onload = function(e){ 
 document.querySelector('#decoded').innerText = steg.decode(e.target.result);
}
reader.readAsDataURL(input.files[0]);

}