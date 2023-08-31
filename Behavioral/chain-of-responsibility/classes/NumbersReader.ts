import DataReader from "./DataReader";

export default class NumbersReader extends DataReader {
  protected doRead = (fileName: string) => {
    if (fileName.endsWith(".numbers")) {
      console.log(`Reading data from a Numbers spreadsheet`);
      return true;
    }
    return false;
  };
}
