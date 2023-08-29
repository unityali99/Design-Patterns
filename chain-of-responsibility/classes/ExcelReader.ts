import DataReader from "./DataReader";

export default class ExcelReader extends DataReader {
  protected doRead = (fileName: string) => {
    if (fileName.endsWith(".xls")) {
      console.log(`Reading data from an Excel spreadsheet`);
      return true;
    }
    return false;
  };
}
