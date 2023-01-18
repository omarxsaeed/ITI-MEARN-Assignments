export interface IProduct{
    id: number;
    name: string;
    quantity: number;
    price: number;
    imgURL: string;
    categoryID: number
}
class test {
    products: IProduct[] = [
        {
            id: 1,
            name: "Lenvo thinpad X230",
            price: 100,
            quantity: 10,
            categoryID: 1,
            imgURL: "https://picsum.photos/200"
        },
        {
            id: 2,
            name: "Dell",
            price: 200,
            quantity: 20,
            categoryID: 1,
            imgURL: "https://picsum.photos/200"
        },
        {
            id: 3,
            name: "Lenovo Tab",
            price: 100,
            quantity: 10,
            categoryID: 2,
            imgURL: "https://picsum.photos/200"
        },
        {
            id: 4,
            name: "Samsung Tab",
            price: 100,
            quantity: 10,
            categoryID: 2,
            imgURL: "https://picsum.photos/200"
        },
        {
            id: 5,
            name: "Samsung note 10",
            price: 100,
            quantity: 10,
            categoryID: 3,
            imgURL: "https://picsum.photos/200"
        },
        {
            id: 6,
            name: "Samsung S10",
            price: 100,
            quantity: 10,
            categoryID: 3,
            imgURL: "https://picsum.photos/200"
        },
        {
            id: 7,
            name: "tochiba Utlra",
            price: 60000,
            quantity: 14,
            imgURL: "https://fakeimg.pl/200x100",
            categoryID: 4
        },
        {
            id: 8,
            name: "Apple Utlra",
            price: 7800060,
            quantity: 6,
            imgURL: "https://fakeimg.pl/200x100",
            categoryID: 4
        },
        {
            id: 9,
            name: "test Utlra",
            price: 7800060,
            quantity: 3,
            imgURL: "https://fakeimg.pl/200x100",
            categoryID: 4
        },
        {
            id: 10,
            name: "jhgfjxz",
            imgURL: "http://xgcbmxgvnbx",
            quantity: 33,
            price: 44444444,
            categoryID: 1
        },
        {
            name: "fsdjhfgsdjhkgfsh",
            price: 7800060,
            quantity: 3,
            imgURL: "https://fakeimg.pl/200x100",
            categoryID: 4,
            id: 11
        }
    ]
}