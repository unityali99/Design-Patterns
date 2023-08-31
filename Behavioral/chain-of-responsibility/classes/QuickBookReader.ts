import DataReader from "./DataReader";

export default class QuickBookReader extends DataReader {
  protected doRead = (fileName: string) => {
    if (fileName.endsWith(".qbw")) {
      console.log("Reading data from a QuickBooks file");
      return true;
    }
    return false;
  };
}
