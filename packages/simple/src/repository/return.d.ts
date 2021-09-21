

export interface FetchProviderNewsReturn {

    body: string
    link: string | null
    id: number
    delete_date: Date | null
    title: string
    create_date: Date
    update_date: Date
    staff_id: number
    providers: Array<NewsProviderLink>
}

export interface FetchGlobalNewsReturn {

    body: string
    link: string | null
    id: number
    delete_date: Date | null
    title: string
    create_date: Date
    update_date: Date
    staff_id: number
}

export interface SelectAccountUnsafeReturn {

    accId: number
    accExUuid: string | null
    accProviderId: number | null
    clientAccountAlias: string | null
}

export interface SelectAccountReturn {

    accountId: number
    accountExUuid: string | null
    accountProviderId: number
    clientAccountAlias: string | null
}

export interface SelectAccountWithProviderReturn {

    accountAccount: string | null
    accountId: number
    accountProviderId: number
    accountExUuid: string | null
    accountExId: number | null
    providerId: number
    providerInn: string | null
    providerName: string
    providerClientAccount: Array<ClientAccount | null>
}

export interface FetchClientAccountsReturn {

    account_id: number
    ex_id: number | null
    is_full: number
    jnt_account_id: number | null
    client_id: number
    delete_date: Date | null
    create_date: Date
    id: number
    alias: string | null
    accounts: Array<Account>
}

interface NewsProviderLink {
    id: number
    provider_id: number
    news_id: number
}

interface ClientAccount {
    account_id: number
    ex_id: number | null
    is_full: number
    jnt_account_id: number | null
    client_id: number
    delete_date: Date | null
    create_date: Date
    id: number
    alias: string | null
}

interface Account {
    ex_uuid: string | null
    create_date: Date
    update_date: Date
    payment_allowed: number
    delete_date: Date | null
    id: number
    ex_id: number | null
    provider_id: number
    account: string | null
}