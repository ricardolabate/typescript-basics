class MyMap<T>{
    private map: {[key: string]: T} = {};
    setItem(key: string, item: T): any{
        this.map[key] = item;
    };
    getItem(key: string){
        return this.map[key];
    };
    clear(): any{
        this.map = {};
    }
    printMap(): any{
        for(let key in this.map){
            console.log(key, this.map[key]);
        }
    };
}

console.log("EXERCISE");

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 10);
numberMap.setItem('bananas', 2);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();

