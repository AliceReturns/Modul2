import IOrder from "../Interfaces/IOrder";
import IPizza from "../Interfaces/IPizza";
import OrderStatus from "../Interfaces/OrderStatus";

class Order implements IOrder {
  _orderNumber: number;
  _customerName: string;
  _pizzen: IPizza[] = [];
  _status: OrderStatus;

  constructor(orderNumber: number, customerName: string, status: OrderStatus) {
    this._orderNumber = orderNumber;
    this._customerName = customerName;
    this._status = status;
    // this.cancel = () => {
    //   if (this._status === OrderStatus.Created) {
    //     this._status = OrderStatus.Canceled;
    //     return true;
    //   }
    //   return false;
    // };
  }

  cancel(): boolean {
    if (OrderStatus.Created) {
      return false;
    } else {
      this._status = OrderStatus.Canceled;
      return true;
    }
  }
}

export default Order;
