type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public name:string,
        public price:number,
        public size:Size,
    ) {}

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                        if ( (this[key] as string ).length <= 0 ) throw Error(`${ key} is empty`);
                    break;
                case 'number':
                        if ( (this[key] as number ) <= 0 ) throw Error(`${ key} is empty`);
                    break;
                default:
                        throw Error(`${ typeof this[key]} is not valid - ${key}`);
                    break;
            }
        }
        return true
    }

    toString(){
        if ( !this.isProductReady() ) return;
        return `${this.name} price : ${this.price}, size : ${this.size}`
    }
}

(()=>{
    const bluePants = new Product('Pants', 10, 'M')
    console.log(bluePants.toString());
})();