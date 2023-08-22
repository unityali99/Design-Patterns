import EncryptionAlgorithm from "../interfaces/EncryptionAlgorithm";

export default class DES implements EncryptionAlgorithm {
  encrypt = (chat: string) => {
    console.log(`Encrypting (${chat}) via DES`);
  };
  decrypt = (chat: string) => {
    console.log(`Encrypting (${chat}) via DES`);
  };
}
