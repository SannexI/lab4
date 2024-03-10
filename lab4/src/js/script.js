function updateClock(){
	const deg = 6;
	let now = new Date();
	let hour = Format(now.getHours());
	let min = Format(now.getMinutes());
	let sec = Format(now.getSeconds());
	let time = document.getElementById('clock').innerHTML = hour + ":" + min + ":" + sec;
}

function FixedDay()
{
	let now = new Date();
	let today = Format(now.getDate());
	let month = now.getMonth();
	let monthDays = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let monthName = monthDays[month];
	console.log(monthName);
	let year = now.getFullYear();
	let Week = now.getDay()
	let DaysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let WeekName = DaysWeek[Week];
	console.log(month);
	let day = document.getElementById('day').innerHTML = WeekName + ', ' + today + ' ' + monthName + ' ' + year;
	console.log(day);
}

function Format(time1){
	if(time1 < 10){
		return '0' + time1;
	}
	else{
		return time1;
	}
}

setInterval(updateClock);
setTimeout(FixedDay);

function movingArrow(){
	const d = new Date();
	let hours = d.getHours();
    let mins = d.getMinutes();
    let secynds = d.getSeconds();
    hr_rotation = 30 * hours + mins / 2;
    mn_rotation = 6 * mins;
    sc_rotation = 6 * secynds;
	hr.style.transform = `rotateZ(${hr_rotation}deg)`;
    mn.style.transform = `rotateZ(${mn_rotation}deg)`;
    sc.style.transform = `rotateZ(${sc_rotation}deg)`;
}
setInterval(movingArrow);


function changeBackgroundImage() {
    const images = ["url(fon.jpg)", "url(room1.jpg)", "url(fon1.jpg)", "url(space.jpg)"];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = randomImage;
}

setInterval(changeBackgroundImage, 20000);

function showMessage() {
    var message = document.getElementById("message");
    if (message) {
        message.innerText = "This is Clock!";
        message.style.display = "block";
    
        setTimeout(function() {
            message.style.display = "none";
        }, 4000); // Скрыть сообщение через 5 секунд
    } else {
        console.error("Элемент id = message - не найден");
    }
}

setInterval(showMessage, 60000);