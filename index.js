const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

let days = document.getElementById('days')
let currentDate = new Date()
let targetDate = new Date('2023-10-26')
let daysPassed = Math.floor((currentDate - targetDate) / (1000 * 60 * 60 * 24))
function checkNumber(num) {
	let fnDaysPassed = num % 10
	if (fnDaysPassed === 1) {
		document.getElementById('days').textContent = `${daysPassed} День Вместе!🥳`
	} else if (fnDaysPassed === 2 || fnDaysPassed === 3 || fnDaysPassed === 4) {
		document.getElementById('days').textContent = `${daysPassed} Дня Вместе!🥳`
	} else {
		document.getElementById('days').textContent = `${daysPassed} Дней Вместе!🥳`
	}
}

checkNumber(daysPassed)
