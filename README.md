# Boo

Boo is a boilerplate code for  node.js typescript applications. All the templates contain  __boostorm folder in src with code for dealing with sql queries into rDB.  Boo allows to import schema from database, build typescript types of all the entities and construct sql queries with strongly typed methods of the query builder. It provide as with tools for debugging queries.  




## Usage
First, create local.json file in config folder and organise it as example.json in the same folder. Set appropriate 
config parameters for DB connection.

Then import schema and build types.
```bash
yarn schema
```

Then organise repository folder. Implement your repositories in accordance with examples. 
```typescript
import { Repository, RepositoryOpts, SubSelect, Eq, OrderBy, JoinWhere, NotIn, In } from "../../__boostorm";
import { R } from '../__decorator/R'
import { RepoType } from '..'

class NewsRepository extends Repository {
    constructor(opts: RepositoryOpts) {
        super(opts)
        this.fetchProviderNews = this.fetchProviderNews.bind(this)
        this.fetchGlobalNews = this.fetchGlobalNews.bind(this)
    }

    @R('fetchProviderNews', {
        'id': [1],
        'limit': 1,
        'offset': 0
    })
    public async fetchProviderNews(args: RepoType['fetchProviderNews']['params']): Promise<RepoType['fetchProviderNews']['response']> {
        return await this.fetch({
            'table': 'news',
            'join': {
                'table': 'news_provider_link',
                'where': (c) => JoinWhere(c.news_provider_link, { 'provider_id': In(args.id) }),
                'select': 'providers',
                join: {
                    table: 'provider',
                    'where': (c) => JoinWhere(c.provider, { 'delete_date': null })
                }
            },
            where: {
                delete_date: null
            },
            'limit': args.limit,
            'offset': args.offset,
            'orderBy': (c) => OrderBy(c, 'id', 'desc')
        })
    }

    @R('fetchGlobalNews', {
        'id': [1],
        'limit': 1,
        'offset': 0
    })
    public async fetchGlobalNews(args: RepoType['fetchGlobalNews']['params']): Promise<RepoType['fetchGlobalNews']['response']> {
        return await this.fetch({
            'table': 'news',
            where: {
                delete_date: null,
                id: NotIn({
                    subSelect: SubSelect({
                        'from': 'news_provider_link',
                        'select': {
                            columns: ['news_id']
                        },
                        limit: 'infinity',
                        offset: 0
                    })
                })
            },
            'limit': args.limit,
            'offset': args.offset,
            'orderBy': (c) => OrderBy(c, 'id', 'desc')
        })
    }
}


export default NewsRepository


```

Add repositories and its methods here for making db requests via compact calling of repository('methodName', {methodParams}) function. 

```typescript
import { Repository as R } from '../__boostorm'
import Pg, { Executor } from '../__boostorm/Connection'
import { _Client, _Account, _Provider } from '../__boostorm/entities'
import NewsRepository from './repository/news'
import { Repository } from '../__boostorm/types'
import { FetchGlobalNewsReturn, FetchProviderNewsReturn } from './return'
import schema, { Schema } from '../__boostorm/Schema';

export interface RepoType {

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
    'fetchProviderNews': (ex) => (new NewsRepository({ schema, executor: ex })).fetchProviderNews,
    'fetchGlobalNews': (ex) => (new NewsRepository({ schema, executor: ex })).fetchGlobalNews,
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

```

Decorate repository methods with R decorator and provide it with arguments for test call.

```typescript
@R('fetchGlobalNews', {
        'id': [1],
        'limit': 1,
        'offset': 0
    })
public async fetchGlobalNews(args: RepoType['fetchGlobalNews']['params']): Promise<RepoType['fetchGlobalNews']['response']> {
        return await this.fetch({
            'table': 'news',
            where: {
                delete_date: null,
                id: NotIn({
                    subSelect: SubSelect({
                        'from': 'news_provider_link',
                        'select': {
                            columns: ['news_id']
                        },
                        limit: 'infinity',
                        offset: 0
                    })
                })
            },
            'limit': args.limit,
            'offset': args.offset,
            'orderBy': (c) => OrderBy(c, 'id', 'desc')
        })
}

```

Run 

```bash
yarn return
```
to build return types of decorated query methods. Types will be generated and placed into return.d.ts file.

You can pass true into third argument of R to debug decorated method.
```typescript
@R('fetchGlobalNews', {
        'id': [1],
        'limit': 1,
        'offset': 0
    }, true)

```
and run
```bash
yarn debug
``` 
to print out generated sql.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)