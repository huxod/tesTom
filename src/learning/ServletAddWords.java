package learning;

import access.User;
import access.UserList;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.concurrent.atomic.AtomicReference;

@WebServlet(name = "ServletAddWords")
public class ServletAddWords extends HttpServlet {
    public ServletAddWords()throws SQLException{}

    private final WordList wordList = new WordList();
    private final UserList users = new UserList();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String usrname =request.getParameter("nameusr");
        String pltxt = request.getParameter("textpl");
        String entxt = request.getParameter("texten");
        Boolean results = Boolean.valueOf(request.getParameter("result"));
        String usremail = (String) request.getSession().getAttribute("EmailUser");

        for (User object:users){
            if(object.getName().equals(usrname)){
                usremail = object.getEmail();
            }
        }
        System.out.println("name "+usrname+" pl : "+pltxt+" en : "+entxt+" email : "+usremail+" results : "+results);
        if(! usrname.equals("") && ! pltxt.equals("") && ! entxt.equals("") && ! usremail.equals("")) try {
            AtomicReference<AddWords> addWords = new AtomicReference<>(new AddWords(usremail, pltxt, entxt, results));
            wordList.createWLemail(usremail);
            request.getSession().setAttribute("count_row",wordList.getId());
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}
