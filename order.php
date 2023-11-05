
 <?php
		$_p=array(json_decode($_POST['storage_product'],true));
		//print_r($_p);
        $load= true;

 ?>

 <?php include ('./header.php');?>
<section>
    <h2>Shopping Bag:</h2>
    <table class="table">
        <tr><th>Product</th><th>Price</th><th>Count</th><th>Total</th></tr>

        <?php foreach($_p[0] as $_item=>$value){
          //  $a=+$_item['price'];
        //    $b=+$_item['inCart'];
       //  $total = $a*$b;
         ?><tr><td>
                <?php echo $value['name'] ?></td><td>
                <?php echo $value['price'] ?>$ </td><td>
                <?php echo $value['inCart'] ?></td><td>
                <?php echo $value['price']*$value['inCart'] ?>$</td></tr>
        <?php } ?>

        <tr><th></th><th></th><th></th><th></th></tr>
    </table>


    <?php include ('./footer.php');?>









