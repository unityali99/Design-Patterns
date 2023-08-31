import EncryptionAlgorithm from "../interfaces/EncryptionAlgorithm";

export default class AES implements EncryptionAlgorithm {
  encrypt = (chat: string) => {
    console.log(`Encrypting (${chat}) via AES`);
  };
  decrypt = (chat: string) => {
    console.log(`Encrypting (${chat}) via AES`);
  };
}
