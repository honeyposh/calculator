function display(value){
	document.getElementById('answer').innerHTML+=value
}
function clearScreen(){
	document.getElementById('answer').innerHTML=" "
	console.log('ba')
}
function equal(){
	let p=document.getElementById('answer').innerHTML
	let q=eval(p)
	document.getElementById('answer').innerHTML=q
}