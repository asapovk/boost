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


