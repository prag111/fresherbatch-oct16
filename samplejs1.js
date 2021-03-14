



<html>

	<head>

	<title>Event!!!</title>

	<script type="text/javascript">

	function trigger()

	{

	document.getElementById("hover").addEventListener("mouseover", popup);

	function popup()

	{

	alert("Welcome to my  newly created WebPage!!!");

	}

	}

	</script>

	<style>

	p

	{

	     font-size:30px;

	     position: fixed;

	     left: 350px;

	     top: 300px;

	}

	</style>

	</head>

	<body  onload="trigger();">

	<p id="hover">Welcome!!!</p>

	</body>

	</html>