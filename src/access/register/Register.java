package access.register;

import service.QueriesSQL;
import access.User;

import java.sql.SQLException;

public class Register {
    public Register(String name, String password, String email) throws SQLException {
        User usr = new User(name,password,email);
        this.sql = "INSERT INTO USERS (name, password, email) VALUES ('"+usr.getName()+"', '"+usr.getPassword()+"', '"+usr.getEmail()+"');";
        if(! usr.getName() .equals("") && ! usr.getPassword() .equals("") && ! usr.getEmail() .equals("")) newUser();
    }
    private String sql;
    private void newUser() throws SQLException {
        QueriesSQL addUser = new QueriesSQL();
        addUser.queries(sql);
        addUser.close();
    }
}
