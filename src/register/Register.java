package register;

import service.QueriesSQL;
import service.User;

import java.sql.SQLException;

/**
 * Created by huber on 26.07.2017.
 */
public class Register {
    public Register(String name, String password, String email) throws SQLException {
        User usr = new User(name,password,email);
        this.sql = "INSERT INTO USERS (name, password, email) VALUES ('"+usr.getName()+"', '"+usr.getPassword()+"', '"+usr.getEmail()+"');";
        newUser();
    }
    private String sql;
    public void newUser() throws SQLException {
        QueriesSQL addUser = new QueriesSQL();
        addUser.queries(sql);
        addUser.close();
    }
}
