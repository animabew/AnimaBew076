window.onload = loginLoad;
function loginLoad()
{ 
	const loGin = document.getElementById("myLogin")
	loGin.onsubmit = checkLogin;
}

function checkLogin()
{
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var user = document.getElementById("username").value;
	console.log(user.value);
	var idpassword = document.getElementById("password").value;
	console.log(idpassword.value);
	if(user===firstName && idpassword===lastName)
	{
		alert("Success");
	}
	else if(user!=firstName || idpassword!=lastName)
	{
		alert("username or password not correct");
		return false
	}
}

const sendURL = window.location.search;
console.log(sendURL);

const urlPara = new URLSearchParams(sendURL);
const firstName = urlPara.get('username')
console.log(firstName);

const lastName = urlPara.get('password')
console.log(lastName);
			