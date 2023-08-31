import BrowseHistory from "./classes/BrowseHistory";

// An array of any type is accepted in BrowseHistory class
const browseHistory = new BrowseHistory<{ routeParam: string }>();

browseHistory.push({ routeParam: "thisisarouteparam" });
browseHistory.push({ routeParam: "thisisarouteparam" });
browseHistory.push({ routeParam: "thisisarouteparam" });
browseHistory.push({ routeParam: "thisisarouteparam" });

const iterator = browseHistory.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.current());
  iterator.next();
}
