package service;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 * Created by huber on 21.06.2017.
 */
public class DbConnect {
    public DbConnect(String dbName,String login,String password){
        connect(dbName,login,password);
    }

    private Connection connection = null;
    public Connection getConnection() {return connection;}

    private void connect(String dbName, String login, String password) {

        try {
            Class.forName("org.postgresql.Driver");
            connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/"+dbName, login, password);
            } catch (Exception e) {
                e.printStackTrace();
                System.err.println(e.getClass().getName()+": "+e.getMessage());
                System.exit(0);
            }
            System.out.println("Opened database successfully");
        }
}

