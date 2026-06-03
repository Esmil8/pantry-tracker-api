"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
class LoginController {
    LoginService;
    constructor(LoginService) {
        this.LoginService = LoginService;
    }
    async LoginAuth(req, res, next) {
        try {
            const Data = await this.LoginService.LoginAuthService(req.body);
            res.status(200).json({
                Message: "Login successfully",
                Data: Data
            });
        }
        catch (error) {
            next(error);
        }
    }
    async Register(req, res, next) {
        try {
            const Message = await this.LoginService.Register(req.body);
            res.status(201).json({
                Message: Message
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.LoginController = LoginController;
