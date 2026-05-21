
export const getLimit = (page: number = 1, limit: number = 20) => {

    const safeLimit = Math.min(limit, 100)

    const skip = (page - 1) * safeLimit

    return { skip, limit: safeLimit }
}