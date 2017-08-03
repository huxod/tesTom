package service;

import java.sql.SQLException;

/**
 * Created by huber on 22.06.2017.
 */
public class Logon {
    public Logon() throws SQLException {}

    UserList checkuser = new UserList();
    boolean check(String name,String password){
        return checkuser.stream().anyMatch(user -> user.getPassword().equals(password) && user.getName().equals(name) || user.getEmail().equals(name));
    }
    public boolean checkEmail(String email){
        return checkuser.stream().anyMatch(user -> user.getEmail().equals(email));
    }
}
