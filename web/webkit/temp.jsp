<%@ page import="service.ServletIndex" %><%--
  Created by IntelliJ IDEA.
  User: huber
  Date: 21.06.2017
  Time: 10:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;" language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE >
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"  />
    <meta charset="UTF-8" />
    <meta http-equiv='content-language' content='pl'>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="<%request.getContextPath();%>/webkit/css/bootstrap.min.css">
    <!-- Bootstrap optional theme -->
    <link rel="stylesheet" href="<%request.getContextPath();%>/webkit/css/bootstrap-theme.min.css">
    <!--Main Stylesheet-->
    <link rel="stylesheet" href="<%request.getContextPath();%>/webkit/css/style.css">
    <!-- JqueryJavaScript -->
    <script src="<%request.getContextPath();%>/webkit/js/jquery-3.2.1.min.js"></script>
    <title>Project Główny</title>
</head>
<body>
    <nav class="navbar navbar-default navbar-fixed-top ">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Project</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="/">Home</a></li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </nav>
    <div class="headers-region fix-top">

    </div>
    <div class="container text-center">
        <div class="row default-color1">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <H1 class="headers-region">Welcome <span id="username"><c:out value="${requestScope.userName}" ></c:out></span></H1>
                <H2 class="headers-region">Your email:  <span id="useremail"><c:out value="${requestScope.userEmail}" ></c:out></span></H2>
                <H2 class="headers-region">Your email:  <span id="items"><c:out value="${requestScope.items}" ></c:out></span></H2>
            </div>
            <div class="col-md-4"></div>
        </div>
        <div class="fix-top"><H2 class="text-left info_test"></H2></div>
        <div class="wrapper_results text-left">
            <div class="row">
                <div class="col-md-4"><h4>Polish</h4></div>
                <div class="col-md-4"><h4>English</h4></div>
                <div class="col-md-4"><h4>Results</h4></div>
            </div>
            <c:forEach items="${requestScope.wordList}" var="words" varStatus="loop" end="${requestScope.wordList.getId()}">
                <div class="row learned">
                    <div class="col-md-4 pl_words"><h5><c:out value="${words.getPolish()  }"></c:out></h5></div>
                    <div class="col-md-4 en_words"><h5><c:out value="${words.getEnglish()}"></c:out></h5></div>
                    <div class="col-md-4 results"><h5 class="chc"><c:out value="${words.getCheck()}"></c:out></h5></div>
                </div>
            </c:forEach>
           <div class="row cloneable">
                <div class="col-md-4"><h5 class="pl_words"></h5></div>
                <div class="col-md-4"><h5 class="en_words"></h5></div>
                <div class="col-md-4"><h5 class="results"></h5></div>
            </div>
        </div>
        <div class="row default-color1">
            <div class="col-md-3">
                <input type="text" name="words_pl" list="words" id="search-words" placeholder="Type your word">
                <datalist id="words">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </datalist>
            </div>
            <div class="col-md-3">
                <input type="text" name="words_en" id="words_en" placeholder="Type your word">
            </div>
            <div class="col-md-3">
                <button class="btn btn-sm btn-info" id="check_words">Check</button>
            </div>
            <div class="col-md-3">
                <button class="btn btn-sm btn-info" id="chc">CheckAjax</button>
                <input type="hidden" id="hid" name="hid" value="test">
                <%-- <h2><c:out value="${requestScope.userId}" ></c:out></h2>--%>
            </div>
        </div>
        <div class="fix-top" id="somediv"></div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4 text-center"><a href="<%request.getContextPath();%>/webkit/register.jsp">Add new User</a></div>
            <div class="col-md-4"></div>
        </div>
    </div>
    <footer  class="default-color0">
        <p class="text-center">Copyrigth@ Odo</p>
    </footer>
</body>
<!-- Bootstrap JavaScript -->
<script src="<%request.getContextPath();%>/webkit/js/bootstrap.min.js"></script>
<!-- Main JavaScript -->
<script src="<%request.getContextPath();%>/webkit/js/main.js" charset="utf-8"></script>
</html>
