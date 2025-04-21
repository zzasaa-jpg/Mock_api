let arr = [];
let num_arr = [];
let is = [true, false];
let gender = ["Female", "Male"];

function ascii (initialization, condition, array){
	for (let i = initialization; i <= condition; i++){
		array.push(String.fromCharCode(i))
	}
}

function a(i) {
	return {
	"Name": b(arr, 10),
	"FullName":b(arr, 10) ,
	"Date": Date.now(),
	"Is": Is(),
	"Id":i
	}
}

for (let i = 1; i<=100; i++){
	//console.log(a(i))
	//console.log(like(i))
	//console.log(todo(i))
	//console.log(Book(i))
	console.table(Profile(i))
	//console.log(Cart(i))
	/*console.log(Article(i))
	console.log(Blog(i))
	console.log(Post(i))*/
}

function b(arr,number){
	ascii(65, 122, arr);
	let c =[];
	for (let i = 0; i < number; i++){
		c.push(arr[Math.floor(Math.random()*58)]);
        }
	return c.join('');
}
//------------------------------------
function Is(){
	return is[Math.floor(Math.random()*2)];
}
//------------------------------------
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
function like(i){
	return {
		"Is_like":Is(),
		"Comments": {
			"User_name": b(arr, 10),
			"User_id": b(arr, 10),
			"Time": Date.now(),
			"Is_like":Is(),
			"Content": b(arr, 100),
		},
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
		"User_image": "Img",
		"User_id": b(arr, 10),
		"Post_img":[],
		"Post_video":[],
		"Post_Content": b(arr, 50),
		"Post_like": Is(),
		"Post_comment":{
			"User_name": b(arr, 10),
                        "User_id": b(arr, 10),                                                  "Time": Date.now(),
                        "Is_like":Is(),
                        "Content": b(arr, 100),
		},
		"Id":i
	}
}
