document.body.onload=init;

function init() {
	var navList=document.getElementsByClassName('navList');
	var contLeft=document.getElementsByClassName('contLeft')[0];
	var contList=contLeft.getElementsByTagName('li');
	var contInput=contLeft.getElementsByClassName('contAInput');

	for (var i = 0; i < navList.length; i++) {
		navList[i].addEventListener("click",function(){
			if(this.className.indexOf("navActive")==-1){
				for (var i = 0; i < navList.length; i++) {
					navList[i].className="navList";
				}
				this.className +=" navActive";
			}
		});
	}

	for (var i = 0; i < contInput.length; i++) {
		contInput[i].addEventListener("focus",function(){
			var parent=this.parentNode;
			parent.style.backgroundColor="#fff";
			parent.style.color="#000";
			this.style.backgroundColor="#fff";
		});
		contInput[i].addEventListener("blur",function(){
			var parent=this.parentNode;
			parent.style.backgroundColor="#5bb3e2";
			parent.style.color="#e5e5e5";
			this.style.backgroundColor="#5bb3e2";
		});
	}

}