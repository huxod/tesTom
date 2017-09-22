package Access;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "ServletLogout")
public class ServletLogout extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {}

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getSession().setMaxInactiveInterval(1);
        PrintWriter out = response.getWriter();
        out.print("<H1>Logout</H1>");
        out.print("<script>" +"window.setTimeout(function(){window.location.replace('/index.jsp');},2000);"+
                "</script>");
        out.close();
    }
}
