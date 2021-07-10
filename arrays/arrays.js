class Student {
  constructor() {
    this.length = 1;
    this.data = { name: "asish" };
  }
  get(index) {
    this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastitem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    return lastitem;
  }
}

const st = new Student();
st.push("sattu");
st.push("swaraj");
// st.pop();
// st.get();
console.log(st);
