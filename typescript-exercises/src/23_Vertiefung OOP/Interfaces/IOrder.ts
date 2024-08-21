import IPizza from "./IPizza";
import OrderStatus from "./OrderStatus";

interface IOrder {
  _orderNumber: number;
  _customerName: string;
  _pizzen: IPizza[]; // Array von IPizza-Objekten
  _status: OrderStatus;

  //* Methoden :: Schreibweise (wie bei type ): Methodenname: () für (parameter) => Rückgabedatentyp
  cancel: () => boolean;
}

export default IOrder;
