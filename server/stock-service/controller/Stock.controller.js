import StockModel from "../model/Stock.Model.js";
import Stocks from "../data/StocksData.js";

export const getAllStock = async (req, res) => {
        try {
                const stocks = await StockModel.find({});
                res.json(stocks);
        } catch (error) {
                console.error(error);
                res.status(500).send("Failed to fetch stocks");
        }
}
export const getStockById = async (req, res) => {
        try {
                const stockId = req.params.stockId;
                const stock = await StockModel.findById(stockId);
                if (!stock) return res.status(404).send("The stock with the given ID does not exist");
                res.json(stock);
        } catch (error) {
                console.error(error);
                res.status(500).send("Failed to fetch the stock");
        }

}
//?Controller to add all stocks at once
// export const addallStock = async (req, res) => {
//         //to insert stocks data into the dataset
//         let dummyStocks = Stocks;
//         dummyStocks.forEach((stock) => {
//           let newStock = new StockModel({
//             company: stock.company,
//             open: stock.open,
//             high: stock.high,
//             low: stock.low,
//             prev_close: stock.prevclose,
//             price_change: stock.price_change,
//             volume: stock.volume,
//           });
//           newStock.save();
//         });
//         res.send("Stocks Data inserted in the database");
//       };