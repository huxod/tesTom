package learning;

import service.QueriesSQL;
import service.ServletIndex;

import java.awt.*;
import java.sql.SQLException;

/**
 * Created by huber on 29.07.2017.
 */
public class AddWords {
    public AddWords(String email, String polish,String english,Boolean check)throws SQLException {
        Words words = new Words(email,polish,english,check);
        this.sql = "INSERT INTO WORDS (useremail, polish, english, chc) VALUES ('"+words.getEmail()+"', '"+words.getPolish()+"', '"+words.getEnglish()+"', '"+words.getCheck()+"');";
        addNewWords();

    }
    String sql;
    public void addNewWords()throws SQLException{
        QueriesSQL addWords = new QueriesSQL();
        addWords.queries(sql);
        addWords.close();
    }
}
