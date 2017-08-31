package service;

import java.sql.SQLException;
import java.sql.Statement;

/**
 * Created by huber on 21.06.2017.
 */
public class QueriesSQL {
    public QueriesSQL()throws SQLException{
        this.stmt = this.connect.getConnection().createStatement();
    }
    private DbConnect connect = new DbConnect("postgres","postgres","odwaga@81");
    public Statement stmt = null;

    public void queries(String sql) throws SQLException{
        System.out.println("smt Update"+sql);
       /*stmt.executeUpdate(sql);*/
       stmt.executeUpdate(sql);
       stmt.close();
        System.out.println("smt Close");
    }

    public void close() throws SQLException{
        System.out.println("Data Base Close");
        connect.getConnection().close();
    }
}
