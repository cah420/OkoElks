var elkPrefix = "elk";
var elkCount = 8;

function getElk(){
	var elkNum = Math.floor(Math.random()*elkCount);
	return "images/"+elkPrefix+elkNum+".jpg";
}

function replaceImages(){
	Array.prototype.map.call(document.images,function(img){
		//don't re-elk images
		if(img.className.indexOf('elked')>-1){
			return;
		}
		img.classList.add('elked');
		//retain the original dimensions
		var width = img.width;
		var height = img.height;
		img.style.width = width+'px';
		img.style.height = height+'px';

		var loc = chrome.extension.getURL(getElk());
		img.src = loc;
		if(img.srcset){
			img.srcset = loc;
		}
	});
}

window.setTimeout(replaceImages,1000);
document.body.addEventListener('click',function(){
	replaceImages();
});
