
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="style.css">  <!-- link to css -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- view device size -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="javascript_file.js"> </script>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style type="text/css"></style> <!-- icons -->


</head>
<body>


<!--home-------------------------------------------------------------------------------------------->
<header>


    <nav class="home">
        <ul>
            <span id="shoppingCart"  >
                <i class="fa fa-shopping-cart" aria-hidden="true" >
                    <div class="toast"></div>
                     <span class="popup" onmouseover= showTheCart()>
                     </span>

                        <div class="toast-header" onchange= showPrice();>
                            <a>Shopping Bag </a>
                            <form id="form" action="order.php" method="post" ><input type="submit" id="to-order" value="order"/>
                            </form>
                                <a id="priceCart"></a><br> <div id="theProduct"></div><br></div>
                         <div class="toast-body">


                      </div>
                    </div>
                </i></span>
            <?php if(isset($load) && $load){ ?>
            <li><button><a href="main.php">Back to store</a></button></li>
            <?php } else{ ?>
                <li><button><a href="#Home">Home</a></button></li>
                <li><button> <a href="#About">About</a></button></li>
                <li><button><a href="#Contact">Contact</a></button></li>
            <?php } ?>

        </ul>

    </nav>

</header>

<section class="banner">
    <div class="banner-inner">
        <br><br> <br> <br>
        <br>

        <div class="headline"> <h2>MY JEWELRY BOX </h2></div>
        <h6>EST 2022 </h6>
        <br> <br>  <br>
        <br> <br> <br>  <br><br>  <br><br>  <br>
        <h3>♡ SHOP NOW! ♡</h3>
        <br> <br> <br>  <br>
        <br> <br>  <br>
        <br> <br> <br>  <br>

    </div>


</section>

<h6 id="Home"><div></div> </h6>


<br><br><br><br><br>
<br><br><br><br><br>
<br><br><br><br><br>


<span style="color: #4b4949; font-size: 30px; font-family: 'IBM Plex Sans', sans-serif "> DISCOVOR
    NEW PRODUCTS </span>
