function getTwoDigits(num){
	var res = "";
	if(num < 10){
		res = "0" + num;
	}else{
		res = num;
	}
	return res;
}
