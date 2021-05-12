fileName = window.location.href.split("/")[3]+".jpg";
instaDp = document.querySelector("img[alt='Change Profile Photo']");
if(instaDp == null)
  instaDp = document.querySelector("img[alt='Profile photo']");
if(instaDp == null )
    instaDp = document.querySelector("img[alt$=' profile picture']");
if(instaDp == null){
	window.alert("Some error occured. Try again.");
}else{
	instaDpUrl = instaDp.getAttribute("src");

	var xhr = new XMLHttpRequest();
	xhr.responseType = 'blob';

	xhr.onload = function () {
  	var hiddenAnchor = document.createElement('a');
  	hiddenAnchor.href = window.URL.createObjectURL(xhr.response);
  	hiddenAnchor.download = fileName;
  	hiddenAnchor.style.display = 'none';
 	document.body.appendChild(hiddenAnchor);
  	hiddenAnchor.click();
  	hiddenAnchor.remove()
        };
	
	xhr.open('GET', instaDpUrl);
	xhr.send();
}