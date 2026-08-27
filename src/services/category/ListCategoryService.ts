import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {
        try {
            return await prismaClient.category.findMany({
                select: {
                    id: true,
                    name: true,
                    createdAt: true,
                },
                orderBy: {
                    name: "asc",
                },
            });
        } catch (error) {
            console.log("Erro listCategoryService", error);
            throw new Error("Falha ao listar categorias");
        }
    }
}

export { ListCategoryService };
