package kr.or.ddit.common.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.common.service.ZipService;
import kr.or.ddit.common.vo.ZipVO;

@WebServlet("/ZipServlet")
public class ZipServlet extends HttpServlet{

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
			url = "html/member/memberResult.jsp";
			
		} else if("C".equals(flag)) {
			
		} else if("R".equals(flag)) {
			
		} else if("U".equals(flag)) {
			
		} else if("D".equals(flag)) {
			
		} else {
			// 회원 목록 조회
			retrieveZipListByDong(req);
			url = "html/member/memberListResult.jsp";
		}
		
		RequestDispatcher disp = req.getRequestDispatcher(url);
		disp.forward(req, resp);
	}
	
	//********************************************************************************//
	
	// [else 내부 메서드] 회원 목록 조회 
	private void retrieveZipListByDong(HttpServletRequest req) {

		String dong = req.getParameter("dong");

		ZipService service = new ZipService();
		List<ZipVO> list = service.retrieveZipListByDong(dong);
		
		// 브라우저에 전달할 내용(결과)를 req의 attr에 담아주기
		// 브라우저에서는 req의 arrt에서 꺼내 사용한다.
		req.setAttribute("list", list);
	}
	
}
