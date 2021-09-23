import IQueryBuilder from "./types"
import { makeFieldType } from "../utils/makeFieldType";
import { Schema } from "../Schema";


export class QueryBuilder {
    private paramsStartPosition: number;

    public schema: Schema

    protected groupBYCols: Array<string>

    protected tableAliases: Array<string>
    protected whereString: string
    protected joinString: string
    protected selectString: string
    protected groupByString: string
    protected orderByString: string

    public table: string
    public generatedType: string

    protected primary_key: string

    protected params: Array<any>
    protected paramNumber: number

    constructor(schema: Schema, paramsStartPosition?: number) {
        this.paramsStartPosition = paramsStartPosition || 0

        this.groupBYCols = []

        this.tableAliases = []
        this.whereString = ''
        this.joinString = ''
        this.selectString = ''
        this.groupByString = ''
        this.orderByString = ''

        this.table = ''
        this.primary_key = ''

        this.params = []
        this.paramNumber = paramsStartPosition || 0
        this.schema = schema

        this.generatedType = ''
    }

    public tableTypesToBuild: Array<string> = []
    protected pushTableType = (tableName: string) => {
        if (!this.tableTypesToBuild.includes(tableName)) {
            this.tableTypesToBuild.push(tableName)
        }
    }

    public getParams() {
        return this.params
    }
    public pushParams(params: Array<any>) {
        for (let p of params) {
            this.getParamNumber(p)
        }
    }



    protected pushGroupBYCols(val: string) {
        const index = this.groupBYCols.findIndex(gbc => gbc === val)
        if (index === -1) {
            this.groupBYCols.push(val)
        }
    }

    public getParamNumber(param: any) {

        this.paramNumber += 1
        this.params.push(param)
        return this.paramNumber
    }

    private getRandomLetter(length: number) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result
    }

    private getTableAlias(tableName: string) {
        const tableWords = tableName.split('_')
        const tableWordsSingleLetters = tableWords.filter(tw => tw).map(tw => tw[0]).join('')
        const tableWordsDoubleLetters = tableWords.filter(tw => tw.length > 1).map(tw => tw.substring(0, 2)).join('')

        const pushRandomLetter = (len: number, trry: number): string | null => {
            for (let tr = 1; tr < trry; tr++) {
                let x = this.getRandomLetter(len)
                if (!this.tableAliases.includes(x)) {
                    return x
                }
            }
            return null
        }

        if (!this.tableAliases.includes(tableWordsSingleLetters)) {
            this.tableAliases.push(tableWordsSingleLetters)
            return tableWordsSingleLetters
        }
        else if (!this.tableAliases.includes(tableWordsDoubleLetters)) {
            this.tableAliases.push(tableWordsDoubleLetters)
            return tableWordsDoubleLetters
        }
        else {
            for (let trl = 1; trl < 5; trl++) {
                const res = pushRandomLetter(trl, 5)
                if (res) {
                    this.tableAliases.push(res)
                    return res
                }
            }
            return tableName

        }
    }


    protected chooseWhereCondition: IQueryBuilder.ChooseWhereCondition = (where, whereTable, whereParam) => {
        if (typeof where === 'function') {
            const returnVal = where(this, whereTable, whereParam) as string | null
            if (!returnVal) {
                return null
            }
            else {
                return returnVal
            }
        }
        else if (where === null) {
            return `${whereTable}.${whereParam} isnull`
        }
        else if ((typeof where === 'string') || (typeof where === 'number')) {
            return `${whereTable}.${whereParam} = $${this.getParamNumber(where)}`
        }
        else {
            return null
        }
    }

    protected addWhereString: IQueryBuilder.AddWhereString = (params, whereTable) => {
        if (this.whereString) {
            this.whereString += `\nand`
        }


        let index = 0
        if (Array.isArray(params)) {

            if (!params.length) {
                throw Error("WHERE should not be empty array")
            }


            for (let orW of params) {

                if (!Object.keys(orW).length) {
                    throw Error("WHERE should not be empty object")
                }

                let orString = ''
                let jindex = 0
                for (let andW in orW) {
                    const s = this.chooseWhereCondition(orW[andW], whereTable, andW)
                    if (!s) {
                        continue
                    }

                    orString += `${jindex ? '\nand' : ''} ${s}`
                    jindex++
                }
                this.whereString += `${index ? '\nor' : ''} ${params.length > 1 ? `(` : ''}${orString}${params.length > 1 ? `)` : ''}`


                index++
            }
        }
        else {

            if (!Object.keys(params).length) {
                throw Error("WHERE should not be empty")
            }

            let jindex = 0
            for (let andW in params) {
                const s = this.chooseWhereCondition(params[andW], whereTable, andW)
                if (!s) {
                    continue
                }
                this.whereString += `${jindex ? '\nand' : ''} ${s}`
                jindex++
            }
        }
    }


    protected addJoinString_for_selectWith: IQueryBuilder.AddJoinStringForSelectWith = (args, joinToTable, colsMap) => {

        let index = 0
        for (let j in args) {
            let trueLeftColName = args[j].on.left
            let trueRightColName = args[j].on.right


            if (colsMap) {
                if (colsMap[joinToTable] && colsMap[joinToTable][args[j].on.left]) {
                    trueLeftColName = `"${colsMap[joinToTable][args[j].on.left]}"`
                }
                if (colsMap[j] && colsMap[j][args[j].on.right]) {
                    trueRightColName = `"${colsMap[j][args[j].on.right]}"`
                }
            }

            let j_str = `\n${args[j].joinOperator ? args[j].joinOperator + ' ' : ''}join ${j} on ${joinToTable}.${trueLeftColName} ${args[j].on.operator} ${j}.${trueRightColName}`
            this.joinString += j_str
            if (args[j].select && !args[j].aggregate) {
                for (let s of args[j].select as Array<unknown>) {
                    let js_str = `, \n${j}.${s} as "${makeFieldType(j, s as string)}"`
                    this.selectString += js_str
                    // this.pushGroupBYCols(`${j}.${s}`)
                }
            }
            if (args[j].where) {
                this.addWhereString(args[j].where as any, j)
            }
            if (args[j].join) {
                this.addJoinString_for_selectWith(args[j].join as any, j, colsMap)
            }
            if (args[j].aggregate) {
                let js_str = `, \n${args[j].aggregate}(${j}.*) as "${makeFieldType(this.table, j)}"`
                this.pushGroupBYCols(`${this.table}.${this.primary_key}`)
                this.selectString += js_str
            }
            index += 1
        }
    }


    protected addJoinString: IQueryBuilder.AddJoinString = (params, joinToTable) => {
        let index = 0
        if (Array.isArray(params)) {
            for (let j of params) {
                const foundTable = this.schema.getTableByName(joinToTable)
                if (foundTable) {
                    const foundJoiningTable = foundTable.joinsColums.find(ji => ji.table_name === j.table)
                    if (foundJoiningTable) {
                        let j_str = `\njoin ${j.table} on ${joinToTable}.${foundJoiningTable.right_column} = ${j.table}.${foundJoiningTable.left_column}`
                        this.joinString += j_str
                        if (j.select) {
                            let js_str = `, \njson_agg(${j.table}.*) as ${j.select}`
                            this.selectString += js_str
                        }
                        if (j.where) {
                            let q = { project_account_user_link: 1, account_user: 2 }
                            this.addWhereString(j.where(q as any), j.table)
                        }
                        if (j.join) {
                            this.addJoinString(j.join, j.table)
                        }
                    }
                    else {
                        throw Error("JoiningTable table not found")
                    }
                }
                else {
                    throw Error("joinToTable not found")
                }
                index += 1
            }
        } else {
            const foundTable = this.schema.getTableByName(joinToTable)
            if (foundTable) {


                const foundJoiningTable = foundTable.joinsColums.find(ji => ji.table_name === params.table)
                if (foundJoiningTable) {
                    let j_str = `\njoin ${params.table} on ${joinToTable}.${foundJoiningTable.right_column} = ${params.table}.${foundJoiningTable.left_column}`
                    this.joinString += j_str
                    if (params.select) {
                        let js_str = `, \njson_agg(${params.table}.*) as ${params.select}`
                        this.selectString += js_str
                    }
                    if (params.where) {
                        let q = { project_account_user_link: 1, account_user: 2 }
                        this.addWhereString(params.where(q as any), params.table)
                    }
                    if (params.join) {
                        this.addJoinString(params.join, params.table)
                    }
                }
                else {
                    throw Error("JoiningTable table not found")
                }
            }
            else {
                throw Error("JoinToTable not found")
            }
        }
    }

    protected addOrderBy: IQueryBuilder.AddOrderBy = (args) => {
        if (typeof args === 'function') {
            this.orderByString = args(1 as any)(this.table) as string
        }
        else
            this.orderByString = args as string
    }

}


export default QueryBuilder