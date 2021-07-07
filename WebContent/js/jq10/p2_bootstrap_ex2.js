/**
 * 회원가입 화면 JS
 */

/*
 * [ID 중복 검사] 버튼 클릭 시 - ID 중복 검사
 * 화면 변화 없이 백단에서 - ajax 
 */
function duplicateId() {
	
	// 입력 값이 있는지 확인
	
	// 입력 값 형식 맞는지 확인
	// 영어 소문자 반드시 필요, 영어 소문자 숫자 조합 4~12 글자
	
	// DB에서 중복된 게 있는지 확인
	var param = {
		userId : $("#userId").val()
		,flag : "CHKID"
	}

	$.ajax({
		url: "/JqueryPj/MemberServlet"
		,type: "post"
		,data: param
		,dataType: "json"
		,success: function(data) {
			console.log(data);
			// { "resultCnt" : 0 }
			if(data.resultCnt == 0){
				$("#userIdSpan").text("사용 가능한 ID입니다.").addClass("text-success");
			}else{
				alert("이미 사용 중인 아이디입니다.");
				$("#userId").focus();
				$("#userIdSpan").text("이미 사용중인 ID입니다.").addClass("text-warning");
			}
		}	
		,error: function(xhr) {
			console.log(xhr);
			alert("오류입니다. 관리자에게 문의하세요."); // 오류코드 같이 나오게 하기
		}	
	});
	
}

/*
 * 우편 번호 모달 창 [검색] 버튼 클릭 시 - 우편번호 목록 조회
 * ajax
 * 데이터만 받아서 화면에 뿌려주는 거니까
 */
function srchAddrList() {
	
}

/*
 * [저장] 버튼 클릭 시 - 회원 정보 저장
 * 화면 변화 없이 백단에서 - ajax
 * 유효성 검사를 스크립트에서 할 것. 여기 있는 소스를 개발자 도구에서 수정할 수 있다. 사용자가 소스에 접근해 수정할 수 없게 해야 함.
 * 화면 쪽에서 체크를 하고 서버 쪽에서도 체크를 할 것. 서버쪽에서 리턴을 보낼 수있다. 저장에 성공을 하거나 실패를 해도 화면에 머무를 수 있게 ajax로 한다. 
 */
function save() {
	
}

/*
 * [취소] 버튼 클릭 시 - 이전 화면으로 돌아가기
 * submit, redirect
 */
function cancel() {
	
}