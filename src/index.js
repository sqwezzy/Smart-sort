class Sorter {
  constructor() {
    this.elements = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    this.helpArr = [];
    indices = indices.sort((a, b) => a - b);

    indices.forEach((element, index) => {
      this.helpArr[index] = this.elements[element];
    });

    this.helpArr.sort(this.compareFunction);
    this.helpArr.sort(this.compareFunction);

    indices.forEach((element, index) => {
      this.elements[element] = this.helpArr[index];
    })

  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;