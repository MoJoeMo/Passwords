function explode() {
	$("#boom").effect("explode", {pieces: 32}, 700);
}
function carPassword() {
	//get the year entered by the user
	var year = 	$('#year').val();
	//get the color entered by the user
	var color = $('#color').val();
	
	//get the first 2 numbers of the year
	var first2 = year.substring(0, 2);
	
	//generate a string to deliver as password
	var password = first2 + color + first2 + color + 'Hike!';
	
	//set the password in the designated textarea
	$('#car-password').html(password);
}
function chemistry() {
    $('.flipper').toggleClass('flip');
	//get the number entered by the userAgent
	var num = $('#child-num').val();
	
	//get the name entered by the user
	var name = $('#first-name').val().substring(0,2);
	
	//get the year enterd by the user
	var year = $('#birthyear').val();

	//split the year in half
	var first2 = year.substring(0, 2);
	var last2  = year.substring(2, 4);
    var combo = first2 + '.' +last2;
	
	var elementpw = num + name + combo;
	
    $('#a-num').html(num);
    $('#a-name').html(name);
    $('#a-weight').html(combo);
    $('#elementpw').html(elementpw);
    $('#a-num2').html(num);
    $('#a-name2').html(name);
    $('#a-weight2').html(combo);
	
}

function reverse() {
    //get user input of first name and age
    var name = $('#firstname').val();
    var age = $('#age').val();
    //get the length of the user's name
    var length = name.length - 1;
    var str = '';
    //var fragment = '';
    var list = ['!-!-!-!-!-!', '*-*-*-*-*-*', '#-#-#-#-#-#'];
    //var jumble = [];
    //reverse the name
    for(i = length; i >= 0; i--){
        str += name[i];
    }
    name = str;
    var num1 = age.substr(0, 1);
    var num2 = age.substr(1,2);    
    newName = '!*-' + num1 + name + num2 + '-#';
    list.push(newName);
    var arrLength = list.length;
    
    var delay = setInterval(function(){
        if (i < arrLength){
            $('#computed').html(list[i]).delay(250);
            i++;
        }
        else{
            clearInterval(delay);
        }
    }, 800); 
	$('#warning1').delay(2500).fadeIn();
	$('#warning2').delay(2500).fadeIn();
	setTimeout(explode, 7500);
}
    
$(document).ready(function(){
    $('#warning1').hide();
    $('#warning2').hide();
});