let email_Repassado = document.getElementsByClassName('email')[0].value
let botao_entrar = document.getElementsByClassName('botao')[0]

async function buscar_Dados(){
	//busque seus usuarios abaixo
	const requisicao = await fetch('https://raw.githubusercontent.com/GilsonJunio/Usuarios-JSON/main/usuarios.json')
		//console.log(requisicao)
	const tratar = await requisicao.json()
		//console.log(tratar)

	let usuarios = tratar.usuarios
		//console.log(usuarios)

	return usuarios
}

function verificar_Usuarios(existe_Email_Igual){
	//criar usuários
	let dados = buscar_Dados()
	let usuarios = dados.then((usuarios) => {			
			console.log(usuarios)
			
			let procurar_Email_Igual = usuarios.find(usuarios => {
//				console.log(usuarios.email === email_Repassado);
				console.log(usuarios)

				let existe_Email_Igual = usuarios.email === email_Repassado;

					console.log(`Verificando se existe email igual à ${email_Repassado} em: ` + JSON.stringify(usuarios))
					console.log(existe_Email_Igual)

					return existe_Email_Igual
		}) 	

		console.log(procurar_Email_Igual)

		if(procurar_Email_Igual){
			alert('Este email já foi cadastrado!')
			procurar_Email_Igual = true
			return procurar_Email_Igual
		}
		else if(procurar_Email_Igual === undefined){
			return false
		}
		else{
			alert('Email cadastrado com sucesso!')
//			window.location.replace('https://google.com')
		}


	})
	console.log(usuarios)
	return usuarios
}
botao_entrar.addEventListener('click', a => {
	let existe_Email_Igual = verificar_Usuarios()
}