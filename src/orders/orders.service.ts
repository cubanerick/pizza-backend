import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Order } from './order.interface';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class OrdersService {

    constructor(private httpService: HttpService) {}

    getOrders():Observable<AxiosResponse<Order[]>> {
        return this.httpService.get('https://order-pizza-api.herokuapp.com/api/orders');
    }

    createOrder(order: Order, token: string): Observable<AxiosResponse<Order>> {
        const headersRequest = {
            'Authorization': `${token}`,
        };
        return this.httpService.post('https://order-pizza-api.herokuapp.com/api/orders', {
            Crust: order.Crust,
            Flavor: order.Flavor,
            Size: order.Size,
            Table_No: order.Table_No
        }, { headers: headersRequest });
    }

    deleteOrder(id: string, token: string): Observable<AxiosResponse<void>> {
        const headersRequest = {
            'Authorization': `${token}`,
        };
        return this.httpService.delete(`https://order-pizza-api.herokuapp.com/api/orders/${id}`,{ headers: headersRequest });
    }
}
