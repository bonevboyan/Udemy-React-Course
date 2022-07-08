import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
    {
        id: "p1",
        title: "Test",
        price: 6,
        description: "This is a first product - amazing!",
    },
    {
        id: "p2",
        title: "Book",
        price: 9.99,
        description: "A page turner!",
    },
    {
        id: "p3",
        title: "Crocodile",
        price: 34.99,
        description: "Not an alligator!",
    },
];

const Products = (props) => {
    const products = DUMMY_PRODUCTS.map((product) => (
        <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
        />
    ));

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>{products}</ul>
        </section>
    );
};

export default Products;
