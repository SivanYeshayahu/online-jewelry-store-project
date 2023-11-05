<section>
    <?php include ('array_item.php');?>
    <div class="wrap">
        <div class="card-group" >
            <?php
            foreach($arrayOfItems as $item => $value) { ?>
                <?php static $i = 1;?>

                <?php if ($i === 4 || $i === 1){

                    echo '<div class="card-group" >';
                }?>
                <div class="card-wrap<?php echo $i ?>">
                    <div class="card">
                        <div class="front card<?php echo $i ?>"></div>
                        <div class="back">
                            <p class="price"><?php echo $value["price"]?>$</p>
                            <br>

                            <div><?php echo $value["name"]?></div>
                            <br>

                            <button class="add-to-cart"> Add to Cart</button><?php $i++;?>

                        </div>
                    </div>
                </div>

                <?php

            }
            ?>




</section>


