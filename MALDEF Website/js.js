/*-------------------------- navbar --------------------------*/

document.querySelector('#mune').onclick = () => {
document.querySelector('#mune').classList.toggle('fa-times');
document.querySelector('.links').classList.toggle('active');}

document.querySelectorAll('.links a').forEach(box => {
	box.onclick = () => {
		document.querySelector('#mune').classList.toggle('fa-times');
        document.querySelector('.links').classList.toggle('active');}})

/*-------------------------- landing --------------------------*/

document.querySelector('.landing .Singin').onclick = () => {
	document.querySelector('.Sing').style.display = 'block';}
	
document.querySelector('.Sing span').onclick = () => {
	document.querySelector('.Sing').style.display = 'none';}

document.querySelector('.Sing button').onclick = () => {
	document.querySelector('.Sing').style.display = 'none';}

/*-------------------------- Prices --------------------------*/
	
document.querySelectorAll('.Prices .cart a').forEach(box => {
	box.onclick = () => {
		document.querySelector('.Prices .vs').style.display = 'block';}})

document.querySelector('.Prices .vs .x').onclick = () => {
	document.querySelector('.Prices .vs').style.display = 'none';}

document.querySelector('.Prices .vs form .btn').onclick = () => {
	document.querySelector('.Prices .vs').style.display = 'none';}

/*-------------------------- photo --------------------------*/

document.querySelectorAll('.photo .boxs .box img').forEach(box => {
	box.onclick = () => {
		document.querySelector('.photo .show').style.display = 'block';
		document.querySelector('.photo .show img').src = box.getAttribute('src')}})
	
document.querySelector('.photo .show span').onclick = () => {
	document.querySelector('.photo .show').style.display = 'none';}

