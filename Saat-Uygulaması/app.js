var userName = prompt("Adınız Nedir?","İsminizi Buraya Giriniz")
if(userName == "İsminizi Buraya Giriniz"){
    alert("Lütfen Giriş Yapınız..") 
}else if((userName == "") ){
    alert("Hatalı Giriş Yaptınız!") 
}else if(userName == null) {
    alert("Giriş yapmaktan vazgeçtiniz!")
}else if( (userName != "") && (userName != null)) {
    document.getElementById("myName").innerHTML = userName;  
} 
//saat ve tarih
function showTime() {
	let clockEl = document.getElementById('myClock') 

   	setInterval(() => {
   		let dateObj = new Date()
   		let time = dateObj.toLocaleTimeString('tr-TR')
   		let options = { weekday: 'long' }
   		let date = dateObj.toLocaleDateString('tr-TR', options)
   		clockEl.innerHTML = `${time} ${date}`
   }, 999)
}
(function() {
   let clockEl = document.getElementById('myClock') 
   clockEl.addEventListener('onload', clockEl.onload())
})();
