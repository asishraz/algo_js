class Data {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(item) {
    return this.data[item];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastitem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastitem;
  }

  delete(index) {
    const item = this.data[index];  //which item, we want to delte
    this.shiftitems(index);
  }

  shiftitems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const dt = new Data();
dt.push("hi");
dt.push("hello");
dt.push("bye");
// dt.pop();
dt.delete(0);
console.log(dt);
