

export type OrderByType = <O, K extends keyof O>(o: O, column: K, order?: 'desc') => any


export const OrderBy: OrderByType = (o, column, order) => (tableName: string) => `${tableName}.${column} ${order ? order : ''}`
