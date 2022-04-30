import { Customer } from "./customer.model";
import { OrderItem } from "./order-Item.model";
import { OrderLabor } from "./order-labor.model";
import { OrderStatus } from "../enum/order-status";

export interface Order {

    id?: number;
    creationDate?: Date;
    status: OrderStatus;
    customer: Customer;
    items?: OrderItem[];
    labors?: OrderLabor[];
    amount?: number;
    customerName?: string;
}
