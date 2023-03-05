export interface igUser {
    id: string,
    user: string
}

export interface igMedia {
    id: string,
    caption: string,
    media_url?: string,
}

export interface igData {
    data: igMedia[],
    paging: {
        cursor: {
            after: string,
            before: string,
        },
        next: string,
    }
}
