import Logger from "./classes/Logger";

const logger = Logger.getInstance();

logger.addLog("first log");
logger.addLog("second log");
logger.addLog("third log");
logger.log();

const logger2 = Logger.getInstance();

logger2.log();
