function go(){
    var item = document.forms.radio.tag.value;
    sendReq(item);
}

//ajax | criado url que queremos acessar 
function sendReq(item) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var objInsta = JSON.parse(this.responseText);
        montaTela(objInsta);
      }
    };
    
  xhttp.open("GET", 'https://api.instagram.com/v1/tags/'+item+'/media/recent?access_token=6086407333.9950093.dacdc68e3b4e4db58d91170a38b21d25', true);
  xhttp.send();
}

function montaTela(objInsta){
    //objInsta.data[0].images.standard_resolution.url;
    var divFoto = document.getElementById("foto");
    if(divFoto.childNodes.length != 0 ){
        while (divFoto.firstChild) {
          divFoto.firstChild.remove();
        }
    }
    
    for (var img in objInsta.data){
        var imagem = document.createElement("img");
        imagem.src = objInsta.data[img].images.standard_resolution.url;
        divFoto.appendChild(imagem);
    }
    
}

// -------------------------------------AULA 12----------------------------------------------------------- //

// RebirthOfShadowsTour
//  xhttp.open("GET","https://api.instagram.com/v1/tags/IntelnaFatecSantos/media/recent?access_token=6086407333.9950093.dacdc68e3b4e4db58d91170a38b21d25", true);
//  xhttp.open("GET","https://api.instagram.com/v1/tags/Polly/media/recent?access_token=6086407333.9950093.dacdc68e3b4e4db58d91170a38b21d25", true);
//function sendReq() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function() {
//      if (this.readyState == 4 && this.status == 200) {
//        var objInsta = JSON.parse(this.responseText);
//        montaPagina(objInsta);
//      }
//    };
  
//  xhttp.open("GET","https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=295055576.59daad8.ad2ce1fb8dd24af5995cb5d97ca65288", true);
//  xhttp.send();
//}

//function montaPagina(objInsta)//{
//    var div = document.createElement("div");
//    var divId = document.createElement("div");
//    var imgPhoto = document.createElement("img");
//    var divUser = document.createElement("div");
//    var divFB = document.createElement("div");
//    divId.innerHTML = objInsta.data.id;
//    imgPhoto.src = objInsta.data.profile_picture;
//    divUser.innerHTML = objInsta.data.username;
//    divFB.innerHTML = objInsta.data.counts.followed_by;
//    div.appendChild(divId);
//    div.appendChild(imgPhoto);
//    div.appendChild(divUser);
//    div.appendChild(divFB);
//    document.body.appendChild(div);
//}
