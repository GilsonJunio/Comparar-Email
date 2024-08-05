let email_Repassado = document.getElementsByClassName('email')[0].value
let botao_entrar = document.getElementsByClassName('botao')[0]

async function buscar_Dados(){
	//busque seus usuarios abaixo
	const requisicao = await fetch('https://raw.githubusercontent.com/GilsonJunio/Usuarios-JSON/main/usuarios.json')
	const tratar = await requisicao.json()
	let usuarios = tratar.usuarios
	return usuarios
}

function verificar_Usuarios(existe_Email_Igual){
	let dados = buscar_Dados()
	let usuarios = dados.then((usuarios) => {			
			let procurar_Email_Igual = usuarios.find(usuarios => {
			let existe_Email_Igual = usuarios.email === email_Repassado;
			return existe_Email_Igual
		}) 	
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
		}
	})
	return usuarios
}