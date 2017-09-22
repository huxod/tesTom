package Access;

import java.sql.SQLException;

public class Logon {
    public Logon() throws SQLException {}

    private UserList checkuser = new UserList();
    boolean check(String name, String password){
        return checkuser.stream().anyMatch(user -> user.getPassword().equals(password) && user.getName().equals(name) || user.getEmail().equals(name));
    }
    public boolean checkEmail(String email){
        return checkuser.stream().anyMatch(user -> user.getEmail().equals(email));
    }
}
