
// create close button

var nodeList = document.getElementsByTagName("LI");
var i;
for(i=0;i<nodeList.length;i++){
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	nodeList[i].appendChild(span);
}

// hide task when clicked on close button
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// add tasks when clicked on add button.
function newTask(){
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);

// check the values entered in tasks and proceed
	if(inputValue === ''){
		alert("please enter atleast task..")
	}
	else{
		document.getElementById("myUL").appendChild(li);
	}

	document.getElementById("myInput").value = "";		// after task is added make input field empty
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

		for(i=0;i<close.length;i++){
			close[i].onclick = function(){
				var div = this.parentElement;
				div.style.display = "none";
			}
		}

}
	



