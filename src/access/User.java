package access;

public class User {
    public User(String name,String password,String email) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    private int id;
    private String name;
    private String email;
    private String password;
    private String data;

    public String getName()     {return name;       }
    public String getPassword() {return password;   }
    public String getEmail()    {return email;      }
    public String getData()     {return data;       }

    public void setName(String name)         {this.name     = name;     }
    public void setPassword(String password) {this.password = password; }
    public void setEmail(String email)       {this.email     = email;   }
}
