"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schemas) => {
    return (req, res, next) => {
        const parts = ['body', 'query', 'params'];
        for (const part of parts) {
            const schema = schemas[part];
            if (schema) {
                const result = schema.safeParse(req[part]);
                if (!result.success) {
                    return res.status(400).json({
                        message: "Validation failed",
                        errors: result.error?.issues
                    });
                }
                if (part === 'query' || part === 'params') {
                    Object.keys(req[part]).forEach(key => delete req[part][key]);
                    Object.assign(req[part], result.data);
                }
                else {
                    req[part] = result.data;
                }
            }
        }
        next();
    };
};
exports.validate = validate;
