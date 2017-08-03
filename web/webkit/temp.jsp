<%--
  Created by IntelliJ IDEA.
  User: huber
  Date: 21.06.2017
  Time: 10:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
<head>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="<%request.getContextPath();%>/webkit/css/bootstrap.min.css">
    <!-- Bootstrap optional theme -->
    <link rel="stylesheet" href="<%request.getContextPath();%>/webkit/css/bootstrap-theme.min.css">
    <!--Main Stylesheet-->
    <link rel="stylesheet" href="<%request.getContextPath();%>/webkit/css/style.css">
    <!-- JqueryJavaScript -->
    <script src="<%request.getContextPath();%>/webkit/js/jquery-3.2.1.min.js"></script>
    <title>Project</title>
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
                <H1 class="headers-region">Welcome <span id="username"><c:out value="${username}"/></span></H1>
            </div>
            <div class="col-md-4"></div>
        </div>
        <div class="fix-top"></div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4"><h2"><span>Results: </span><span id="results"></span></h2></div>
            <div class="col-md-4"></div>
        </div>
        <div class="row default-color1">
            <div class="col-md-3">

               <%-- <h2><c:out value="${requestScope.userId}" ></c:out></h2>--%>
            </div>
            <div class="col-md-3  text-center">
                <input name="text" list="words" id="search-words" placeholder="Type your word">
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
                <input name="text"  id="words_en" placeholder="Type your word">
            </div>
            <div class="col-md-3">
                <button class="btn btn-sm btn-info" id="check_words">Check</button>
            </div>
        </div>
        <c:forEach items="${requestScope.userList}" var="user" varStatus="loop" end="${userList.getId()-1}">
        <div class="row">
            <div class="col-md-4 text-left"><h3><c:out value="${user.getId()  }"></c:out></h3></div>
            <div class="col-md-4"><h3><c:out value="${user.getName()}"></c:out></h3></div>
            <div class="col-md-4 text-right"><h3><c:out value="${user.getEmail()}"></c:out></h3></div>
        </div>
        </c:forEach>
        <div class="fix-top"></div>
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
<script src="<%request.getContextPath();%>/webkit/js/main.js"></script>
</html>
