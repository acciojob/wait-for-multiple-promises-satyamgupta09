let prom1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		return resolve({name:'Promise1', time:1000});
	},1000);
});

let prom2=new Promise((resolve, reject)=>{
	setTimeout(()=>{
		return resolve({name:'Promise2', time:500});
	},2000);
});

let prom3=new Promise((resolve, reject)=>{
	setTimeout(()=>{
		return resolve({name:'Promise3', time:700});
	},3000);
});

document.getElementById('output').innerHTML += `
            <tr id="loading">
                <td colspan=2>Loading...</td>
            </tr>
          `;

Promise.all([prom1, prom2, prom3]).then((res)=>{
	document.getElementById('output').innerHTML=``;
	res.forEach((data)=>{
		document.getElementById('output').innerHTML+=`
		  <tr>
		    <td>${data.name}</td>
			<td>${data.time}</td>
		  </tr>
		`;
	});

	let totalTime = res.reduce((sum, data)=>sum + data.time,0)/1000;

    document.getElementById('output').innerHTML+=`
		  <tr>
		    <td>Total Time</td>
			<td>${totalTime.toFixed(3)}</td>
		  </tr>
		`;
});
