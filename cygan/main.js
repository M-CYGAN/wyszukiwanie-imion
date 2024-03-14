const searchNameBtn = document.querySelector('#search')
const searchEndsWithBtn = document.querySelector('#ends')
const display = document.querySelector('#display')
const userNameVal = document.querySelector('#userName')
let usersArr = [
	{
		userID: '36b8f84d-df4e-ad32-b662-bcde71a8764f',
		userName: 'Jasia',
		userCity: 'Gliwice',
		userAge: 16,	
	},
	{
		userID: '36b8f84d-df4e-4d49-b662-bcde71a87623',
		userName: 'Michał',
		userCity: 'Zabrze',
		userAge: 19,
	},
	{
		userID: '36b8f84d-df4e-s3ae-b662-bcde71a876aa',
		userName: 'Olga',
		userCity: 'Knurów',
		userAge: 23,
	},
	{
		userID: '36b8f84d-df4e-a43w-b662-bcde71a876b3',
		userName: 'Marek',
		userCity: 'Gliwice',
		userAge: 17,
	},
	{
		userID: '36b8f84d-df4e-zfdr-b662-bcde71a876a2',
		userName: 'Józefa',
		userCity: 'Pyskowice',
		userAge: 42,
	},
	{
		userID: '36b8f84d-df4e-adz3-b662-bcde71a87622',
		userName: 'Janek',
		userCity: 'Gliwice',
		userAge: 30,
	},
	{
		userID: '36b8f84d-df4e-bfr3-b662-bcde71a87635',
		userName: 'Hania',
		userCity: 'Toszek',
		userAge: 12,
	},
	{
		userID: '36b8f84d-df4e-n2er-b662-bcde71a87644',
		userName: 'Benek',
		userCity: 'Warszawa',
		userAge: 45,
	},
    {
		userID: '36b8f84d-df4e-ke4q-b662-bcde71a876fa',
		userName: 'Gosia',
		userCity: 'Gliwice',
		userAge: 30,
	},
];

function displayUsers(arr) {
    display.innerHTML = '';
    arr.forEach((elem) => {
        const p = document.createElement('p');
        p.innerText = `${elem.userName} pochodzi z ${elem.userCity}`;
        display.append(p);
    });
}


displayUsers(usersArr);

searchNameBtn.addEventListener('click', function () {
    display.innerHTML = '';
    const userNameVal = userName.value;

    displayUsers(usersArr.filter((user) => user.userName === userNameVal))
    
})

searchEndsWithBtn.addEventListener('click', function () {
    display.innerHTML = '';
    const userNameVal = userName.value;

    displayUsers(usersArr.filter((user) => user.userName === userNameVal))
    
})