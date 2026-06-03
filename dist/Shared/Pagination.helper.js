"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLimit = void 0;
const getLimit = (page = 1, limit = 20) => {
    const safeLimit = Math.min(limit, 100);
    const skip = (page - 1) * safeLimit;
    return { skip, limit: safeLimit };
};
exports.getLimit = getLimit;
