			
			/*Login page validation start here*/
	
function validate(go){

	var values=go.pwd.value;
	var len=values.length;

	if(go.uname.value==null || go.uname.value==""){
		alert("please enter username:");
		go.uname.focus();
		return false;
	}
	
	if(go.pwd.value==null || go.pwd.value==""){
		alert("please enter password:");
		go.pwd.focus();
		return false;
	}
	
	if(len<=8){
		alert("Enter minimum 8 character");
		go.pwd.focus();
		return false;
		
	}
	if(len>16){
		alert("Enter maximum 15 character");
		go.pwd.focus();
		return false;
		
	}

	var arr=['!','@','#','$','%','^','&','*'];

		var lc=0;
	
		var uc=0;

		var nm=0;

		var sp=0;
		
		var spl;

		for(var i=0;i<len;i++){
										
			
	
				for(j=0;j<len;j++){
		
					if(arr[i]==values.charAt(j)){
			
						spl=values.charAt(j);	
						
						sp=1;	
					//alert("The special symbol is "+spl)	
							
						
					}
				}
			}
			if(sp==0){
				alert("Minimum one special character required");
					go.pwd.focus();				
					return false;
						}
	
		

	
			for(var i=0;i<len;++i){
	
					var cp=values.charAt(i);
													
					var chkup=(cp.toUpperCase()==null)
	  					if(!isNaN(cp*1)){
		
						//alert("Value is number: " +cp);
								nm=1;			//check number present enter
							}

						else{


						if(cp==cp.toUpperCase()){
							
							if(cp==spl){
							 continue;
								}
						//alert("Value is UpperCase: " +cp);
								uc=1;			//check uppercase present enter 
							
								
							} 
					
																			
		 
						if(cp==cp.toLowerCase()){
							
							if(cp==spl){
							 continue;
								}
						//alert("Value is LowerCase: " +cp);	//lowercase present enter
								lc=1;
							}	

						
					} 
				
								
			}	if(isNaN(cp*1)){
						alert("minimum 1 number required");
						nm=0;
						go.pwd.focus();
						return false;
						}
				if(uc==0){
						alert("minimum 1 uppercase required");
						uc=0;
						}
				if(lc==0){
						alert("minimum 1 uppercase required");
						lc=0;
						}
				
		
	if(lc==1 && uc==1){						
	
		if(nm==1 && sp==1){
			
			confirm("login Successful");
			
			}
		
		}else{
			confirm("login failed");
			go.pwd.focus();
			return false;
			}
		
	


	
		return true;
	
	}

	
			/*Login page validation end here*/


			/*Register page validation starts here*/

function resetfrm(){
	document.getElementById("input").reset();

}
					
function emptyCheck(field){
	var dumtxt=field.value;
	if(dumtxt==null || dumtxt==""){
		return true;
	}else{
		return false;
	}

}




function getMyData(input){

if(emptyCheck(input.Fname)){
	alert("Enter Valid Name");
	input.Fname.focus();
	return false;
}
var fn=input.Fname.value;
var size=fn.length;


if(!isNaN(fn*1)){
alert("Enter Valid Name");
	input.Fname.focus();
	return false;

}

for(i=0;i<size;i++){

	var fn1=fn.charAt(i);
		if(!isNaN(fn1*1)){
		alert("Enter Valid Name ");
		input.Fname.focus();
		return false;
		}

}

if(emptyCheck(input.Father)){
	alert("Enter Valid Father Name");
	input.Father.focus();
	return false;

} 



if(!isNaN(fa*1)){
alert("Enter Valid Father Name");
	input.Father.focus();
	return false;

}
var fa=input.Father.value;
var size1=fa.length;

for(i=0;i<size1;i++){

var fa1=fa.charAt(i);
		if(!isNaN(fa1*1)){
		alert("Enter Valid Father name ");
		input.Father.focus();
		return false;
		}

}
function sexCheck(field){
	var leng=field.length;
	for(var i=0;i<leng;i++){
		if(field[i].checked)
			return false;
	}	
		return true;
	
}

if(sexCheck(input.sex)){
	alert("Select your gender");
	return false;
}

var d=document.getElementById("do").value;

if(d==""){
	alert("Select your Date of Birth");
	return false;
}

if(emptyCheck(input.email)){
	alert("Enter Email Id");
	input.email.focus;
	return false;
}

if(emptyCheck(input.Nation)){
	alert("Enter your Nationality");
	input.Nation.focus;
	return false;
}

var com=document.getElementById("select").value;
if(com=="Select"){
	alert("Select your Community");
	input.commun.focus;
	return false;
}



if(emptycheck(input.phone)){
	alert("Enter your phone number");
	input.phone.focus;
	return false;
}

if(emptyCheck(input.address)){
	alert("Address Required");
	input.address.focus;
	return false;
}

if(checkboxcheck(input.ch)){
	alert("Select your Qualification");
	return false;
}

function checkboxcheck(field){
	var le=field.length;
	for(var i=0;i<le;i++){
		if(field[i].checked)
			return false;
		}	
		return true;
	
	}	

/*
function checkPhone(field){
	var phlen=field.length;
	if(!isNaN(field)){
		return true;
	}

}*/

alert("Registeration Successfull");
return true;


}
