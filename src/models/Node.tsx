export default class Node {
  value = null;
  prev = null;
  next = null;

  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
