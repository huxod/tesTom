package learning;

import service.User;
import service.UserList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

/**
 * Created by huber on 04.08.2017.
 */
@WebServlet(name = "ServletAddWords")
public class ServletAddWords extends HttpServlet {
    public ServletAddWords()throws SQLException{}
    public final UserList users = new UserList();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String usrname =request.getParameter("nameusr");
        String pltxt = request.getParameter("textpl");
        String entxt = request.getParameter("texten");
        Boolean results = Boolean.valueOf(request.getParameter("result"));
        String usremail = null;
        for (User object:users){
            if(object.getName().equals(usrname)){
                usremail = object.getEmail();
                System.out.println(object.getEmail());
            }else {
                object.getId();
            }
        }
        System.out.println("name "+usrname+" pl : "+pltxt+" en : "+entxt+" email : "+usremail+" results : "+results);
        if(usrname != "" && pltxt != "" && entxt != "" && usremail != ""){
            try {
                AddWords addWords = new AddWords(usremail,pltxt,entxt,results);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}
