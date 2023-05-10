<?php
function getData()
{
    //connection to the database
    $dbhandle = mysqli_connect("localhost", "user_app", "tentakel123", "invomiro_kai");
    $selected = mysqli_select_db($dbhandle, "partmaster");
    //execute the SQL query and return records
    $result = mysqli_query($dbhandle, 
        "SELECT
            partmaster.ITEMNBR, 
            partmaster.SHORTDESC, 
            partmaster.LONGDESC, 
            partmaster.SOURCE1, 
            partmaster.SOURCE2, 
            partrefnbr.REFNBR
        FROM
            partmaster
            INNER JOIN
            partrefnbr
            ON 
		partmaster.ITEMNBR = partrefnbr.ITEMNBR");
    //fetch the data from the database 
    $emparray = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $emparray[] = $row;
    }
    echo json_encode($emparray);
}
if (function_exists($_GET['action'])) {
    $_GET['action']();
}
