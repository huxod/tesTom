<%--
  Created by IntelliJ IDEA.
  User: huber
  Date: 26.07.2017
  Time: 15:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="static javafx.scene.input.KeyCode.S" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="pl">
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
    <title>Register</title>
</head>
<body>
<div class="fix-top"></div>
<div class="container ">
    <div class="row text-center table-bordered form-wrapper">
            <form class="form-inline col-lg-12"  action="/register" onsubmit="return validate()" method="post">
                <div class="form-group row">
                    <label  class="col-sm-6" for="add_name">Login</label>
                    <input  class="col-sm-6 form-control " type="text" name="add_name" id="add_name">
                </div>
                <div class="form-group row">
                    <label  class="col-sm-6 " for="add_password">Password</label>
                    <input  class="col-sm-6 form-control " id="add_password" type="password" name="add_password">
                </div>
                <div class="form-group row">
                    <label  class="col-sm-6" for="add_email">Email</label>
                    <input  class="col-sm-6 form-control" id="add_email" type="email" name="add_email">
                </div>
                <div class="form-group row">
                    <button class="col-sm-12 btn btn-primary" id="add_user" type="submit">Register</button>
                </div>
            </form>
        <div class="col-lg-2"></div>
    </div>
</body>
<!-- Bootstrap JavaScript -->
<script src="<%request.getContextPath();%>/webkit/js/bootstrap.min.js"></script>
<!-- Main JavaScript -->
<script src="<%request.getContextPath();%>/webkit/js/main.js"></script>
</html>