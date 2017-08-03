/**
 * created by huber on 21.06.2017.
 */
var a,k = 0, select, out,outs,empty_message ,outop, op = [],tab_words = [[],[]];
var input = document.getElementById('search-words');
var inputs = document.getElementById('words_en');
//ajax get file.txt
function readtextfile(file) {
    var rawfile = new XMLHttpRequest();
    rawfile.open("get", file);
    rawfile.onreadystatechange = function ()
    {
        if(rawfile.readyState === 4)
        {
            if(rawfile.status === 200 || rawfile.status == 0)
            {
                a = rawfile.responseText;
            }
        }
    };
    rawfile.send(null);
}


if(input !== null){

    console.log("Logon function enable");
    var datalist = document.getElementById('words');
    var option = datalist.getElementsByTagName("option");

    readtextfile("http://localhost:8080/stuff/pg_a-b.txt");

    function  option_create() {
        if (null !== empty_message){
            var reg = new RegExp("("+input.value+").+","gi");
            for (i = 0;op.length - 1 >= i;i++){
                if(op[i].match(reg) == op[i]){
                    option[k].value = op[i];
                    if(k === 14) {console.log("option_create work"); break;}else {k += 1;}
                }
            }
        }else {
            var refresh = setTimeout(function () {
                if(null !== empty_message){
                    option_create();
                    console.log("done");
                    empty_message = null;
                    clearTimeout(refresh);
                }else{
                    option_create();
                }
            },425);
        }
    }
//wait for file loading
    function transform() {
        var refresh = setTimeout(function () {
            if (a == null) {
                console.log("transform "+empty_message);
            } else {
                out = a.match(/[a-ząęćłóśźżA-Z]+ /gi);
                outs = a.match(/ \w+/gi);
                for (i = 0; out.length - 1 >= i; i++) {
                    tab_words[0][i] = out[i].replace(" ","");
                    tab_words[1][i] = outs[i].replace(" ","");
                    op[i] = out[i].replace(" ","");
                    console.log(tab_words[0][i]+" "+tab_words[1][i]);
                }
                a = null;
                out = null;
                outs = null;
                empty_message = "test";
                option_create();
                clearTimeout(refresh);
            }
        }, 425);
    }
    transform();
    input.onkeyup = function (event) {
        console.log("Key kode is: "+event.keyCode);
        if(input.value.length === 1){
            switch (event.keyCode){
                case 65:
                {
                    console.log("press a");
                    readtextfile("http://localhost:8080/stuff/pg_a-b.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 66:
                {
                    console.log("press b");
                    readtextfile("http://localhost:8080/stuff/pg_a-b.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 67:
                {
                    if(event.keyCode === 17){
                        console.log("press ć");
                    }else{
                        console.log("press c");
                    }
                    readtextfile("http://localhost:8080/stuff/pg_c-d.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 68:
                {
                    console.log("press d");
                    readtextfile("http://localhost:8080/stuff/pg_c-d.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 69:
                {
                    console.log("press e");
                    readtextfile("http://localhost:8080/stuff/pg_e-f.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 70:
                {
                    console.log("press f");
                    readtextfile("http://localhost:8080/stuff/pg_e-f.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 71:
                {
                    console.log("press g");
                    readtextfile("http://localhost:8080/stuff/pg_g-h.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 72:
                {
                    console.log("press h");
                    readtextfile("http://localhost:8080/stuff/pg_g-h.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 73:
                {
                    console.log("press i");
                    readtextfile("http://localhost:8080/stuff/pg_i-j.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 74:
                {
                    console.log("press j");
                    readtextfile("http://localhost:8080/stuff/pg_i-j.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 75:
                {
                    console.log("press k");
                    readtextfile("http://localhost:8080/stuff/pg_k-l.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 76:
                {
                    if(event.keyCode === 17){
                        console.log("press ł");
                    }else{
                        console.log("press l");
                    }
                    readtextfile("http://localhost:8080/stuff/pg_k-l.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 77:
                {
                    console.log("press m");
                    readtextfile("http://localhost:8080/stuff/pg_m-n.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 78:
                {
                    console.log("press n");
                    readtextfile("http://localhost:8080/stuff/pg_m-n.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 79:
                {
                    console.log("press o");
                    readtextfile("http://localhost:8080/stuff/pg_o-p.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 80:
                {
                    console.log("press p");
                    readtextfile("http://localhost:8080/stuff/pg_o-p.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 82:
                {
                    console.log("press r");
                    readtextfile("http://localhost:8080/stuff/pg_r-s.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 83:
                {
                    if(event.keyCode === 17){
                        console.log("press ś");
                    }else{
                        console.log("press s");
                    }
                    readtextfile("http://localhost:8080/stuff/pg_r-s.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 84:
                {
                    console.log("press t");
                    readtextfile("http://localhost:8080/stuff/pg_t-u.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 85:
                {
                    console.log("press u");
                    readtextfile("http://localhost:8080/stuff/pg_t-u.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 87:
                {
                    console.log("press w");
                    readtextfile("http://localhost:8080/stuff/pg_w-z.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
                case 88:{
                    if(event.keyCode === 17){
                        console.log("press ź");
                        readtextfile("http://localhost:8080/stuff/pg_w-z.txt");
                    }
                }
                case 90:
                {
                    if(event.keyCode === 17){
                        console.log("press ż");
                    }else{
                        console.log("press z");
                    }
                    readtextfile("http://localhost:8080/stuff/pg_w-z.txt");
                    transform();
                    if (k === 14) k = 0;
                    break;
                }
            }
        }else {
            transform();
            option_create();
            if (k === 14) k = 0;
        }
    };
    var checkwords = document.getElementById('check_words');
    var results = document.getElementById('results');
    console.log("Onclick butto propably is enabled");
    checkwords.onclick = function (event) {
        if(input.value === ""){
            results.innerHTML = "Select first word";
        }else{
            for(i = 0;tab_words[0].length - 1 >= i; i++){
                if (input.value === tab_words[0][i]   && inputs.value === tab_words[1][i])   results.innerHTML = "First Word is "+tab_words[1][i];
                if (input.value === tab_words[0][i-1] && inputs.value === tab_words[1][i-1]) results.innerHTML = "First Word is "+tab_words[1][i-1];
                if (input.value === tab_words[0][i-2] && inputs.value === tab_words[1][i-2]) results.innerHTML = "First Word is "+tab_words[1][i-2];
                if (input.value === tab_words[0][i-3] && inputs.value === tab_words[1][i-3]) results.innerHTML = "First Word is "+tab_words[1][i-3];
                if (input.value === tab_words[0][i-4] && inputs.value === tab_words[1][i-4]) results.innerHTML = "First Word is "+tab_words[1][i-4];
                if (input.value === tab_words[0][i-4] && inputs.value === tab_words[1][i-5]) results.innerHTML = "First Word is "+tab_words[1][i-5];

            }
        }
    }
}

//register
var add_name = document.getElementById("add_name");
var add_password = document.getElementById("add_password");
var add_email = document.getElementById("add_email");
var add_user = document.getElementById("add_user");

if((add_name !== null) && (add_password !== null) && (add_email !== null)  && (add_user !== null)){
    console.log("add_name is exist");
    function validate() {
        if ((add_name.value == "") || (add_password.value == "") || (add_email.value == "")) {
            alert("all fields are empty");
            return false;
        } else {
            return true;
            alert("submiting !!");
        }
    }
}