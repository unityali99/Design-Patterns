export default interface Iterator<T> {
  hasNext: () => boolean;
  next: () => void;
  current: () => T;
}
