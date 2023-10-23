function decimalToBinary(num) {
  let binarynum= new Array(32);
	let i=0;
	while(num>0){ //7>0
		binarynum[i]=num%2; //[1, 1, 1], 3%2
		num=Math.floor(num/2); //7=3/2=1
		i++;
	}
  for(let j= i-1; j>=0; j--)
	  {
		  console.log(binarynum[j]);
	  }
}

window.decimalToBinary = decimalToBinary;
