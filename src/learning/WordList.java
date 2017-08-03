package learning;

import service.QueriesSQL;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 * Created by huber on 28.07.2017.
 */
public class WordList extends ArrayList<Words> {
    public WordList() throws SQLException {
        createWordList();
    }
    private Integer id;
    private String sql              = "SELECT * FROM WORDS;";


    private void setId(Integer id) {this.id = id;}
    public Integer getId() {return id;}

    public void createWordList() throws SQLException {
        QueriesSQL tableWords  = new QueriesSQL();
        ResultSet rs = tableWords.stmt.executeQuery(sql);
        while ( rs.next() ) {
            setId(rs.getInt("id"));
            String  polish        = rs.getString("polish");
            String  english        = rs.getString("english");
            String  email       = rs.getString("useremail");
            Boolean check =      rs.getBoolean("chc");

            Words words           = new Words(email, polish, english, check);
            add(words);
        }
        tableWords.stmt.close();
        rs.close();
        tableWords.close();
    }
}
