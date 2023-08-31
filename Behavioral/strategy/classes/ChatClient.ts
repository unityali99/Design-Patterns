import EncryptionAlgorithm from "../interfaces/EncryptionAlgorithm";

export default class ChatClient {
  private encryptionAlgo: EncryptionAlgorithm;

  constructor(encryptionAlgo: EncryptionAlgorithm) {
    this.encryptionAlgo = encryptionAlgo;
  }

  send = (chat: string) => {
    this.encryptionAlgo.encrypt(chat);
  };
}
