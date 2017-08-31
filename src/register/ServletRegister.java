package register;

import register.Register;
import service.Logon;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

/**
 * Created by huber on 27.07.2017.
 */
@WebServlet(name = "ServletRegister")
public class ServletRegister extends HttpServlet {
    public ServletRegister() throws SQLException {
    }
    public final String register_page   = "/webkit/register.jsp";
    public final String login_page      = "index.jsp";
    public final Logon logon            = new Logon();


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if(logon.checkEmail(request.getParameter("add_email")) && request.getParameter("add_email") == "" && request.getParameter("add_name") == "" && request.getParameter("add_password") == ""){
            PrintWriter out = response.getWriter();
            out.println("<h1 style='text-align:center'>This email is use</h1>");
            request.getRequestDispatcher(register_page).include(request,response);
            out.close();
        }else{
            try {
                Register regUser  = new Register(request.getParameter("add_name"),request.getParameter("add_password"),request.getParameter("add_email"));
            } catch (SQLException e) {
                e.printStackTrace();
            }
            PrintWriter out = response.getWriter();
            out.println("<h1 style='text-align:center'>You have new account</h1>");
            request.getRequestDispatcher(login_page).include(request,response);
            out.close();
        }
    }
}
