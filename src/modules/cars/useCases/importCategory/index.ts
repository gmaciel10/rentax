import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

export default (): ImportCategoryController => {
    const categoriesRepository = null;
    const importCategoryUseCase = new ImportCategoryUseCase(
        categoriesRepository
    );
    const importCategoryController = new ImportCategoryController(
        importCategoryUseCase
    );

    return importCategoryController;
};
