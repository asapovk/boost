
    export interface _DELETEDELS {
     
     
                    id_org: number | null
                     
                    id_client_jnt_account: number | null
                     
                    id_jnt_account: number | null
                     
                    nm_org: string | null
                     
                    client_id: number | null
                     
                    nn_ls: string | null
                     
                    nm_login: string | null
                     
                    id_abonent: number | null
                    
    
    }
    
    
    
        
    export interface _DELETEDELSCreate {
     
     
                    id_org: number | null
                     
                    id_client_jnt_account: number | null
                     
                    id_jnt_account: number | null
                     
                    nm_org: string | null
                     
                    client_id: number | null
                     
                    nn_ls: string | null
                     
                    nm_login: string | null
                     
                    id_abonent: number | null
                    
    
    }
    
    
        
    export interface _TMPELS {
     
     
                    vl_password: string | null
                     
                    nn_login: string | null
                     
                    payment_code: string | null
                     
                    client_ex_id: number | null
                     
                    els: string | null
                     
                    account_id: number | null
                     
                    client_id: number | null
                     
                    jnt_account_id: number | null
                     
                    provider_id: number | null
                     
                    NM_ORG: string | null
                     
                    ls_pu: string | null
                    
    
    }
    
    
    
        
    export interface _TMPELSCreate {
     
     
                    vl_password: string | null
                     
                    nn_login: string | null
                     
                    payment_code: string | null
                     
                    client_ex_id: number | null
                     
                    els: string | null
                     
                    account_id: number | null
                     
                    client_id: number | null
                     
                    jnt_account_id: number | null
                     
                    provider_id: number | null
                     
                    NM_ORG: string | null
                     
                    ls_pu: string | null
                    
    
    }
    
    
        
    export interface _Account {
     
     
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
    
    
    
        
    export interface _AccountCreate {
     
     
                    ex_uuid: string | null
                     
                    delete_date: Date | null
                     
                    ex_id: number | null
                     
                    provider_id: number 
                     
                    account: string | null
                    
    
    }
    
    
        
    export interface _Cheque {
     
     
                    notify_date: Date | null
                     
                    send_date: Date | null
                     
                    order_id: number 
                     
                    inn: string 
                     
                    kkt_id: string 
                     
                    provider_id: number 
                     
                    total: number 
                     
                    notified: undefined 
                     
                    sent: undefined 
                     
                    update_date: Date 
                     
                    create_date: Date 
                     
                    id: number 
                    
    
    }
    
    
    
        
    export interface _ChequeCreate {
     
     
                    notify_date: Date | null
                     
                    send_date: Date | null
                     
                    order_id: number 
                     
                    inn: string 
                     
                    kkt_id: string 
                     
                    provider_id: number 
                    
    
    }
    
    
        
    export interface _ChequeProcess {
     
     
                    create_date: Date 
                     
                    id: number 
                     
                    data: JSON | null
                     
                    process_type: string 
                     
                    cheque_id: number 
                    
    
    }
    
    
    
        
    export interface _ChequeProcessCreate {
     
     
                    data: JSON | null
                     
                    process_type: string 
                     
                    cheque_id: number 
                    
    
    }
    
    
        
    export interface _Client {
     
     
                    phone: string | null
                     
                    photo: string | null
                     
                    name: string | null
                     
                    hash: string | null
                     
                    ex_password_salt: string | null
                     
                    ex_login: string | null
                     
                    is_adm: number | null
                     
                    create_date: Date 
                     
                    update_date: Date 
                     
                    delete_date: Date | null
                     
                    id: number 
                     
                    ex_password_type: number | null
                     
                    identifier: string | null
                     
                    email: string | null
                     
                    ex_id: number | null
                     
                    ex_password: string | null
                    
    
    }
    
    
    
        
    export interface _ClientCreate {
     
     
                    phone: string | null
                     
                    photo: string | null
                     
                    name: string | null
                     
                    hash: string | null
                     
                    ex_password_salt: string | null
                     
                    ex_login: string | null
                     
                    delete_date: Date | null
                     
                    identifier: string | null
                     
                    email: string | null
                     
                    ex_id: number | null
                     
                    ex_password: string | null
                    
    
    }
    
    
        
    export interface _ClientAccount {
     
     
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
    
    
    
        
    export interface _ClientAccountCreate {
     
     
                    account_id: number 
                     
                    ex_id: number | null
                     
                    jnt_account_id: number | null
                     
                    client_id: number 
                     
                    delete_date: Date | null
                     
                    alias: string | null
                    
    
    }
    
    
        
    export interface _ClientAgreement {
     
     
                    client_id: number 
                     
                    device: string | null
                     
                    id: number 
                     
                    delete_date: Date | null
                     
                    create_date: Date 
                    
    
    }
    
    
    
        
    export interface _ClientAgreementCreate {
     
     
                    client_id: number 
                     
                    device: string | null
                     
                    delete_date: Date | null
                    
    
    }
    
    
        
    export interface _ClientCards {
     
     
                    holder: string | null
                     
                    uid: string | null
                     
                    name: string | null
                     
                    update_date: Date | null
                     
                    delete_date: Date | null
                     
                    brand: string | null
                     
                    parameters: JSON | null
                     
                    client_id: number 
                     
                    create_date: Date | null
                     
                    id: number 
                     
                    ex_id: number | null
                     
                    alias: string | null
                    
    
    }
    
    
    
        
    export interface _ClientCardsCreate {
     
     
                    holder: string | null
                     
                    uid: string | null
                     
                    name: string | null
                     
                    update_date: Date | null
                     
                    delete_date: Date | null
                     
                    brand: string | null
                     
                    parameters: JSON | null
                     
                    client_id: number 
                     
                    create_date: Date | null
                     
                    ex_id: number | null
                     
                    alias: string | null
                    
    
    }
    
    
        
    export interface _ClientCode {
     
     
                    create_date: Date 
                     
                    identifier: string 
                     
                    hits: number 
                     
                    expire_date: Date 
                     
                    id: number 
                     
                    success_date: Date | null
                     
                    code: string 
                    
    
    }
    
    
    
        
    export interface _ClientCodeCreate {
     
     
                    identifier: string 
                     
                    expire_date: Date 
                     
                    success_date: Date | null
                     
                    code: string 
                    
    
    }
    
    
        
    export interface _ClientJntAccount {
     
     
                    is_full: undefined 
                     
                    alias: string | null
                     
                    client_id: number 
                     
                    jnt_account_id: number 
                     
                    params: JSON | null
                     
                    delete_date: Date | null
                     
                    id: number 
                     
                    create_date: Date 
                     
                    update_date: Date 
                    
    
    }
    
    
    
        
    export interface _ClientJntAccountCreate {
     
     
                    alias: string | null
                     
                    client_id: number 
                     
                    jnt_account_id: number 
                     
                    params: JSON | null
                     
                    delete_date: Date | null
                    
    
    }
    
    
        
    export interface _ClientSession {
     
     
                    client_id: number 
                     
                    create_date: Date 
                     
                    update_date: Date 
                     
                    id: number 
                     
                    token: string 
                    
    
    }
    
    
    
        
    export interface _ClientSessionCreate {
     
     
                    client_id: number 
                     
                    token: string 
                    
    
    }
    
    
        
    export interface _Config {
     
     
                    parameter_name: string | null
                     
                    value: string 
                     
                    key: string 
                     
                    parameter_group_id: number 
                    
    
    }
    
    
    
        
    export interface _ConfigCreate {
     
     
                    parameter_name: string | null
                     
                    value: string 
                     
                    key: string 
                     
                    parameter_group_id: number 
                    
    
    }
    
    
        
    export interface _ConfigParameterGroup {
     
     
                    group_name: string 
                     
                    id: number 
                    
    
    }
    
    
    
        
    export interface _ConfigParameterGroupCreate {
     
     
                    group_name: string 
                    
    
    }
    
    
        
    export interface _DataSource {
     
     
                    create_date: Date 
                     
                    update_date: Date 
                     
                    delete_date: Date | null
                     
                    parameters: JSON | null
                     
                    endpoint: string | null
                     
                    id: number 
                     
                    name: string | null
                    
    
    }
    
    
    
        
    export interface _DataSourceCreate {
     
     
                    delete_date: Date | null
                     
                    parameters: JSON | null
                     
                    endpoint: string | null
                     
                    name: string | null
                    
    
    }
    
    
        
    export interface _Department {
     
     
                    create_date: Date 
                     
                    delete_date: Date | null
                     
                    work_time: JSON | null
                     
                    provider_id: number 
                     
                    coords: JSON | null
                     
                    email: string | null
                     
                    phone: string | null
                     
                    id: number 
                     
                    address: string | null
                     
                    update_date: Date 
                     
                    name: string 
                    
    
    }
    
    
    
        
    export interface _DepartmentCreate {
     
     
                    delete_date: Date | null
                     
                    work_time: JSON | null
                     
                    provider_id: number 
                     
                    coords: JSON | null
                     
                    email: string | null
                     
                    phone: string | null
                     
                    address: string | null
                     
                    name: string 
                    
    
    }
    
    
        
    export interface _Epd {
     
     
                    delete_date: Date | null
                     
                    id: number 
                     
                    name: string 
                     
                    update_date: Date 
                     
                    create_date: Date 
                    
    
    }
    
    
    
        
    export interface _EpdCreate {
     
     
                    delete_date: Date | null
                     
                    name: string 
                    
    
    }
    
    
        
    export interface _Faq {
     
     
                    link: string | null
                     
                    id: number 
                     
                    category_id: number 
                     
                    image: string | null
                     
                    name: string 
                     
                    create_date: Date 
                     
                    update_date: Date 
                     
                    delete_date: Date | null
                     
                    description: string | null
                    
    
    }
    
    
    
        
    export interface _FaqCreate {
     
     
                    link: string | null
                     
                    category_id: number 
                     
                    image: string | null
                     
                    name: string 
                     
                    delete_date: Date | null
                     
                    description: string | null
                    
    
    }
    
    
        
    export interface _FaqCategory {
     
     
                    id: number 
                     
                    name: string 
                    
    
    }
    
    
    
        
    export interface _FaqCategoryCreate {
     
     
                    name: string 
                    
    
    }
    
    
        
    export interface _FaqProviderLink {
     
     
                    faq_id: number 
                     
                    id: number 
                     
                    provider_id: number 
                    
    
    }
    
    
    
        
    export interface _FaqProviderLinkCreate {
     
     
                    faq_id: number 
                     
                    provider_id: number 
                    
    
    }
    
    
        
    export interface _JntAccount {
     
     
                    jnt_account_num: string 
                     
                    params: JSON | null
                     
                    delete_date: Date | null
                     
                    id: number 
                     
                    create_date: Date 
                     
                    update_date: Date 
                     
                    epd_id: number 
                    
    
    }
    
    
    
        
    export interface _JntAccountCreate {
     
     
                    jnt_account_num: string 
                     
                    params: JSON | null
                     
                    delete_date: Date | null
                     
                    epd_id: number 
                    
    
    }
    
    
        
    export interface _News {
     
     
                    body: string 
                     
                    link: string | null
                     
                    id: number 
                     
                    delete_date: Date | null
                     
                    title: string 
                     
                    create_date: Date 
                     
                    update_date: Date 
                     
                    staff_id: number 
                    
    
    }
    
    
    
        
    export interface _NewsCreate {
     
     
                    body: string 
                     
                    link: string | null
                     
                    delete_date: Date | null
                     
                    title: string 
                     
                    staff_id: number 
                    
    
    }
    
    
        
    export interface _NewsProviderLink {
     
     
                    id: number 
                     
                    provider_id: number 
                     
                    news_id: number 
                    
    
    }
    
    
    
        
    export interface _NewsProviderLinkCreate {
     
     
                    provider_id: number 
                     
                    news_id: number 
                    
    
    }
    
    
        
    export interface _Order {
     
     
                    paytype_id: number 
                     
                    client_id: number 
                     
                    els_id: number | null
                     
                    invoice_uid: number | null
                     
                    device: string | null
                     
                    final: undefined 
                     
                    operation: string | null
                     
                    session: string | null
                     
                    total: number 
                     
                    customer: string 
                     
                    order: string | null
                     
                    update_date: Date 
                     
                    create_date: Date 
                     
                    status: string 
                     
                    id: number 
                     
                    transaction_date: Date | null
                    
    
    }
    
    
    
        
    export interface _OrderCreate {
     
     
                    paytype_id: number 
                     
                    client_id: number 
                     
                    els_id: number | null
                     
                    invoice_uid: number | null
                     
                    device: string | null
                     
                    operation: string | null
                     
                    session: string | null
                     
                    customer: string 
                     
                    order: string | null
                     
                    status: string 
                     
                    transaction_date: Date | null
                    
    
    }
    
    
        
    export interface _OrderPayment {
     
     
                    inn: string | null
                     
                    order_id: number 
                     
                    provider_service_name: string | null
                     
                    tax: number 
                     
                    lspu_id: number 
                     
                    sent_provider: undefined 
                     
                    service_id: number 
                     
                    update_date: Date 
                     
                    create_date: Date 
                     
                    fiscalized: undefined 
                     
                    id: number 
                     
                    invoice_puid: number | null
                     
                    amount: number 
                     
                    service_name: string | null
                    
    
    }
    
    
    
        
    export interface _OrderPaymentCreate {
     
     
                    inn: string | null
                     
                    order_id: number 
                     
                    provider_service_name: string | null
                     
                    lspu_id: number 
                     
                    service_id: number 
                     
                    invoice_puid: number | null
                     
                    service_name: string | null
                    
    
    }
    
    
        
    export interface _OrderProcess {
     
     
                    order_id: number 
                     
                    data: JSON | null
                     
                    id: number 
                     
                    create_date: Date 
                     
                    process_type: string 
                    
    
    }
    
    
    
        
    export interface _OrderProcessCreate {
     
     
                    order_id: number 
                     
                    data: JSON | null
                     
                    process_type: string 
                    
    
    }
    
    
        
    export interface _Payment {
     
     
                    session: string | null
                     
                    order: string | null
                     
                    status: string 
                     
                    result: JSON | null
                     
                    payment: JSON | null
                     
                    invoice: JSON 
                     
                    client_id: number | null
                     
                    fee: undefined 
                     
                    jnt_account_id: number | null
                     
                    amount: number 
                     
                    operation: string | null
                     
                    update_date: Date 
                     
                    id: number 
                     
                    create_date: Date 
                     
                    account_id: number | null
                    
    
    }
    
    
    
        
    export interface _PaymentCreate {
     
     
                    session: string | null
                     
                    order: string | null
                     
                    status: string 
                     
                    result: JSON | null
                     
                    payment: JSON | null
                     
                    invoice: JSON 
                     
                    client_id: number | null
                     
                    jnt_account_id: number | null
                     
                    operation: string | null
                     
                    account_id: number | null
                    
    
    }
    
    
        
    export interface _PaymentSource {
     
     
                    b2p_host: string | null
                     
                    create_date: Date 
                     
                    acquiring_host: string | null
                     
                    point_code: string 
                     
                    b2p_sector: number | null
                     
                    acquiring_merchant: string | null
                     
                    acquiring_certificate: string | null
                     
                    name: string 
                     
                    acquiring: string | null
                     
                    delete_date: Date | null
                     
                    update_date: Date 
                     
                    endpoint: string 
                     
                    id: number 
                     
                    apple_merchant: string | null
                     
                    b2p_password: string | null
                    
    
    }
    
    
    
        
    export interface _PaymentSourceCreate {
     
     
                    b2p_host: string | null
                     
                    acquiring_host: string | null
                     
                    point_code: string 
                     
                    b2p_sector: number | null
                     
                    acquiring_merchant: string | null
                     
                    acquiring_certificate: string | null
                     
                    name: string 
                     
                    delete_date: Date | null
                     
                    endpoint: string 
                     
                    apple_merchant: string | null
                     
                    b2p_password: string | null
                    
    
    }
    
    
        
    export interface _Paytype {
     
     
                    key: string 
                     
                    id: number 
                    
    
    }
    
    
    
        
    export interface _PaytypeCreate {
     
     
                    key: string 
                    
    
    }
    
    
        
    export interface _Provider {
     
     
                    epd_id: number | null
                     
                    data_source_id: number | null
                     
                    payment_source_id: number | null
                     
                    delete_date: Date | null
                     
                    create_date: Date 
                     
                    update_date: Date | null
                     
                    id: number 
                     
                    receipt_source_id: number | null
                     
                    parameters: JSON | null
                     
                    ex_id: number | null
                     
                    parent_id: number | null
                     
                    name: string 
                     
                    type_payment_code: string 
                     
                    organization_code: string | null
                     
                    inn: string | null
                    
    
    }
    
    
    
        
    export interface _ProviderCreate {
     
     
                    epd_id: number | null
                     
                    data_source_id: number | null
                     
                    payment_source_id: number | null
                     
                    delete_date: Date | null
                     
                    receipt_source_id: number | null
                     
                    parameters: JSON | null
                     
                    ex_id: number | null
                     
                    parent_id: number | null
                     
                    name: string 
                     
                    type_payment_code: string 
                     
                    organization_code: string | null
                     
                    inn: string | null
                    
    
    }
    
    
        
    export interface _ProviderServiceLink {
     
     
                    id: number 
                     
                    service_name: string 
                     
                    provider_id: number 
                     
                    service_id: string 
                     
                    service_uuid: string | null
                    
    
    }
    
    
    
        
    export interface _ProviderServiceLinkCreate {
     
     
                    service_name: string 
                     
                    provider_id: number 
                     
                    service_id: string 
                     
                    service_uuid: string | null
                    
    
    }
    
    
        
    export interface _ProviderSetup {
     
     
                    value: string 
                     
                    id: number 
                     
                    key: string 
                     
                    provider_id: number 
                    
    
    }
    
    
    
        
    export interface _ProviderSetupCreate {
     
     
                    value: string 
                     
                    key: string 
                     
                    provider_id: number 
                    
    
    }
    
    
        
    export interface _Quiz {
     
     
                    start_date: Date | null
                     
                    initial_question_id: number | null
                     
                    id: number 
                     
                    update_date: Date 
                     
                    delete_date: Date | null
                     
                    title: string 
                     
                    create_date: Date 
                     
                    description: string 
                     
                    agreement: number 
                     
                    image: undefined | null
                     
                    end_date: Date | null
                     
                    autor: number 
                    
    
    }
    
    
    
        
    export interface _QuizCreate {
     
     
                    start_date: Date | null
                     
                    initial_question_id: number | null
                     
                    delete_date: Date | null
                     
                    title: string 
                     
                    description: string 
                     
                    agreement: number 
                     
                    image: undefined | null
                     
                    end_date: Date | null
                     
                    autor: number 
                    
    
    }
    
    
        
    export interface _QuizAnswers {
     
     
                    create_date: Date 
                     
                    client_id: number 
                     
                    provider_id: number 
                     
                    quiz_id: number 
                     
                    account_id: number 
                     
                    jnt_account_id: number 
                     
                    answers_value: JSON | null
                     
                    end_date: Date | null
                     
                    id: number 
                    
    
    }
    
    
    
        
    export interface _QuizAnswersCreate {
     
     
                    client_id: number 
                     
                    provider_id: number 
                     
                    quiz_id: number 
                     
                    account_id: number 
                     
                    jnt_account_id: number 
                     
                    answers_value: JSON | null
                     
                    end_date: Date | null
                    
    
    }
    
    
        
    export interface _QuizProviderLink {
     
     
                    quiz_id: number 
                     
                    id: number 
                     
                    provider_id: number 
                    
    
    }
    
    
    
        
    export interface _QuizProviderLinkCreate {
     
     
                    quiz_id: number 
                     
                    provider_id: number 
                    
    
    }
    
    
        
    export interface _QuizQuestions {
     
     
                    value_parametrs_question: JSON | null
                     
                    update_date: Date 
                     
                    next_quiz_questions_id: number | null
                     
                    title: string 
                     
                    delete_date: Date | null
                     
                    quiz_questions_type_id: number 
                     
                    id: number 
                     
                    create_date: Date 
                     
                    quiz_id: number 
                    
    
    }
    
    
    
        
    export interface _QuizQuestionsCreate {
     
     
                    value_parametrs_question: JSON | null
                     
                    next_quiz_questions_id: number | null
                     
                    title: string 
                     
                    delete_date: Date | null
                     
                    quiz_questions_type_id: number 
                     
                    quiz_id: number 
                    
    
    }
    
    
        
    export interface _QuizTypeQuestion {
     
     
                    name: string 
                     
                    type_front_component_id: number 
                     
                    id: number 
                     
                    update_date: Date 
                     
                    short_name: string 
                     
                    create_date: Date 
                    
    
    }
    
    
    
        
    export interface _QuizTypeQuestionCreate {
     
     
                    name: string 
                     
                    type_front_component_id: number 
                     
                    short_name: string 
                    
    
    }
    
    
        
    export interface _Receipt {
     
     
                    payment_id: number 
                     
                    response_date: Date | null
                     
                    id: number 
                     
                    request: JSON | null
                     
                    response: JSON | null
                     
                    create_date: Date 
                    
    
    }
    
    
    
        
    export interface _ReceiptCreate {
     
     
                    payment_id: number 
                     
                    response_date: Date | null
                     
                    request: JSON | null
                     
                    response: JSON | null
                    
    
    }
    
    
        
    export interface _ReceiptSource {
     
     
                    create_date: Date 
                     
                    delete_date: Date | null
                     
                    host: string 
                     
                    id: number 
                     
                    app_secret: string 
                     
                    app_id: string 
                     
                    update_date: Date 
                     
                    name: string 
                    
    
    }
    
    
    
        
    export interface _ReceiptSourceCreate {
     
     
                    delete_date: Date | null
                     
                    host: string 
                     
                    app_secret: string 
                     
                    app_id: string 
                     
                    name: string 
                    
    
    }
    
    
        
    export interface _ReportAttachment {
     
     
                    report_id: number 
                     
                    dt_ready: Date | null
                     
                    dt_create: Date 
                     
                    error_message: string | null
                     
                    buffer: undefined | null
                     
                    dt_download: Date | null
                     
                    provider_id: number 
                     
                    user_id: number 
                     
                    link: string | null
                     
                    id: number 
                    
    
    }
    
    
    
        
    export interface _ReportAttachmentCreate {
     
     
                    report_id: number 
                     
                    dt_ready: Date | null
                     
                    error_message: string | null
                     
                    buffer: undefined | null
                     
                    dt_download: Date | null
                     
                    provider_id: number 
                     
                    user_id: number 
                     
                    link: string | null
                    
    
    }
    
    
        
    export interface _Reports {
     
     
                    description: string | null
                     
                    id: number 
                     
                    create_date: Date 
                     
                    parameters: JSON | null
                     
                    update_date: Date | null
                     
                    delete_date: Date | null
                     
                    name: string | null
                     
                    report_uuid: string | null
                     
                    format: string | null
                    
    
    }
    
    
    
        
    export interface _ReportsCreate {
     
     
                    description: string | null
                     
                    parameters: JSON | null
                     
                    update_date: Date | null
                     
                    delete_date: Date | null
                     
                    name: string | null
                     
                    report_uuid: string | null
                     
                    format: string | null
                    
    
    }
    
    
        
    export interface _ReportsUserLink {
     
     
                    report_id: number 
                     
                    id: number 
                     
                    user_id: number 
                    
    
    }
    
    
    
        
    export interface _ReportsUserLinkCreate {
     
     
                    report_id: number 
                     
                    user_id: number 
                    
    
    }
    
    
        
    export interface _Ticket {
     
     
                    email: string | null
                     
                    account_id: number | null
                     
                    id: number 
                     
                    delete_date: Date | null
                     
                    ex_key: string | null
                     
                    create_date: Date 
                     
                    description: string | null
                     
                    summary: string | null
                     
                    ex_id: number | null
                     
                    ex_params: JSON | null
                     
                    update_date: Date 
                     
                    client_id: number | null
                    
    
    }
    
    
    
        
    export interface _TicketCreate {
     
     
                    email: string | null
                     
                    account_id: number | null
                     
                    delete_date: Date | null
                     
                    ex_key: string | null
                     
                    description: string | null
                     
                    summary: string | null
                     
                    ex_id: number | null
                     
                    ex_params: JSON | null
                     
                    client_id: number | null
                    
    
    }
    
    
        
    export interface _TicketAttachment {
     
     
                    buffer: undefined 
                     
                    id: number 
                     
                    ticket_id: number 
                     
                    filename: string 
                    
    
    }
    
    
    
        
    export interface _TicketAttachmentCreate {
     
     
                    buffer: undefined 
                     
                    ticket_id: number 
                     
                    filename: string 
                    
    
    }
    
    
        
    export interface _TypeFrontComponent {
     
     
                    id: number 
                     
                    component_name: string 
                    
    
    }
    
    
    
        
    export interface _TypeFrontComponentCreate {
     
     
                    component_name: string 
                    
    
    }
    
    
        
    export interface _User {
     
     
                    create_date: Date 
                     
                    role_id: number 
                     
                    id: number 
                     
                    login: string 
                     
                    company: string | null
                     
                    name: string 
                     
                    email: string | null
                     
                    phone: string | null
                     
                    position: string | null
                     
                    hash: string 
                     
                    delete_date: Date | null
                     
                    update_date: Date 
                    
    
    }
    
    
    
        
    export interface _UserCreate {
     
     
                    role_id: number 
                     
                    login: string 
                     
                    company: string | null
                     
                    name: string 
                     
                    email: string | null
                     
                    phone: string | null
                     
                    position: string | null
                     
                    hash: string 
                     
                    delete_date: Date | null
                    
    
    }
    
    
        
    export interface _UserProviderLink {
     
     
                    user_id: number 
                     
                    id: number 
                     
                    provider_id: number 
                    
    
    }
    
    
    
        
    export interface _UserProviderLinkCreate {
     
     
                    user_id: number 
                     
                    provider_id: number 
                    
    
    }
    
    
        
    export interface _UserRole {
     
     
                    delete_date: Date | null
                     
                    id: number 
                     
                    code: string 
                     
                    update_date: Date 
                     
                    description: string | null
                     
                    create_date: Date 
                     
                    name: string 
                    
    
    }
    
    
    
        
    export interface _UserRoleCreate {
     
     
                    delete_date: Date | null
                     
                    code: string 
                     
                    description: string | null
                     
                    name: string 
                    
    
    }
    
    
        
    export interface _UserSession {
     
     
                    expire_date: Date 
                     
                    user_id: number 
                     
                    id: number 
                     
                    token: string 
                     
                    create_date: Date 
                    
    
    }
    
    
    
        
    export interface _UserSessionCreate {
     
     
                    expire_date: Date 
                     
                    user_id: number 
                     
                    token: string 
                    
    
    }
    
    
        
    
    
    export interface _Entities {
    
    
            DELETED_ELS: {
                entitie: _DELETEDELS
                create: _DELETEDELSCreate
                joins: ''
            }

        
            TMP_ELS: {
                entitie: _TMPELS
                create: _TMPELSCreate
                joins: ''
            }

        
            account: {
                entitie: _Account
                create: _AccountCreate
                joins: 'client_account' | 'payment' | 'ticket' | 'order_payment' | 'quiz_answers' | 'provider'
            }

        
            cheque: {
                entitie: _Cheque
                create: _ChequeCreate
                joins: 'cheque_process' | 'order' | 'provider'
            }

        
            cheque_process: {
                entitie: _ChequeProcess
                create: _ChequeProcessCreate
                joins: 'cheque'
            }

        
            client: {
                entitie: _Client
                create: _ClientCreate
                joins: 'client_account' | 'client_session' | 'payment' | 'ticket' | 'client_agreement' | 'client_jnt_account' | 'order' | 'quiz_answers'
            }

        
            client_account: {
                entitie: _ClientAccount
                create: _ClientAccountCreate
                joins: 'client' | 'account' | 'jnt_account'
            }

        
            client_agreement: {
                entitie: _ClientAgreement
                create: _ClientAgreementCreate
                joins: 'client'
            }

        
            client_cards: {
                entitie: _ClientCards
                create: _ClientCardsCreate
                joins: ''
            }

        
            client_code: {
                entitie: _ClientCode
                create: _ClientCodeCreate
                joins: ''
            }

        
            client_jnt_account: {
                entitie: _ClientJntAccount
                create: _ClientJntAccountCreate
                joins: 'client' | 'jnt_account'
            }

        
            client_session: {
                entitie: _ClientSession
                create: _ClientSessionCreate
                joins: 'client'
            }

        
            config: {
                entitie: _Config
                create: _ConfigCreate
                joins: 'config_parameter_group'
            }

        
            config_parameter_group: {
                entitie: _ConfigParameterGroup
                create: _ConfigParameterGroupCreate
                joins: 'config'
            }

        
            data_source: {
                entitie: _DataSource
                create: _DataSourceCreate
                joins: 'provider'
            }

        
            department: {
                entitie: _Department
                create: _DepartmentCreate
                joins: 'provider'
            }

        
            epd: {
                entitie: _Epd
                create: _EpdCreate
                joins: 'jnt_account' | 'provider'
            }

        
            faq: {
                entitie: _Faq
                create: _FaqCreate
                joins: 'faq_provider_link' | 'faq_category'
            }

        
            faq_category: {
                entitie: _FaqCategory
                create: _FaqCategoryCreate
                joins: 'faq'
            }

        
            faq_provider_link: {
                entitie: _FaqProviderLink
                create: _FaqProviderLinkCreate
                joins: 'faq' | 'provider'
            }

        
            jnt_account: {
                entitie: _JntAccount
                create: _JntAccountCreate
                joins: 'client_account' | 'client_jnt_account' | 'payment' | 'order' | 'quiz_answers' | 'epd'
            }

        
            news: {
                entitie: _News
                create: _NewsCreate
                joins: 'news_provider_link' | 'user'
            }

        
            news_provider_link: {
                entitie: _NewsProviderLink
                create: _NewsProviderLinkCreate
                joins: 'news' | 'provider'
            }

        
            order: {
                entitie: _Order
                create: _OrderCreate
                joins: 'order_payment' | 'order_process' | 'cheque' | 'jnt_account' | 'client' | 'paytype'
            }

        
            order_payment: {
                entitie: _OrderPayment
                create: _OrderPaymentCreate
                joins: 'order' | 'account' | 'provider_service_link'
            }

        
            order_process: {
                entitie: _OrderProcess
                create: _OrderProcessCreate
                joins: 'order'
            }

        
            payment: {
                entitie: _Payment
                create: _PaymentCreate
                joins: 'receipt' | 'client' | 'account' | 'jnt_account'
            }

        
            payment_source: {
                entitie: _PaymentSource
                create: _PaymentSourceCreate
                joins: 'provider'
            }

        
            paytype: {
                entitie: _Paytype
                create: _PaytypeCreate
                joins: 'order'
            }

        
            provider: {
                entitie: _Provider
                create: _ProviderCreate
                joins: 'account' | 'department' | 'provider_service_link' | 'provider_setup' | 'user_provider_link' | 'news_provider_link' | 'faq_provider_link' | 'report_attachment' | 'cheque' | 'quiz_provider_link' | 'quiz_answers' | 'provider' | 'data_source' | 'payment_source' | 'receipt_source' | 'epd'
            }

        
            provider_service_link: {
                entitie: _ProviderServiceLink
                create: _ProviderServiceLinkCreate
                joins: 'order_payment' | 'provider'
            }

        
            provider_setup: {
                entitie: _ProviderSetup
                create: _ProviderSetupCreate
                joins: 'provider'
            }

        
            quiz: {
                entitie: _Quiz
                create: _QuizCreate
                joins: 'quiz_provider_link' | 'quiz_answers' | 'quiz_questions' | 'user'
            }

        
            quiz_answers: {
                entitie: _QuizAnswers
                create: _QuizAnswersCreate
                joins: 'quiz' | 'client' | 'provider' | 'account' | 'jnt_account'
            }

        
            quiz_provider_link: {
                entitie: _QuizProviderLink
                create: _QuizProviderLinkCreate
                joins: 'quiz' | 'provider'
            }

        
            quiz_questions: {
                entitie: _QuizQuestions
                create: _QuizQuestionsCreate
                joins: 'quiz_questions' | 'quiz' | 'quiz_type_question'
            }

        
            quiz_type_question: {
                entitie: _QuizTypeQuestion
                create: _QuizTypeQuestionCreate
                joins: 'quiz_questions' | 'type_front_component'
            }

        
            receipt: {
                entitie: _Receipt
                create: _ReceiptCreate
                joins: 'payment'
            }

        
            receipt_source: {
                entitie: _ReceiptSource
                create: _ReceiptSourceCreate
                joins: 'provider'
            }

        
            report_attachment: {
                entitie: _ReportAttachment
                create: _ReportAttachmentCreate
                joins: 'user' | 'reports' | 'provider'
            }

        
            reports: {
                entitie: _Reports
                create: _ReportsCreate
                joins: 'reports_user_link' | 'report_attachment'
            }

        
            reports_user_link: {
                entitie: _ReportsUserLink
                create: _ReportsUserLinkCreate
                joins: 'user' | 'reports'
            }

        
            ticket: {
                entitie: _Ticket
                create: _TicketCreate
                joins: 'client' | 'account'
            }

        
            ticket_attachment: {
                entitie: _TicketAttachment
                create: _TicketAttachmentCreate
                joins: ''
            }

        
            type_front_component: {
                entitie: _TypeFrontComponent
                create: _TypeFrontComponentCreate
                joins: 'quiz_type_question'
            }

        
            user: {
                entitie: _User
                create: _UserCreate
                joins: 'news' | 'user_provider_link' | 'user_session' | 'reports_user_link' | 'report_attachment' | 'quiz' | 'user_role'
            }

        
            user_provider_link: {
                entitie: _UserProviderLink
                create: _UserProviderLinkCreate
                joins: 'user' | 'provider'
            }

        
            user_role: {
                entitie: _UserRole
                create: _UserRoleCreate
                joins: 'user'
            }

        
            user_session: {
                entitie: _UserSession
                create: _UserSessionCreate
                joins: 'user'
            }

        
    
    }
    
    
    