<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="<%request.getContextPath();%>/webkit/css/bootstrap.min.css">
    <!-- Bootstrap optional theme -->
    <link rel="stylesheet" href="<%request.getContextPath();%>/webkit/css/bootstrap-theme.min.css">
    <!--Main Stylesheet-->
    <link rel="stylesheet" href="<%request.getContextPath();%>/webkit/css/style.css">
    <!-- JqueryJavaScript -->
    <script src="<%request.getContextPath();%>/webkit/js/jquery-3.2.1.min.js"></script>
    <title>Login</title>
</head>
<body>
<div class="fix-top"></div>
<div class="container ">
    <div class="row text-center">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 table-bordered form-wrapper">
            <form class="form-inline" action="/logon" method="post">
                <div class="form-group row">
                    <label  class="col-sm-4" for="name">Login</label>
                    <input  class="col-sm-8 form-control mb-2 mr-sm-2 mb-sm-0" type="text" name="name" id="name">
                </div>
                <div class="form-group row">
                    <label  class="col-sm-4" for="password">Password</label>
                    <input  class="col-sm-8 form-control mb-2 mr-sm-2 mb-sm-0" id="password" type="password" name="password">
                </div>
                <div class="form-group row">
                    <button class="col-sm-12 btn btn-primary" type="submit">Login</button>
                </div>
            </form>
        </div>
        <div class="col-lg-2"></div>
    </div>
    <div class="row text-center">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 table-bordered form-wrapper">
            <p><a href="<%request.getContextPath();%>/webkit/register.jsp">Register</a></p>
        </div>
        <div class="col-lg-2"></div>
    </div>
</div></body>
<!-- Bootstrap JavaScript -->
<script src="<%request.getContextPath();%>/webkit/js/bootstrap.min.js"></script>
<!-- Main JavaScript -->
<script src="<%request.getContextPath();%>/webkit/js/main.js"></script>
</html>