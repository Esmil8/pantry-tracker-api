"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PantryController = void 0;
class PantryController {
    pantryService;
    constructor(pantryService) {
        this.pantryService = pantryService;
    }
    async CreatePantry(req, res) {
        const { user } = req;
        const UserId = Number(user?.id);
        const Data = req.body;
        await this.pantryService.createPantry(UserId, Data);
        return res.status(201).json({
            Data: Data,
            Message: "Pantry created successfully"
        });
    }
    async AddItemToPantry(req, res) {
        const { user } = req;
        const UserId = Number(user?.id);
        const PantryId = Number(req.params.pantryId);
        const Data = req.body;
        await this.pantryService.addPantryItem(UserId, PantryId, Data);
        return res.status(201).json({
            Status: "Success",
            Message: "Item added to pantry successfully"
        });
    }
    async FilterInventoryByPantry(req, res) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const { status } = req.query;
        const { user } = req;
        const UserId = Number(user?.id);
        const PantryId = Number(req.params.pantryId);
        const ProductName = req.query.ProductName;
        const data = await this.pantryService.findAllItemsByPantry(UserId, PantryId, status, page, limit, ProductName);
        return res.status(200).json({
            Status: "Success",
            Data: data,
            Message: "Fetched successfully"
        });
    }
    async UpdatePantryItem(req, res) {
        const { user } = req;
        const UserId = Number(user?.id);
        const PantryId = Number(req.params.pantryId);
        const ItemId = Number(req.params.id);
        const Data = req.body;
        await this.pantryService.updatePantryItem(UserId, PantryId, ItemId, Data);
        return res.status(200).json({
            Status: "Success",
            Message: "Item Updated Successfully"
        });
    }
    async DeletePantryItem(req, res) {
        const { user } = req;
        const UserId = Number(user?.id);
        const PantryId = Number(req.params.pantryId);
        const ItemId = Number(req.params.id);
        const data = await this.pantryService.deletePantryItem(UserId, PantryId, ItemId);
        return res.status(200).json({
            Status: "Success",
            Data: data,
            Message: "Item deleted successfully"
        });
    }
}
exports.PantryController = PantryController;
