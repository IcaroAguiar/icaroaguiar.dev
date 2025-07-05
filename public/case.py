class Usuario:
    def __init__(self, nome, email, idade):
        self.nome = nome
        self.email = email
        self.idade = idade
    
    def __str__(self):
        return f"Nome: {self.nome} | Email: {self.email} | Idade: {self.idade}"

class SistemaUsuarios:
    def __init__(self):
        # Lista para armazenar os usuários
        self.usuarios = []
    
    def cadastrar_usuario(self):
        print("\n== Cadastro de Usuário ==")
        try:
            nome = input("Digite o nome: ")
            email = input("Digite o email: ")
            idade = int(input("Digite a idade: "))
            
            # Criando e adicionando novo usuário à lista
            novo_usuario = Usuario(nome, email, idade)
            self.usuarios.append(novo_usuario)
            print("Usuário cadastrado com sucesso!")
            
        except ValueError:
            print("Erro: A idade deve ser um número inteiro!")
    
    def listar_usuarios(self):
        print("\n== Lista de Usuários ==")
        if not self.usuarios:
            print("Nenhum usuário cadastrado!")
            return
        
        for usuario in self.usuarios:
            print(usuario)
    
    def buscar_usuario(self):
        print("\n== Busca de Usuário ==")
        nome_busca = input("Digite o nome para busca: ")
        
        usuarios_encontrados = [
            usuario for usuario in self.usuarios 
            if nome_busca.lower() in usuario.nome.lower()
        ]
        
        if usuarios_encontrados:
            print("\nUsuários encontrados:")
            for usuario in usuarios_encontrados:
                print(usuario)
        else:
            print("Nenhum usuário encontrado!")
    
    def menu(self):
        while True:
            print("\n=== Sistema de Cadastro de Usuários ===")
            print("1 - Cadastrar novo usuário")
            print("2 - Listar todos usuários")
            print("3 - Buscar usuário por nome")
            print("0 - Sair")
            
            try:
                opcao = int(input("Escolha uma opção: "))
                
                if opcao == 0:
                    print("Saindo do sistema...")
                    break
                elif opcao == 1:
                    self.cadastrar_usuario()
                elif opcao == 2:
                    self.listar_usuarios()
                elif opcao == 3:
                    self.buscar_usuario()
                else:
                    print("Opção inválida!")
                    
            except ValueError:
                print("Por favor, digite um número válido!")

# Iniciando o sistema
if __name__ == "__main__":
    sistema = SistemaUsuarios()
    sistema.menu()