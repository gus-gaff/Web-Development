var a;
function pass()
{
	
if (a==1)
	
{
document.getElementById('password1').type='password';
document.getElementById('pass-icon1').src='imagem/password-hide.png';
document.getElementById('password2').type='password';
document.getElementById('pass-icon2').src='imagem/password-hide.png';
a=0;
}

else

{
document.getElementById('password1').type='text';
document.getElementById('pass-icon1').src='imagem/password-show.png';
document.getElementById('password2').type='text';
document.getElementById('pass-icon2').src='imagem/password-show.png';
a=1;
}

}