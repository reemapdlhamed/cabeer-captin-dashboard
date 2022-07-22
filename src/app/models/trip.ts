export class Trip {
  data: TripeDate;
}
class TripeDate {
  totalCost: number;
  clientPaid: number;
  cashBack: number;
  cabeerWallet: number;
  applicationProfit: number;
  officeProfit: number;
  id: number;
  tripStatus: number;
  startAddress: string;
  startLatitude: number;
  startLongitude: number;
  endAddress: string;
  endLatitude: number;
  endLongitude: number;
  acceptedDate: any;
  canceledDate: any;
  driverArrivedDate: any;
  startDate: any;
  finishedDate: any;
  estimatedTime: number;
  paidFromWallet: number;
  waitingTime: any;
  distancePerKm: any;
  pricePerKm: number;
  paymentMethod: number;
  userId: string;
  driverId: any;
}
