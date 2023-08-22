export default interface EncryptionAlgorithm {
  encrypt: (chat: string) => void;
  decrypt: (chat: string) => void;
}
