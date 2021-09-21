import Query from "../QueryBuilder";
import { WhereParams, Join, Order } from '../common'
import * as EntitieTypes from '../entities'
import { Schema } from "../Schema";
import { makeTableType } from "../utils/makeTableType";
import { makeFieldType } from "../utils/makeFieldType";

export type FetchArgs<T extends keyof EntitieTypes._Entities> = {
    table: T,
    select?: keyof EntitieTypes._Entities[T]['entitie'] | Array<keyof EntitieTypes._Entities[T]['entitie']>,
    selectConstans?: Array<string>
    where?: WhereParams<T> | Array<WhereParams<T>>,
    join?: Join<EntitieTypes._Entities[T]['joins']> | Array<Join<EntitieTypes._Entities[T]['joins']>>,
    limit: number | 'infinity',
    offset: number
    orderBy?: Order<T>
}




class Fetch extends Query {

    constructor(schema: Schema, paramsShift?: number) {
        super(schema, paramsShift)
    }


    private processFetch(args: any, returnType = {}) {
        const argument = args as any

        if (argument.select && !Object.keys(returnType).length) {
            if (Array.isArray(argument.select)) {
                for (let s of argument.select) {
                    returnType[s] = s
                }
            }
            else {
                returnType[argument.select] = argument.select
            }
        }
        if (!argument.select && !Object.keys(returnType).length) {
            const cols = this.schema.getColumnsOfTable(argument.table)
            if (cols) {
                for (let c of cols) {
                    returnType[c] = c
                }
            }

        }
        if (argument.join) {
            if (Array.isArray(argument.join)) {
                for (let j of argument.join) {
                    const tableName = j.table
                    const select = j.select
                    const columns = this.schema.getColumnsOfTable(tableName)
                    if (columns && select) {
                        returnType[j.table] = { [select]: columns }
                    }
                    return this.processFetch(argument.join, returnType)

                }
            }
            else {
                const tableName = argument.join.table
                const select = argument.join.select
                const columns = this.schema.getColumnsOfTable(tableName)
                if (columns && select) {
                    returnType[argument.join.table] = { [select]: columns }
                }

                return this.processFetch(argument.join, returnType)

            }
        }
        //console.log(returnType)
        return returnType
    }

    public generateReturnType(args: any) {
        this.table = args.table
        let returnType = '\n{\n'

        let rootTableName = this.table
        let prototype = this.processFetch(args)

        for (let p in prototype) {
            if (typeof prototype[p] === 'string') {
                if (rootTableName) {
                    const column = this.schema.findColumn(rootTableName, prototype[p] as string)
                    if (column) {
                        returnType += `\n${this.schema.genTypeFromColumn(column)}`
                    }
                }
            }
        }
        for (let p in prototype) {
            if (typeof prototype[p] === 'object') {
                const joinedTable = p
                const fieldNames = Object.keys(prototype[p])
                if (Array.isArray(prototype[p][fieldNames[0]])) {
                    const joinedTypename = makeTableType(joinedTable)
                    returnType += `\n${fieldNames[0]}: Array<${joinedTypename}>`
                    this.pushTableType(joinedTable)
                }
                else {
                    for (let f of fieldNames) {
                        const column = this.schema.findColumn(joinedTable, prototype[p][f] as string)
                        if (column) {
                            const joinedTypename = makeFieldType(joinedTable, prototype[p][f])
                            returnType += `\n${this.schema.genTypeFromColumn(column, joinedTypename)}`
                        }
                    }

                }
            }
        }
        returnType += '\n}'

        // console.log(returnType)
        return { type: returnType, tables: this.tableTypesToBuild }

    }



    public fetch = <T extends keyof EntitieTypes._Entities>(args: FetchArgs<T>): string => {
        this.table = args.table

        if (!args.select) {
            this.selectString = `${this.table}.*`
        }
        else {
            if (Array.isArray(args.select)) {
                let sindex = 0
                for (let s of args.select) {
                    this.selectString += `${sindex ? '' : '\n'}${this.table}.${s}`
                    sindex++
                }
            }
            else {
                this.selectString += `${this.table}.${args.select}`
            }
        }

        if (args.selectConstans) {
            for (let sc of args.selectConstans) {
                this.selectString += `${',\n'}${sc}`

            }
        }

        const foundTable = this.schema.getTableByName(args.table)
        if (foundTable) {
            this.primary_key = foundTable.primary_key
        }



        if (args.where) {
            this.addWhereString(args.where, this.table)
        }
        if (args.join) {
            this.addJoinString(args.join, this.table)
        }
        if (args.orderBy) {
            this.addOrderBy(args.orderBy)
        }


        if (this.whereString) {
            this.whereString = `\nwhere` + this.whereString
        }

        if (this.joinString) {
            this.groupByString = `\ngroup by ${this.table}.${this.primary_key}`
        }

        if (args.orderBy) {
            this.orderByString = `\norder by ${this.orderByString}`
        }


        return `select ${this.selectString} \nfrom ${this.table}${this.joinString}${this.whereString}${this.groupByString}${this.orderByString} ${args.limit !== 'infinity' ? `\nlimit $${this.getParamNumber(args.limit)}` : ''} \noffset $${this.getParamNumber(args.offset)}`
    }

}


export default Fetch