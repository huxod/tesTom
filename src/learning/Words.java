package learning;

/**
 * Created by huber on 28.07.2017.
 */
public class Words {
    public Words(String email, String polish,String english,Boolean check){
        this.email = email;
        this.polish = polish;
        this.english = english;
        this.check = check;
    }
    private String email;
    private String polish;
    private String english;
    private Boolean check;

    public String getEmail()    {return email;  }
    public String getPolish()   {return polish; }
    public String getEnglish()  {return english;}
    public Boolean getCheck()   {return check;  }
}
