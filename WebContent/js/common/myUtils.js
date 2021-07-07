/**
 * 
 */

/**
 * URL로 전달받은 값을 반환해주는 함수
 * @param strUrl : URL 문자열
 * @param strKey : 필요한 값의 문자열 name
 * @returns : 입력한 name의 문자열 값
 */
function getValueByUrl(strUrl, strKey){
	var valObj = {};
	
	var idx = strUrl.indexOf("?");
	
	if(idx == -1){
		return "";	// 따로 알림 주지 말고 빈값을 주기
	}
	
	strUrl = strUrl.substr(idx+1);
	
	var params = strUrl.split("&");
	
	for(var i=0; i<params.length; i++){
		 var temp = params[i].split("=");
		 valObj[temp[0]] = decodeURI(temp[1]);
	}
	
	if(valObj[strKey] == null){ // String값으로 들어오니까 점 표기법은 못 씀
		return "";
	}
	
	return valObj[strKey];
}

/**
 *  빈값인지 확인하는 함수
 * @returns return true / false
 * @param val : 값(문자열) 
 */
function isEmpty(val) { // true, false를 리턴하는 경우, is~ has~로 이름 짓기
	val = val.trim();
	if(val==null || val.length==0){
		return true;
	}
	return false;
}

function hasEmpty(strId, str) {
	var obj = document.getElementById(strId);
	console.log(obj.value);
	if(obj.value.search(/\s/) > -1){
		alert(str + " 은(는) 공백을 허용하지 않습니다.");
		obj.focus();
		return false;
	}
	return true;
}

function checkValue(strId, str) {
	var obj = document.getElementById(strId);
	if(isEmpty(obj.value)){
		alert(str + " 은(는) 필수 입력 항목입니다."); // 메시지는 한 곳에서 코드로 관리하는 게 좋다. 항목마다 쓰면 달라질수 있으니까.
		obj.focus();
		return false;
	}
	return true;
}


function checkLength(strId, str, min, max) {
	var obj = document.getElementById(strId);
	if(obj.value.length < min || obj.value.length > max){
		alert(str + " 은(는) " + min + "자 이상, " + max + "자 이하로 입력하세요.")
		obj.focus();
		return false;
	}
	return true;
}

function checkRegExp(strId, str, regStr) {
	var obj = document.getElementById(strId);
	if(obj.value.match(regStr)){
		return true;
	}else{
		alert("입력하신 " + str + " 은(는) 올바르지 않은 형식입니다.")
		obj.focus();
		return false;
	}
}

/**
 * 
 * @param type : HP(연락처) 또는 DATE(년월일) 문자열
 * @param val : 숫자로만 이뤄진 값. DATE는 8자리 숫자.
 * @returns val에 포맷이 적용된 문자열 값
 */
function format(type, val) {
	// 정규식으로 바꾸는 법도 있음 https://tlatmsrud.tistory.com/23
	// val이 빈값이나 undefined거나 null인 경우 빈값을 반환 
	if(isEmpty(val)){
		return "";
	}
	
	if(type=="DATE"){
		if(val.length != 8){
			return val;
		}
		
		val = val.substr(0, 4) + "-" 
			+ val.substr(4, 2) + "-" + val.substr(6);
		
	}else if(type=="HP"){
		if(val.length != 11){
			return val;
		}
		
		val = val.substr(0, 3) + "-" 
			+ val.substr(3, 4) + "-" + val.substr(7, 4);
		
	}else{
		return val;
	}
	
	return val;
}






