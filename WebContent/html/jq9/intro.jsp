<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>POST submit 데이터 처리(jsp)</title>
	<script src="../../js/lib/jquery-3.6.0.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			
		});
	</script>
</head>
<% 
	request.setCharacterEncoding("UTF-8");

	String userName = request.getParameter("userName"); // String으로 가져와진다.	
	String userAge = request.getParameter("userAge"); 
	
	System.out.println(userName);
	System.out.println(userAge);
%>
<body>
	<p>로그인 : <span id="userName"><%= userName %></span> 님</p>
	<h1>Welcome to the Web Programming!</h1>
	<img src = "../../images/bear.jpg">
	<p>
		안녕하세요. 열심히 잘 해봅시다~ 
		<em>환영합니다!</em>
	</p>
	<h2>내용</h2>
	<p>HTML5, CSS3, JavaScript, jQuery, SQL, JSP, ...</p>
	<h2>기간</h2>
	<p>2021.03.10 ~ 2021.10.21</p>
	<h2>장소</h2>
	<p>대덕인재개발원</p>
</body>
</html>