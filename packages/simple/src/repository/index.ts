import { OmitFields, PickAsArray, Repository as R } from '../__boostorm'
import Pg, { Executor } from '../__boostorm/Connection'
import { _Client, _Account, _Provider } from '../__boostorm/entities'
import AccountRepository from './repository/account'
import NewsRepository from './repository/news'
import { Repository } from '../__boostorm/types'
import { FetchGlobalNewsReturn, FetchProviderNewsReturn } from './return'
import { FetchClientAccountsReturn } from './return'
import schema, { Schema } from '../__boostorm/Schema';

export interface RepoType {

    ///Account
    selectAccount: {
        params: {},
        response: {}
    }

    selectAccountWithProvider: {
        params: {},
        response: {}
    }

    updateClientAccount: {
        params: Partial<_Account>,
        response: boolean
    }

    fetchClientAccounts: {
        params: Pick<_Client, 'id'> & { limit: number, offset: number },
        response: FetchClientAccountsReturn
    }
    ///News
    fetchProviderNews: {
        params: PickAsArray<_Provider, 'id'> & { limit: number, offset: number },
        response: FetchProviderNewsReturn
    }
    fetchGlobalNews: {
        params: PickAsArray<_Provider, 'id'> & { limit: number, offset: number },
        response: FetchGlobalNewsReturn
    }
}




export const repo: { [T in keyof RepoType]: (ex: Executor) => (args: RepoType[T]['params']) => Promise<RepoType[T]['response']> } = {
    'fetchClientAccounts': (ex) => (new AccountRepository({ schema, executor: ex })).fetchClientAccounts,
    'fetchProviderNews': (ex) => (new NewsRepository({ schema, executor: ex })).fetchProviderNews,
    'fetchGlobalNews': (ex) => (new NewsRepository({ schema, executor: ex })).fetchGlobalNews,
    'updateClientAccount': (ex) => (new AccountRepository({ schema, executor: ex })).updateClientAccount
}

export const repository: Repository = async (name, params) => {
    const request = { ...repo as any }[name]
    try {
        return await request(Pg.execute)(params)
    }
    catch (err) {
        throw err
    }
}



export const repositoryOpen = (executor: Executor): Repository => async (name, params) => {
    const request = { ...repo as any }[name]
    try {
        return await request(executor)(params)
    }
    catch (err) {
        throw err
    }
}


export const rootRep = new R({
    schema,
    executor: Pg.execute
})

export const rootRepOpen = (ex: Executor) => new R({
    schema,
    executor: ex
})