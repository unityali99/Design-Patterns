import StatusBar from "./classes/StatusBar";
import Stock from "./classes/Stock";
import StockListView from "./classes/StockListView";

const stock1 = new Stock("A", 10);
const stock2 = new Stock("B", 6);
const stock3 = new Stock("C", 42);

const statusBar = new StatusBar();
const stockListView = new StockListView();

statusBar.addStock(stock1);
statusBar.addStock(stock2);

stockListView.addStock(stock1);
stockListView.addStock(stock2);
stockListView.addStock(stock3);

stock1.setPrice = 5;
// stock2.setPrice = 6;
// stock3.setPrice = 7;
