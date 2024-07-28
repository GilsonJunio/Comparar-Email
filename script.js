let emails_json = 
	[{
		"gilson":"gilsonjunio@email.com",
		"joao":"joao@email.com",
		"gabriela":"gabriela@email.com",
		"anthony":"anthony@email.com",
		"lara":"lara@email.com",
		"jonathan":"jonathan@email.com",
		"alessandra":"alessandra@email.com",
		"pedro":"pedro@email.com",
		"alan":"alan@email.com",
		"anderson":"anderson@email.com",
		"mauricio":"mauricio@email.com",
		"mario":"mario@email.com",
		"vitor":"vitor@email.com",
		"paulo":"paulo@email.com",
		"marcio":"marcio@email.com",
		"maria":"maria@email.com",
		"ana":"ana@email.com",
		"catarina":"catarina@email.com",
		"wesley":"wesley@email.com",
		"wagner":"wagner@email.com"
		}
	]
	console.log(emails_json)
	console.log(emails_json[0])

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