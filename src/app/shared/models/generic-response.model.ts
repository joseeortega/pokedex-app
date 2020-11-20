export interface GenericResponse {
    status: string;
    code: string;
    data: any;
    message: string;
}

export interface GenericResponsePageable {
    count: number;
    next: string;
    previous: string;
    results: any;
}
