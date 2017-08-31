package service;

import learning.WordList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.sql.SQLException;

/**
 * Created by huber on 21.06.2017.
 */
@WebServlet(name = "ServletIndex")
public class ServletIndex extends HttpServlet {
    public ServletIndex() throws SQLException {
    }
    public String currentUser;
    public String currentUserEmail;
    public Integer items = 0;
    public final String home_page       = "/webkit/temp.jsp";
    public final String login_page      = "index.jsp";
    public final UserList list          = new UserList();
    public final WordList wordList      = new WordList();
    public final Logon logon            = new Logon();


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        request.getRequestDispatcher(login_page);
        if(logon.check(request.getParameter("name"), request.getParameter("password"))){
            currentUser = request.getParameter("name");
            try {
                list.createList();
                for(User user: list ){
                    System.out.println(" User Name: "+user.getName()+" User Email: "+user.getEmail());
                    if(user.getName().equals(currentUser)){
                        currentUserEmail = user.getEmail();
                        System.out.println("User Email: "+user.getEmail());
                    }
                }
                wordList.createWLemail(currentUserEmail);
                if(wordList.getId() != null) items = Integer.valueOf(wordList.getId()+"");
                System.out.println("Items :" +items);
            } catch (SQLException e) {
                e.printStackTrace();
            }

            request.setAttribute("Items",items);
            request.setAttribute("wordList",wordList);
            request.setAttribute("userName",currentUser);
            request.setAttribute("userEmail",currentUserEmail);
            request.getRequestDispatcher(home_page).forward(request,response);
            out.close();
        }else {
            out.println("<h1 style='text-align:center'>Wrong login or Password.</h1>");
            out.println("<h2 style='text-align:center'>Try again.</h2>");
            request.getRequestDispatcher(login_page).include(request,response);
            out.close();
        }
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}