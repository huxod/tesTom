package service;

import learning.WordList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.sql.SQLException;

@WebServlet(name = "ServletIndex")
public class ServletIndex extends HttpServlet {
    public ServletIndex() throws SQLException {
    }

    private  String currentUserEmail;
    private  String currentUser;
    private Integer items                = 0;
    private final String home_page       = "/webkit/temp.jsp";
    private final WordList wordList      = new WordList();


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        currentUserEmail        = (String) request.getSession().getAttribute("EmailUser");
        currentUser             = (String) request.getSession().getAttribute("NameUser");
        String sessionId        = request.getSession().getId();

        System.out.println("User Email with Service Class : "+currentUserEmail    );
        System.out.println("User Name with Service Class : "+currentUser          );

        request.setAttribute("Items",items);
        if(! items.equals(wordList.getId())){
            try {wordList.createWLemail(currentUserEmail);} catch ( SQLException e ) {e.printStackTrace();}
            items = wordList.getId() ;
        }

        request.setAttribute("wordList",wordList);
        request.setAttribute("userName",currentUser);
        request.setAttribute("userEmail",currentUserEmail);
        request.setAttribute("session",sessionId);
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