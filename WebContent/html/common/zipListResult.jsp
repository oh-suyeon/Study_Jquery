<%@page import="kr.or.ddit.common.vo.ZipVO"%>
<%@page import="kr.or.ddit.member.vo.MemberVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
[
<%
List<ZipVO> list = (List<ZipVO>) request.getAttribute("list");
for(int i=0; i<list.size(); i++){
	if(i>0){
		%>,<%
	}
	
	ZipVO vo = list.get(i);
	String zipcode = vo.getZipcode();
	String sido = vo.getSido();
	String gugun = vo.getSido();
	String dong = vo.getDong();
	String ri = vo.getRi();
	String bldg = vo.getBldg();
	String bunji = vo.getBunji();
	%>
	{
		"zipcode" : "<%=zipcode %>"
		,"sido" : "<%=sido %>"
		,"gugun" : "<%=gugun %>"
		,"dong" : "<%=dong %>"
		,"ri" : "<%=ri %>"
		,"bldg" : "<%=bldg %>"
		,"bunji" : "<%=bunji %>"
	}
	<%
}
%>
]