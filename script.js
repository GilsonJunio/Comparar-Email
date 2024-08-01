/*
A função buscar_Dados() requisita um arquivo json no meu repositório;
Após os devidos tratamentos, os dados JSON são atribuídos à variável usuarios;
A função buscar_Dados() retorna a variável usuarios.

Quando atribuir buscar_Dados() à uma variável "teste", ela retornará uma promise com dois protótipos: "<status>" e "<value>";
O protótipo value conterá um objeto com um array de múltiplos objetos contendo dados de  usuários em formato JSON.

Para acessar o array retornado pelo protótipo, é necessário aplicar o método then() na variável "teste"; 
Este método acessará os dados quando o status do retorno for fulfilled, nesse caso, o protótipo "<status>" está fulfilled;
Assim, uma nova varíavel que receba 'teste.then()' será capaz de acessar o array.

O método ".then" tem sintaxe: ".then(parametro => {})", assim o array de teste se tornará disponível através de "parametro";
aplique ".then(parametro => {console.log(parametro)})" para averiguar o array no console.

*/


let email_Repassado = "joao@exemplaaaaao.com"

async function buscar_Dados(){
	//busque seus usuarios abaixo
	const requisicao = await fetch('https://raw.githubusercontent.com/GilsonJunio/Usuarios-JSON/main/usuarios.json')
		//console.log(requisicao)
	const tratar = await requisicao.json()
		//console.log(tratar)

	usuarios = tratar.usuarios
		//console.log(usuarios)

	return usuarios
}
function verificar_Usuarios(usuarios){
	//criar usuários
	let dados = buscar_Dados()
	usuarios = dados.then((usuarios) => {			
			console.log(usuarios)
			let procurar_Email_Igual = usuarios.find(usuarios => {
				console.log(usuarios.email === email_Repassado);

				let existe_Email_Igual = usuarios.email === email_Repassado;
					console.log(existe_Email_Igual)

				if(existe_Email_Igual === true){
					alert('O Email já existe!')
					return true
				}
				alert('O Email não existe!')
				return false
		})	
	})

}
if(verificar_Usuarios() === false){
	alert('taaaaaaaa')
}

/*
Chame a função comparar_Email('email') no console
Coloque o email para comparar com o banco de dados	
*/