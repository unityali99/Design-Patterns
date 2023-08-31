import ExcelReader from "./classes/ExcelReader";
import NumbersReader from "./classes/NumbersReader";
import QuickBookReader from "./classes/QuickBookReader";

const quickBooks = new QuickBookReader(null);
const numbersReader = new NumbersReader(quickBooks);
const excelReader = new ExcelReader(numbersReader);

excelReader.read("filename.qbw");
