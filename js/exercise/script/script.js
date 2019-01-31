var a=10;
var b=20;
var c;
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
c=a+b;
demo.innerHTML = 'Дано:<br>a = ' + a + ';<br>b = ' + b + ';<br>c;<br>c = ' + a + '(a) + ' + b + '(b) = ' + c + ';<br>Відповідь: с = ' + c + ';'