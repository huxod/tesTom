package service;

import java.sql.Connection;
import java.sql.DriverManager;


class DbConnect {
    DbConnect(String dbName, String login, String password){
        connect(dbName,login,password);
    }

    private Connection connection = null;
    Connection getConnection() {return connection;}

    private void connect(String dbName, String login, String password) {

        try {
            Class.forName("org.postgresql.Driver");
            connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/"+dbName, login, password);
            } catch (Exception e) {
                e.printStackTrace();
                System.err.println(e.getClass().getName()+": "+e.getMessage());
                System.exit(0);
            }
           /* System.out.println("Opened database successfully");*/
        }
}

