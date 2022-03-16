import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./listCategoriesUseCase";

class ListCategoriesController {
    async handle(request: Request, response: Response) {
        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
        const all = await listCategoriesUseCase.execute();
        return response.json(all);
    }
}

export { ListCategoriesController };