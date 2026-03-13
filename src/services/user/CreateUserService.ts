class CreateUserService {
    async execute() {
        console.log("EXECUTANDO SERVICÇO!");
        return { message: "Usuário criado com sucesso!" };
    }

}

export { CreateUserService }; 