let { getExtension, fsReadFileAsync } = require("xltpl/lib/imageref");

class Item {
  constructor(name, category, price, count) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.count = count;
    this.date = new Date();
  }
}

function getItems() {
  let items = [];
  let item;
  item = new Item("萝卜", "蔬菜", 1.11, 5);
  items.push(item);
  item = new Item("苹果", "水果", 2.22, 4);
  items.push(item);
  item = new Item("香蕉", "水果", 3.33, 3);
  items.push(item);
  item = new Item("白菜", "蔬菜", 1.11, 2);
  items.push(item);
  item = new Item("白菜", "蔬菜", 1.11, 2);
  items.push(item);
  return items;
}

async function getPersons() {
  let now = new Date();
  let items = getItems();
  let img0 = "./images/slika.png";
  let buffer = await fsReadFileAsync(img0);
  let extension = getExtension(img0);
  console.log(extension);
  let img2 = { buffer, extension };
  let person0 = {
    address: "福建行中书省福宁州傲龙山庄",
    name: "龙傲天",
    fm: 178,
    date: now,
    img: img2
  };
  let person1 = {
    address: "Somewhere over the rainbow",
    name: "Hello Wizard",
    fm: 156,
    date: now,
    img: img2
  };
  let person2 = {
    address: "No Where",
    name: "No Name",
    fm: 333,
    date: now,
    img: img2
  };
  person0["rows"] = items;
  person1["rows"] = items;
  person2["rows"] = items;
  person0["items"] = items;
  person1["items"] = items;
  person2["items"] = items;
  return [person0, person1, person2];
}

module.exports = { getItems, getPersons };
