package access;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

@WebServlet(name = "ServletLogon")
public class ServletLogon extends HttpServlet {

    public ServletLogon() throws SQLException {}

    private String currentUser;
    private String currentUserEmail;


    private final String login_page      = "index.jsp";
    private final UserList list          = new UserList();
    private final Logon logon            = new Logon();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession(true);
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
                    }
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
            session.setAttribute("EmailUser",currentUserEmail);
            session.setAttribute("NameUser",currentUser      );
            session.setAttribute("count_row",0);
            doGet(request,response);
            out.close();
        }else {
            out.println("<h1 style='text-align:center'>Wrong login or Password.</h1>");
            out.println("<h2 style='text-align:center'>Try again.</h2>");
            request.getRequestDispatcher(login_page).include(request,response);
            out.close();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("User Email with Logon Class : "+request.getSession().getAttribute("EmailUser")    );
        System.out.println("User Name with Logon Class : "+request.getSession().getAttribute("NameUser")      );
        response.sendRedirect("/service");
    }
}
