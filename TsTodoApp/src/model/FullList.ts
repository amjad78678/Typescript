class ListItem {
  _id: string;
  _item: string;
  _checked: boolean;

  constructor(itemObj: { _id: string; _item: string; _checked: boolean }) {
    this._id = itemObj._id;
    this._item = itemObj._item;
    this._checked = itemObj._checked;
  }
}

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  set list(value) {
    this._list = value;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;

    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);

    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem({
        _id: itemObj._id,
        _item: itemObj._item,
        _checked: itemObj._checked,
      });
      this.addItem(newListItem); // Use 'this' to refer to the current instance
    });
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item._id !== id);
    this.save();
  }
}
