package service;

import learning.AddWords;
import learning.WordList;
import learning.Words;

import java.io.*;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by huber on 21.06.2017.
 */
public class DbTest {
    public static void main(String args[])throws SQLException{
        WordList wordList = new WordList();
        wordList.createWLemail("adek@gg.pl");
        for(Words word: wordList ){
            System.out.println("Polish : "+word.getPolish()+" Email "+word.getEmail()+" id: "+wordList.getId());
        }
    }
}
