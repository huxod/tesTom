package service;

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
    Logon lo = new Logon();
        System.out.println(lo.check("Ada","paswd"));
/*           FileReader fr=new FileReader("N:\\pt\\morewords.txt");
        BufferedReader br=new BufferedReader(fr);
        String thisLine = null;
        while ((thisLine = br.readLine()) != null) {
            Pattern p = Pattern.compile("^[a-zA-Z\\p{L}]+\\s[a-zA-Z]+$");
            Matcher m = p.matcher(thisLine);
            boolean b = m.matches();
            System.out.println(b+" "+thisLine);
        }
        br.close();
        fr.close();
    }
     try (BufferedWriter bw = new BufferedWriter(new FileWriter(FILENAME))) {

            String content = "This is the content to write into file \n";
            for (User object:users){
                content += object.getId()+" "+object.getName()+" "+object.getEmail()+" "+object.getPassword()+"\r\n";
            }
            bw.write(content);

            // no need to close it.
            bw.close();

            System.out.println("Done");

        } catch (IOException e) {

            e.printStackTrace();

        }*/

    }
}
