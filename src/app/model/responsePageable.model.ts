export interface ResponsePageable {
    content: any[];
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: number[];
    sort: number;
    totalElements: number;
    totalPages: number;
}