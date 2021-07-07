package kr.or.ddit.member.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.member.service.MemberService;
import kr.or.ddit.member.vo.MemberVO;

@WebServlet("/MemberServlet")
public class MemberServlet extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.getWriter().append("Served at: ").append(req.getContextPath());
		doPost(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String url = "";
		
		String flag = req.getParameter("flag");
		
		if("CHKID".equals(flag)) {
			checkUserId(req);
			url = "html/member/memberResult.jsp";
			
		} else if("C".equals(flag)) {
			
		} else if("R".equals(flag)) {
			
		} else if("U".equals(flag)) {
			
		} else if("D".equals(flag)) {
			
		} else {
			// 회원 목록 조회
			retrieveMemberList(req);
			url = "html/member/memberListResult.jsp";
		}
		
		RequestDispatcher disp = req.getRequestDispatcher(url);
		disp.forward(req, resp);
	}
	
	//********************************************************************************//
	
	// [CHKID 내부 메서드 ] 아이디 유효성&중복 검사 
	private void checkUserId(HttpServletRequest req) {
		String userId = req.getParameter("userId");
		
		MemberService service = new MemberService();
		MemberVO memberVO = service.retrieveMemberByMemId(userId);
		
		req.setAttribute("memberVO", memberVO);
	}

	// [else 내부 메서드] 회원 목록 조회 
	private void retrieveMemberList(HttpServletRequest req) {
		
		MemberVO memberVO = new MemberVO();
		memberVO.setMemId(req.getParameter("memId"));
		memberVO.setMemName(req.getParameter("memName"));
		
		MemberService service = new MemberService();
		List<MemberVO> list = service.retrieveMemberList(memberVO);
		
		// 브라우저에 전달할 내용(결과)를 req의 attr에 담아주기
		// 브라우저에서는 req의 arrt에서 꺼내 사용한다.
		req.setAttribute("list", list);
	}
	
}
