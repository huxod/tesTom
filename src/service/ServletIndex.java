package service;

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

    public String currentUser;
    public final String home_page       = "/webkit/temp.jsp";
    public final String login_page      = "index.jsp";
    public final UserList list          = new UserList();
    public final Logon logon            = new Logon();


    public ServletIndex() throws SQLException {
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher(login_page);
        if(logon.check(request.getParameter("name"),request.getParameter("password")) == true){
            currentUser = request.getParameter("name")+" ";
            doGet(request,response);
        }else {
            PrintWriter out = response.getWriter();
            out.println("<h1 style='text-align:center'>Wrong login or Password.</h1>");
            out.println("<h2 style='text-align:center'>Try again.</h2>");
            request.getRequestDispatcher(login_page).include(request,response);
            out.close();
        }
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        if(logon.check(request.getParameter("name"),request.getParameter("password")) == true){
            request.setAttribute("username",currentUser);
            request.setAttribute("userList",list);
            request.getRequestDispatcher(home_page).forward(request,response);
        }
    }
}
