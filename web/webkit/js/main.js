/**
 * created by huber on 21.06.2017.
 */
var a,k = 0, select, out,outs,empty_message ,outop,results, op = [],tab_words = [[],[]];
var input = document.getElementById('search-words');
var inputs = document.getElementById('words_en');

//*************************************************************//
// Ajax get file.txt                                           //
//*************************************************************//

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

    //*************************************************************//
    //Wait for file loading                                        //
    //*************************************************************//

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
                    /*  console.log(tab_words[0][i]+" "+tab_words[1][i]);*/
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


    var cls_nomber = 0, cls_controll;
    var checkwords = document.getElementById('check_words');
    var wrap_results = document.getElementsByClassName('wrapper_results')[0];
    //Function grab elements and clone
    function cloneeElement(cloneable) {
        if(cls_nomber === cls_controll) {
            var clone = cloneable.cloneNode(true);
            wrap_results.appendChild(clone);
            clone.querySelector('.results').innerHTML = "";
            clone.querySelector('.pl_words').innerHTML = "";
            clone.querySelector('.en_words').innerHTML = "";
            cls_nomber += 1;
        }
    }

    //*************************************************************//
    //Function add elements and check                              //
    //*************************************************************//

    function addRow(results, pl_words, en_words, cloneable ,i){
        if (input.value === tab_words[0][i] && inputs.value === tab_words[1][i] ){
            pl_words.innerHTML = tab_words[0][i];
            en_words.innerHTML = tab_words[1][i];
            results.innerHTML = "true";
            cloneeElement(cloneable);
            cloneable.className ="row cloneable correct";
            return true;
        }else if (input.value === tab_words[0][i] && en_words.innerHTML === "" && inputs.value !== tab_words[1][i] ){
            pl_words.innerHTML = tab_words[0][i];
            en_words.innerHTML = inputs.value;
            results.innerHTML = "false";
            cloneeElement(cloneable);
            cloneable.className = "row cloneable incorrect";
            return true;
        }
    }


    checkwords.onclick = function () {
        cls_controll = cls_nomber;
        var cloneable = document.getElementsByClassName('cloneable')[cls_nomber];
        results  = cloneable.querySelector('.results');
        var pl_words = cloneable.querySelector('.pl_words');
        var en_words = cloneable.querySelector('.en_words');
        if(input.value === ""){
            results.innerHTML = "Select first word";
        }else{
            for(i = 0;tab_words[0].length - 1 >= i; i++){
                addRow(results, pl_words, en_words, cloneable, i );
            }
        }
    }
}


    //*************************************************************//
    //Register                                                     //
    //*************************************************************//

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

var button_request = document.getElementById('chc');

    //*************************************************************//
    //Ajax request                                                 //
    //*************************************************************//

var name_user = document.getElementById("username").innerHTML;
button_request.onclick =function () {
    var itm = document.getElementById("items2")
        resbool = results.innerHTML,
        text_en = inputs.value,
        text_pl = input.value,
        itm_int     = itm.innerHTML;
    console.log("name "+name_user+" pl : "+text_pl+" en : "+text_en+" results : "+resbool);
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            console.log("Status :"+xmlhttp.status);
        }
    };

    xmlhttp.open("POST", 'http://localhost:8080/addwords', true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
    xmlhttp.send("textpl="+ text_pl +"&texten=" + text_en +"&nameusr="+ name_user + "&result="+ resbool);
};

//*************************************************************//
// Find the closest ancestor element that has a specific class //                                           
//*************************************************************//


var element_parrent = document.getElementsByClassName('chc');
console.log("findElement : "+element_parrent[0].parentNode.classList);
function find_papa(ele, cls,i) {
    while(!ele.classList.contains(cls)){
        ele = ele.parentNode ;
        if((element_parrent[i].innerHTML == "true") && (ele.classList.contains("learned"))){
            ele.classList = ele.classList + " correct";
        }
        if(element_parrent[i].innerHTML == "false" && (ele.classList.contains("learned"))){
            ele.classList = ele.classList + " incorrect";
        }
    }
}
for( i = 0;element_parrent.length > i;i++){
    find_papa(element_parrent[i],"learned",i);
}
/////////////////////////////////////////////////////////////
