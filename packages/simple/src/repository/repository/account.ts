import { Repository, RepositoryOpts, SubSelect, Eq, OrderBy, } from "../../__boostorm";
import { R } from '../__decorator/R'
import { RepoType } from '..'

class AccountRepository extends Repository {
    constructor(opts: RepositoryOpts) {
        super(opts)
        this.fetchClientAccounts = this.fetchClientAccounts.bind(this)
    }


    @R('selectAccount', {})
    public async selectAccountUnsafe(args: RepoType['selectAccount']['params']): Promise<RepoType['selectAccount']['response']> {
        return await this.selectUnsafe({
            'id': 'number',
            'ex_uuid': 'string | null',
            'provider_id': 'number | null'
        }, {
            'from': { sql: 'select * from account', as: 'acc' },
            select: {
                'columns': ['id', 'ex_uuid', 'provider_id']
            },
            join: {
                'client_account': {
                    'on': {
                        'left': 'id',
                        'operator': '=',
                        'right': 'account_id'
                    },
                    select: ['alias']
                }
            },
            limit: 10,
            offset: 0
        })
    }

    @R('selectAccount', {})
    public async selectAccount(args: RepoType['selectAccount']['params']): Promise<RepoType['selectAccount']['response']> {
        return await this.select({
            'from': 'account',
            select: {
                'columns': ['id', 'ex_uuid', 'provider_id']
            },
            join: {
                'client_account': {
                    'on': {
                        'left': 'id',
                        'operator': '=',
                        'right': 'account_id'
                    },
                    'joinOperator': 'left',
                    select: ['alias']
                }
            },
            limit: 10,
            offset: 0
        })
    }

    @R('selectAccountWithProvider', {}, true)
    public async selectAccountWithProvider(args: RepoType['selectAccountWithProvider']['params']): Promise<RepoType['selectAccountWithProvider']['response']> {
        return await this.selectWith({
            'with': {
                'a': SubSelect({
                    'from': 'account',
                    'select': {
                        'columns': ['account', 'id', 'provider_id', 'ex_uuid', 'ex_id']
                    },
                    limit: 100,
                    'offset': 0
                }),
                'b': SubSelect({
                    'from': 'provider',
                    'select': {
                        'columns': ['id', 'inn', 'name']
                    },
                    join: {
                        'client_account': {
                            on: {
                                'left': 'id',
                                operator: '=',
                                'right': 'account_id'
                            },
                            'aggregate': 'json_agg'
                        }
                    },
                    limit: 'infinity',
                    offset: 0
                })
            },
            select: {
                'from': 'a',
                join: {
                    'b': {
                        'on': {
                            'left': 'provider_id',
                            operator: '=',
                            'right': 'id'
                        }
                    }
                }
            }
        })
    }


    public async updateClientAccount(args: RepoType['updateClientAccount']['params']): Promise<RepoType['updateClientAccount']['response']> {
        const res = await this.update({
            'table': 'account',
            'where': {
                'id': Eq({
                    subSelect: SubSelect({
                        'from': 'client_account',
                        'select': {
                            'columns': ['account_id']
                        },
                        limit: 'infinity',
                        offset: 0
                    })
                })
            },
            params: {
                'ex_id': 1
            }
        })
        return true
    }


    @R('fetchClientAccounts', {
        'id': 1,
        'limit': 1,
        'offset': 0
    })
    public async fetchClientAccounts(args: RepoType['fetchClientAccounts']['params']): Promise<RepoType['fetchClientAccounts']['response']> {
        return await this.fetch({
            'table': 'client_account',
            'join': {
                'select': 'accounts',
                'table': 'account',
            },
            where: {
                'client_id': args.id
            },
            'limit': args.limit,
            'offset': args.offset,
            'orderBy': (c) => OrderBy(c, 'account_id', 'desc')
        })

    }


}


export default AccountRepository



