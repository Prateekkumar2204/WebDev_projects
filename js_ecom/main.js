const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    document.head.appendChild(link);
import {products} from "./api/products.js";
import { showProductContainer } from "./homeProductCards.js";

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);

