<?php
    session_start();
	if(!isset($_SESSION['login_state'])){	
		$_SESSION['login_state'] = false; $_SESSION['username'] = "Anonymous"; $_SESSION['user_basket'] = [];
	}
	//session_destroy();
	class Product{
		public $brands;
		public $name;
		public $price;
		public $rating;
		public $ratingnumber;
		public $itemimg;
		public $productid;
	}
	$servername = "localhost";
	$dbusername = "tester1";
	$dbpassword = 'database_tester_1';
	$dbname = "test";
	if(isset($_POST['loginusername'])){
	    $sqlq = "SELECT * FROM product_page_users WHERE username='".$_POST['loginusername']."'";
	    $conn = new mysqli($servername,$dbusername,$dbpassword, $dbname);
		$qresult = $conn->query($sqlq);
		if( $qresult ){
			while($row = $qresult->fetch_assoc()){
			if($row['userpassword'] == $_POST['loginuserpassword']){
				$_SESSION['login_state'] = true; $_SESSION['username'] = $_POST['loginusername'];
				$datatosend = (object)array('login_state'=>$_SESSION['login_state'], 'user_name'=>$_SESSION['username'],'user_basket'=>$_SESSION['user_basket']);
				header("Content-type: application/json");
				echo json_encode($datatosend);
				//echo "<meta http-equiv='refresh' content='0'>";
			}
		   }
		} 
		else {
			//echo 'false';
		}
		$conn->close();
	   //echo $qresult->fetch_assoc()['username'];
	}
	
	if(isset($_GET['sessionvals'])){
		$datatosend = (object)array('login_state'=>$_SESSION['login_state'], 'user_name'=>$_SESSION['username'],'user_basket'=>$_SESSION['user_basket']);
		header("Content-type: application/json");
		echo json_encode($datatosend);
	}
	if(isset($_POST['addtobasket'])){
		
		if(!isset($_SESSION['user_basket'])){
			$_SESSION['user_basket'] = array();
		}
		else{
			$datatobask = new Product();
			$datatobask = json_decode($_POST['basket']);
			array_push($_SESSION['user_basket'], $datatobask);
			echo 'alright';
		}
	}
	if(isset($_POST['removefrombasket'])){
		//if(($key = array_search()))
		$datatorem = new Product();
	    $datatorem = json_decode($_POST['removeitem']);
		//echo $datatorem; 
		foreach ($_SESSION['user_basket'] as $key=>$val){
			//echo $val->brands;
			if($val == $datatorem){
				unset($_SESSION['user_basket'][$key]);
				$_SESSION['user_basket']=array_values($_SESSION['user_basket']);
				echo $_SESSION['user_basket'];
			}
		}
		//$_SESSION['user_basket'] = array_diff($_SESSION['user_basket'], $_POST['removeitem']);
		//echo $_POST['removeitem']->brands;
	}
	if(isset($_GET['initialitemreq'])){
		$sqlq = "SELECT * FROM product_page_products "; $datarr = array();
	    $conn = new mysqli($servername,$dbusername,$dbpassword, $dbname);
		$qresult = $conn->query($sqlq);
		if( $qresult ){
			while($row = $qresult->fetch_assoc()){
				array_push($datarr, $row);
		   }
		} 
		$dattojson = json_encode($datarr);
		header("Content-type: application/json");
		echo $dattojson;
	}
	if(isset($_GET['qprod'])){
		$brands=''; $pricelow=''; $pricehigh; $qstatus = false; $datarr=array();
		//if(!isset($_SESSION['query'])){
			//$qstatus = true;
		//}
		//else{
			//$qstatus = false;
		//}
		$conn = new mysqli($servername,$dbusername,$dbpassword, $dbname);
		$sqlq = "SELECT * FROM product_page_products ";
		for($x=0; $x<10; $x++){
			if(isset($_GET['brand'.$x]) && isset($_GET['brand'.$x])){
				$brands .= $_GET['brand'.$x];
			}
		}
		if(isset($_GET['prrangelow']) && isset($_GET['prrangehigh'])){
			$pricelow =$_GET['prrangelow']; $pricehigh =$_GET['prrangehigh'];
		}
		if($brands !='' && $brands != null){
			if($qstatus){
				$sqlq.=' AND brand IN ('.$brands.')';
			}
			else{
			    $sqlq.='WHERE brand IN ('.$brands.')';
				$qstatus = true;
			}
		}
		if(($pricelow !='' && $pricelow != null) && ($pricehigh !='' && $pricehigh != null)){
			if($qstatus){
				$sqlq.=' AND price BETWEEN '.$pricelow.' AND '.$pricehigh;
			}
			else{
			    $sqlq.='WHERE price BETWEEN '.$pricelow.' AND '.$pricehigh;
				$qstatus = true;
			}	
		}
		$qresult = $conn->query($sqlq);
		if( $qresult ){
			while($row = $qresult->fetch_assoc()){
				array_push($datarr, $row);
		   }
		} 
		$dattojson = json_encode($datarr);
		header("Content-type: application/json");
		echo $dattojson;
		
	}
?>