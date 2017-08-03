package service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 * Created by huber on 21.06.2017.
 */
public class UserList extends ArrayList<User>{
    public UserList() throws SQLException {
        createList();
    }
    private Integer id;
    private String sql = "SELECT * FROM USERS;";

    private void setId(Integer id) {this.id = id;}
    public Integer getId() {return id;}

    public void createList() throws SQLException {
        QueriesSQL tableUsers  = new QueriesSQL();
        ResultSet rs = tableUsers.stmt.executeQuery(sql);
        while ( rs.next() ) {
            setId(rs.getInt("id"));
            String  name        = rs.getString("name");
            String  email       = rs.getString("email");
            String  password    = rs.getString("password");
            String  data        = rs.getString("date");

            User user           = new User(name,password,email);
            user.setId(getId());
            add(user);
        }
        tableUsers.stmt.close();
        rs.close();
        tableUsers.close();
    }
}