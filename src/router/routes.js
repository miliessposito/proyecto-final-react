import { CartContainer } from "../components/common/Cart/CartContainer";
import { Checkout } from "../components/pages/chekout/Checkout";
import { CheckoutContainer } from "../components/pages/chekout/CheckoutContainer";
import { ItemDetailContainer } from "../components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer,
    },
    {
        id: "category",
        path: "/category/:category",
        Element: ItemListContainer,
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer,
    },
    {
        id: "itemDetail",
        path: "/item/:id",
        Element: ItemDetailContainer,
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer
    }
]