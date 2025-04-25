let arr = [];
let num_arr = [];
let bool = [true, false];
let select = document.getElementById("select");
let results = document.getElementById("results");
let input = document.getElementById("input");
let input2 = document.getElementById("input2");
[select,input2].forEach((element)=> {
	element.style.display= "none";
})


let obj, obj_len, key=[], value=[];
input.addEventListener("change", function(e){
	try{
		select.style.display = "flex";
		obj = JSON.parse(e.target.value)
		console.log(typeof(obj));
		console.log(Object.keys(obj).length);
		obj_len = Object.keys(obj).length;
		key = Object.keys(obj);
		value = Object.values(obj);
		console.log(key, value);
		for (let i = 1; i<=100; i++){
			console.log(fun(obj_len, key, value, i, false))
		}

	} catch(err){
		console.error(err)
	}
})


function ascii (initialization, condition, array){
	array.length = 0;
	for (let i = initialization; i <= condition; i++){
		array.push(String.fromCharCode(i))
	}
}

//for (let i = 1; i<=100; i++){
//	console.log(fun(obj_len, "key", "value"))
//}

function b(arr,number){
	ascii(65, 122, arr);
	let c =[];
	for (let i = 0; i < number; i++){
		c.push(arr[Math.floor(Math.random()*58)]);
        }
	return c.join('');
}


function numbers(num){
	        ascii(48, 57, num_arr);
	        let store_numbers = [];
	        for (let i = 0; i < num; i++){
			store_numbers.push(num_arr[Math.floor(Math.random()*10)]);
		}
	        return Number(store_numbers.join(''));
}

function bool_(){
	return bool[Math.floor(Math.random()*2)];
}

function gen_arr(number_value, value){
	//console.log(value[0].length)
	if (number_value == 0) return [];
	else {
		let inner_arr =[];
		console.log(typeof(value))
		for (let key in value){
			if (Array.isArray(value[key])) {
			for (let i = 0; i <value[key].length; i++){
				inner_arr[key] = inner_arr.push(b(arr, 10));
			}
		}
		}

			return inner_arr;
	}
}
function gen_obj(){
	return {rgwg: 1};
}

function isPlainObject(obj){
	return(
		typeof obj === 'object' && obj !== null && !Array.isArray(obj)
	)
}


function fun (obj_len, key, value, i, time){
	let gen = {};
		for (let i = 0; i < key.length; i++){
			const key_ = key[i];
			const value_ =  value[i];
			if (Array.isArray(value_)){
				if (value_.length === 0)gen[key_] = gen_arr(0);
				else gen[key_] = gen_arr(1, value);
			}else if (isPlainObject(value_)){
				gen[key_] = gen_obj();
			}
			else {
				const value_type = typeof value_;
		switch (value_type){
			case "string":
				gen[key_]= b(arr, 10);
				break;
			case "number":
				gen[key_]= numbers(2);
				break;
			case "boolean":
				gen[key_]=bool_();
				break;
			case Array.isArray(value_type):
				gen[key_]= gen_arr();
				break;
			default:
				gen[key_]= null
		}
			}
		}
	gen["Id"] =  i;
	if (time) gen["Time"] = Date.now();

	return gen;
}

















































































function numbers(num){
	ascii(48, 57, num_arr);
	let store_numbers = [];
	for (let i = 0; i < num; i++){
		store_numbers.push(num_arr[Math.floor(Math.random()*10)]);
	}
	return Number(store_numbers.join(''));
}
//------------------------------------
function gender_(){
	return gender[Math.floor(Math.random()*2)]; 
}
//------------------------------------
/*function like(i){
	return {
		"like":numbers(4),
		"Id":i
	}
}
function todo(i){
	return {
		"Task":b(arr, 25),
		"Date": Date.now(),
		"Is_done": Is(),
		"Id":i,
	}
}

function Book(i){
	let number_value = numbers(2);
	return {
		"Title":b(arr,15),
		"Author":b(arr, 15),
		"Content":b(arr, 1000),
		"Number_of_page":(number_value <= 18) ? 25 : number_value, 
		"Id":i
	}
}

function Profile(i){
	let number_value = numbers(2);
	return {
		"User_name":b(arr, 10),
		"Profile_image": 'User_image',
		"Role": b(arr, 14),
		"age":(number_value <= 18) ? 25 : number_value,
		"gender":gender_(),
		"Is_Employer":Is(),
		"Id":i
	}
}

function Cart(i){
	let number_value = numbers(1), price_value = numbers(3);
	return {
		"Item_name":b(arr, 10),
		"Item_image": "Item_image",
		"Price": (price_value === 0) ? 14 : price_value,
		"Quantity": (number_value === 0) ? 5 : number_value,
		"Id":i
	}
}

function Article(i){
	return {
		"Article_Name": b(arr, 15),
		"Content": b(arr, 200),
		"Article_by": b(arr, 20),
		"Date": Date.now(),
		"Id":i
	}
}

function Blog(i){
	return{
		"Blog_title": b(arr, 20),
		"Content": b(arr, 200),
		"Blog_by":b(arr, 20),
		"Date":Date.now(),
		"Id":i
	}
}

function Post(i){
	return {
		"User_name":b(arr, 10),
		"User_image": "User_image",
		"User_id": b(arr, 10),
		"Post_img":["https://thumbs.dreamstime.com/b/amazing-vector-icon-img-file-editable-design-268852424.jpg"],
		"Post_video":["29700973 2480792-hd_1920_1080_24fps.mp4", "29700973 2480792-hd_1920_1080_24fps.mp4"],
		"Post_Content": b(arr, 50),
		"Post_like": numbers(4),
		"Post_comment":{
			"User_name": b(arr, 10),
                        "User_id": b(arr, 10),
			"Time": Date.now(),
                        "like":numbers(4),
                        "Content": b(arr, 100),
		},
		"Id":i
	}
}

function comments(i){
	return {
		"User_name": b(arr, 10),
		"User_id": b(arr, 10),
		"Time": Date.now(),
		"like": numbers(4),
		"Content": b(arr, 100),
		"Id":i,
	}
}*/
