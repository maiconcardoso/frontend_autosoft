import { Provider } from "./provider.model";

export interface Product {
    id?: number;
    name: string;
    factoryCode: string;
    groupFamily: string;
    subGroup: string;
    application: string;
    brand: string;
    price: number;
}
