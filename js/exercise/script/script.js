var a=10;
var b=20;
function exercise(varC, logC) {
	console.log('Дано:');
	console.log('a =',a,';');
	console.log('b =',b,';');
	console.log('c;')
	console.log(logC);
	console.log('Відповідь: с =',c,';')
}
exercise(c=a+b, 'c = '+a+'(a) + '+b+'(b) = '+c+';');
exercise(c=a-b, 'c = '+a+'(a) - '+b+'(b) = '+c+';');
exercise(c=a*b, 'c = '+a+'(a) * '+b+'(b) = '+c+';');
exercise(c=a/b, 'c = '+a+'(a) / '+b+'(b) = '+c+';');
demo.innerHTML = 'Дано:<br>a = 10 ;<br>b = 20 ;<br>c;<br>c = 10(a) + 20(b) = 30;<br>Відповідь: с = 30 ;'