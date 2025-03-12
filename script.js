let prom1 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve({data:1,time:500});
	},1000);
})

let prom2 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve({data:2,time:1000});
	},1000);
})

let prom3 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve({data:3, time:1000});
	},2000);
})

document.getElementById("output").innerHTML='<tr id="loading"><td colspane="2">Loading...</td></tr>';


Promise.all([prom1, prom2, prom3]).then((res)=>{
	document.getElementById("output").innerHTML='';
	

	res.forEach((item)=>{
		document.getElementById("output").innerHTML+=`
		<tr>
		 <td>Promise ${item.data}</td>
		 <td>${item.time/1000}</td>
		</tr>
		`
	});

	let total=0;
	res.forEach((item)=>total+=item.time)

	document.getElementById("output").innerHTML+=`
		<tr>
		 <td>Total</td>
		 <td>${total.toFixed(3)/1000}</td>
		</tr>
		`
})