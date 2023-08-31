export default interface Observer {
  id: number;
  update: (value: any) => void;
}
