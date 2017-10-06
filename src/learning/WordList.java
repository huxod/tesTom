package learning;

import service.QueriesSQL;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 * Created by huber on 28.07.2017.
 */
public class WordList extends ArrayList<Words> {
    public WordList(){}
    private Integer id;
    private Integer items                = 0;
    public String sql = "SELECT * FROM WORDS";

    public void setItems(Integer items) {this.items = items;}
    public Integer getItems(){
        return  items;
    }

    private void setId(Integer id) {this.id = id;}
    public Integer getId() {return id;}

    public void createWLemail(String usremail)throws SQLException{
        this.sql = "SELECT * FROM WORDS WHERE useremail IN ('"+usremail+"');";
        createWordList();
    }
    public void createListwordsData(String usremail)throws SQLException{
        this.sql = "select * from words WHERE (timestamp >= date_trunc('week', CURRENT_TIMESTAMP - interval '1 week') " +
                "and timestamp < date_trunc('week', CURRENT_TIMESTAMP  - interval '0 week') " +
                "and useremail = ('"+usremail+"'))";
        createWordList();
    }
    public void createWordList() throws SQLException {
        QueriesSQL tableWords  = new QueriesSQL();
        ResultSet rs = tableWords.stmt.executeQuery(sql);
        while ( rs.next() ) {
            setId(rs.getInt("id"));
            String  polish   = rs.getString("polish");
            String  english  = rs.getString("english");
            String  email    = rs.getString("useremail");
            Boolean check    = rs.getBoolean("chc");

            Words words           = new Words(email, polish, english, check);
            add(words);
        }
        tableWords.stmt.close();
        rs.close();
        tableWords.close();
    }
}