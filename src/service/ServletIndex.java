package service;

import learning.WordList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.sql.SQLException;

import static java.lang.Integer.parseInt;

@WebServlet(name = "ServletIndex")
public class ServletIndex extends HttpServlet {
    public ServletIndex() throws SQLException {
    }

    private  String  currentUserEmail;
    private  String  currentUser;
    private  Integer ItemsStart = 0;

    private final String home_page       = "/webkit/temp.jsp";





    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Cookie cookie = new Cookie("count_row", "3");

        response.addCookie(cookie);
        currentUserEmail        = (String) request.getSession().getAttribute("EmailUser");
        currentUser             = (String) request.getSession().getAttribute("NameUser");
        String sessionId        = request.getSession().getId();
        WordList wordList      = new WordList();

        request.setAttribute("ItemsStart",  ItemsStart);
        request.setAttribute("Items",   0);
        request.setAttribute("wordList", null);

        if ((wordList.getId() != request.getSession().getAttribute("count_row"))&&(! request.getSession().getAttribute("count_row").equals(1))) {
            try {wordList.createWLemail(currentUserEmail);} catch ( SQLException e ) {e.printStackTrace();}
            request.getSession().setAttribute("count_row",wordList.getId());
        }

        request.setAttribute("Items",    wordList.getId());
        request.setAttribute("wordList", wordList);
        request.setAttribute("userName", currentUser);
        request.setAttribute("userEmail",currentUserEmail);
        request.setAttribute("session",  sessionId);
        request.getRequestDispatcher(home_page).forward(request,response);

    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if(null != request.getSession().getAttribute("EmailUser")){
            doPost(request,response);
        }else {
            response.sendRedirect("/index.jsp");
        }
    }
}