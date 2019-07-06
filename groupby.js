let a = 1
console.log(a)

let myArray = [
	{ name: 'red' },
	{ name: 'blue' },
	{ name: 'green' },
	{ name: 'black' },
	{ name: 'gold' },
	{ name: 'purple' }
]

let mykeyArray = myArray.map((item, index) => {
	return { title: item.name.charAt(0), data: item }
})


console.log(mykeyArray)



// let mykeyArray = mykeyArray.map((item, index) => {
// 	return { title: item.data.name.charAt(0), data: item.data }
// })

// console.log(myNewArray)



// var titles = {}
// for (var i = 0; i < mykeyArray.length; i++) {
//     var titleName = mykeyArray[i].title
    
// 	if (!titles[titleName]) {
//         titles[titleName] = []
        
//     }
    
// 	titles[titleName].push(mykeyArray[i].data)
// }

// console.log(titles)





// data = [{id:1, name:'BMW'}, {id:2, name:'AN'}, {id:3, name:'BMW'}, {id:1, name:'NNN'}]
// key = 'id'//try by id or name
// let listed = data.reduce((total, current)=>{
//     total[current[key]] && total[current[key]].length != 0 ? total[current[key]].push(current) : total[current[key]] = new Array(current)
//     return total;
// }, {})

// console.log(listed)





let mainkey = "title"

let objectedList = mykeyArray.reduce((total, current)=>{
    total[current[mainkey]] && total[current[mainkey]].length != 0 ? total[current[mainkey]].push(current) : total[current[mainkey]] = new Array(current)
    return total;
},{})

console.log(objectedList)





// var string1 = "";
// var object1 = {a: [{title:'aa'}], b: [{title:'bb'}], c: [{title:'cc'}]};

// for (var title in object1) {
// //   string1 += object1[title];
// console.log(title)
// console.log(object1[title])
// }



mykeyArray = []
for (var firstChar in objectedList) {
	mykeyArray.push({ title: firstChar, data: objectedList[firstChar].map(item=>{return item.data}) })
}

// for(let )


console.log(mykeyArray)



/// unused part ///

// // expected output: "123"


// 	// var cars = [
// 			// 		{ title: 'audi', data: { givenName: 'audi karim' } },
// 			// 		{ title: 'audi', data: { givenName: 'audi qasem' } },
// 			// 		{ title: 'ford', data: { givenName: 'fordino' } },
// 			// 		{ title: 'ford', data: { givenName: 'fordini' } },
// 			// 		{ title: 'kia', data: { givenName: 'kiomarth' } }
// 			// 	],
// 			// 	result = cars.reduce(function(result, item) {
// 			// 		result[item.title] = result[item.title] || []
// 			// 		result[item.title].push(item)
// 			// 		return result
// 			// 	},{})

// 			// console.warn(result)

// 			var groupBy = function(xs, key) {
// 				return xs.reduce(function(rv, x) {
// 					;(rv[x[key]] = rv[x[key]] || []).push(x)
// 					return rv
// 				}, {})
// 			}

			

// 			let bbb = groupBy(['one', 'two', 'three','four'], 'length')

// console.warn(bbb)
// 			data = [
// 				{ id: 1, name: 'BMW' },
// 				{ id: 2, name: 'AN' },
// 				{ id: 3, name: 'BMW' },
// 				{ id: 1, name: 'NNN' }
// 			]
// 			key = 'id' //try by id or name
// 			let aaa = data.reduce((previous, current) => {
// 				previous[current[key]] && previous[current[key]].length != 0
// 					? previous[current[key]].push(current)
// 					: (previous[current[key]] = new Array(current))
// 				return previous
// 			}, {})

// 			console.warn(aaa)



// 			let finalList = searchResult.reduce((total, current, index) => {
// 				let title = current.givenName.trim().charAt(0)
// 				return (total = [...total, { title }])
// 				// if (!total.hasOwnProperty(title)) {
// 				// 	total[title] = []
// 				// }
// 				// total[title].push(current.givenName)
// 				// return (total = [
// 				// 	...total,
// 				// 	{
// 				// 		title: current.givenName.trim().charAt(0),
// 				// 		data: [current]
// 				// 	}
// 				// ])
// 			}, [])




