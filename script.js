/*
Chame a função comparar_Email('email') no console
Coloque o email para comparar com o banco de dados	

*/

function comparar_Email(email){
	let procurar_EmailIgual = emails_json.find(email_1 => emails_json[0] === email);

	if(procurar_EmailIgual){
		console.log('O email repassado já existe')
		return true
	}
	else{
		console.log('O email repassado não existe')
		return false
	}
}
