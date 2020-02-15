var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];
var max, a1, a2, a3, b1, b2, b3, c1, c2, c3, d, f;
function getValue(){
	max=document.getElementById("Max").value;
	a1=document.getElementById("A+").value;
	a2=document.getElementById("A").value;
	a3=document.getElementById("A-").value;
	b1=document.getElementById("B+").value;
	b2=document.getElementById("B").value;
	b3=document.getElementById("B-").value;
	c1=document.getElementById("C+").value;
	c2=document.getElementById("C").value;
	c3=document.getElementById("C-").value;
	d=document.getElementById("D").value;
	f=document.getElementById("F").value;
}
function checkValue(){
	getValue();
	if(max<=100&&max-a1>0&&a1&&a1>a2&&a2>a3&&a3>b1&&b1>b2&&b2>b3&&b3>c1&&c1>c2&&c2>c3&&c3>d&&d>f&&f>=0){
		hist();
		getHist();
	}
	else{
		error();
		
	}
}
function error(){
        	for(var i=0; i<11; i++){
        		document.getElementById(histId[i]).innerHTML = "";
        	}
        	alert("Wrong Bounds!");
}
var count=[0,0,0,0,0,0,0,0,0,0,0]; 
function hist(){
	for(var i=0; i<grades.length; i++)
	{
		if(grades[i]<=max){
			if(grades[i]>=a1){
				count[0]=count[0]+1;	
			}
			else if(grades[i]>=a2){
				count[1]=count[1]+1;
			}
			else if(grades[i]>=a3){
				count[2]=count[2]+1;
			}
			else if(grades[i]>=b1){
				count[3]=count[3]+1;
			}
			else if(grades[i]>=b2){
				count[4]=count[4]+1;
			}
			else if(grades[i]>=b3){
				count[5]=count[5]+1;
			}
			else if(grades[i]>=c1){
				count[6]=count[6]+1;
			}
			else if(grades[i]>=c2){
				count[7]=count[7]+1;
			}
			else if(grades[i]>=c3){
				count[8]=count[8]+1;
			}
			else if(grades[i]>=d){
				count[9]=count[9]+1;
			}
			else{
				count[10]=count[10]+1;
			}

		}
	}
}
var histId = ['h0','h1','h2','h3','h4','h5','h6','h7','h8','h9','h10'];

function check(){ 
	enterPress(event);
	if(event.keyCode!=46 && event.keyCode!=45 && (event.keyCode<48 || event.keyCode>57)){
		event.returnValue=false;
	}
}

function enterPress(event){
	reset();
	if(event.keyCode==13){
		checkValue();
	}
}
function getHist(){
        	for(var i=0; i<11; i++){
        		for(var j=0; j<count[i]; j++){
        			var html=document.getElementById(histId[i]).innerHTML;
        			document.getElementById(histId[i]).innerHTML = html+"<span>&nbsp;&nbsp;&nbsp;</span> ";
        			
        		}
        	}
}
function reset(){
	count=[0,0,0,0,0,0,0,0,0,0,0]; 
	for(var i=0; i<11; i++){
		document.getElementById(histId[i]).innerHTML ="";
	}
}
window.onload = function(){
	document.addEventListener("enterpress", enterPress, false);
};
