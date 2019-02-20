module.exports = function check(str, bracketsConfig) {
	let open = [], close = [], current = [], check = true;

	bracketsConfig.forEach(item=>{
		open.push(item[0]);
		close.push(item[1]);
	})

	let arr = str.split("");
	
	for(let i=0; i<arr.length; i++){
		if(open.includes(arr[i])){
			current.push(arr[i])
			if(current.length>1){
				if((current[current.length-1]==current[current.length-2])&&(open.indexOf(current[current.length-1])==close.indexOf(current[current.length-1]))){
					current.pop();
					current.pop();
				}
			}
		} else if (current.length==0){
			check = false;
		} else {
			topCurrent = current.pop();
			if(!equal(topCurrent,arr[i])){
				check = false;
			}
		}

		function equal(openSymbol, closeSymbol) {
			return open.indexOf(openSymbol) == close.indexOf(closeSymbol);
		}
	}
	if(check&&current.length==0){
		return true;
	} else {
		return false;
	}
}