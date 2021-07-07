package kr.or.ddit.member.service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import kr.or.ddit.member.dao.MemberDao;
import kr.or.ddit.member.vo.MemberVO;

public class MemberService {

	private MemberDao memDao;
	
	public MemberService() {
		if(memDao == null) memDao = new MemberDao();
	}
	
	public List<MemberVO> retrieveMemberList (MemberVO memberVO) {
		List<MemberVO> list = new ArrayList<>();
		
		try {
			list = memDao.retrieveMemberList(memberVO);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return list; 
	}

	public MemberVO retrieveMemberByMemId (String memId) {
		MemberVO memberVO = new MemberVO();
		
		try {
			memberVO = memDao.retrieveMemberByMemId(memId);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return memberVO;
	}
	
	
}
