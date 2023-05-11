<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


$inc_par = '';
$namecode_par = 'BOLT';
$xref_par = '';

include_once 'db_connect.php';
$conn = new mysqli(HOST, USER, PASSWORD, DATABASE);
if ($conn->connect_error) {
    trigger_error('Database connection failed: '  . $conn->connect_error, E_USER_ERROR);
}

if($inc_par != '')
{
    $totalrowCount = 1;
    
    $sql = 'SELECT`namecode`.`INC`, `namecode`.`STANDARDNAME`, `namecode`.`TERMINOLOGY`, `namecode`.`SHORT` FROM namecode where namecode.INC = "'.$inc_par.'"';
}

if($inc_par == '')
{
    if($xref_par == 'true')
    {
        $sql = 'SELECT count(*) FROM  `namecode`
        left outer JOIN `vw_incxrefu` 
                ON (`namecode`.`INC` = `vw_incxrefu`.`INC`)
        WHERE (`vw_incxrefu`.`XREF_NAME` LIKE "%'.$namecode_par.'%")';
	
        $rs=$conn->query($sql);
        $row = $rs->fetch_row();
        
        $totalrowCount = $row[0];

        $rs->free();

    	$sql = 'SELECT distinct
                 `namecode`.`INC`, `namecode`.`STANDARDNAME`, `namecode`.`TERMINOLOGY`, `namecode`.`SHORT` 
            FROM
                `namecode`
                 left outer JOIN `vw_incxrefu` 
                    ON (`namecode`.`INC` = `vw_incxrefu`.`INC`)
            WHERE (`vw_incxrefu`.`XREF_NAME` LIKE "%'.$namecode_par.'%");';
    }
    else if($xref_par == 'false')
    {
        $sql = 'SELECT count(*) FROM namecode where namecode.STANDARDNAME = "" ';
    
        $rs=$conn->query($sql);
        $row = $rs->fetch_row();
        
        $totalrowCount = $row[0];

        $rs->free();

        $sql = 'SELECT `namecode`.`INC`, `namecode`.`STANDARDNAME`, `namecode`.`TERMINOLOGY`, `namecode`.`SHORT` FROM namecode where namecode.STANDARDNAME = "" ;';
    }

    else if($namecode_par != '')
    {
        
        $sql = 'SELECT count(*) FROM namecode where namecode.STANDARDNAME like "%'.$namecode_par.'%"';
    
        $rs=$conn->query($sql);
        $row = $rs->fetch_row();
        
        $totalrowCount = $row[0];

        $rs->free();

        $sql = 'SELECT  `namecode`.`INC`, `namecode`.`STANDARDNAME`, `namecode`.`TERMINOLOGY`, `namecode`.`SHORT` FROM namecode where namecode.STANDARDNAME like "%'.$namecode_par.'%" ;';
    }
    
}


$data = '{"@odata.count": '.$totalrowCount.', "value":[';

$rs=$conn->query($sql);

$rs->data_seek(0);
while($row = $rs->fetch_row()){
    $data = $data . '{"inc":"' . $row[0] . '", "standardname":"' . $row[1] . '", "terminology":"' . $row[2] . '", "shortnmae":"' . $row[3] . '"},';
}
$rs->free();

$data = substr($data, 0, -1);

$data = $data . ']}';

echo $data;

$conn->close();

?>