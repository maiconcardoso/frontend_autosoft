import { Labor } from "./labor.model";
import { Order } from "./order.model";

export interface OrderLabor{

    id?: number;
    labor?: Labor;
    quantity: number;
    order: Order;
    subTotal?: number
}
