import { Controller, Post, Body, Get, Delete, Headers } from '@nestjs/common';
import { Order } from './order.interface';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { OrdersService } from './orders.service';
import { BodyId } from './body-id.interface';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService){}
    @Get()
    getPizzaOrders() {
        return this.ordersService.getOrders()
        .pipe(
            map((axiosResponse: AxiosResponse) => {
                return axiosResponse.data;
            })
        );
    }

    @Post()
    async createPizzaOrder(@Body() order: Order, @Headers() headers ) {
        return this.ordersService.createOrder(order, headers.authorization)
        .pipe(
            map((axiosResponse: AxiosResponse) => {
                return axiosResponse.data;
            })
        );
    }

    @Delete()
    async deletePizzaOrder(@Body() bodyId: BodyId, @Headers() headers) {
        return this.ordersService.deleteOrder(bodyId.id, headers.authorization)
        .pipe(
            map((axiosResponse: AxiosResponse) => {
                return axiosResponse.data;
            })
        );
    }
}
