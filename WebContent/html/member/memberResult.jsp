<%@page import="kr.or.ddit.member.vo.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
MemberVO memberVO = (MemberVO) request.getAttribute("memberVO");
if(memberVO == null){
	%>
	{ "resultCnt" : 0 }
	<%	
}else{
	%>
	{ "resultCnt" : 1 }
	<%	
}
%>
