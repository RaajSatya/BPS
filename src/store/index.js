import { configureStore } from "@reduxjs/toolkit";
import AuthSlice, { getAsyncStorage } from "./slices/AuthSlice";
import ProductSlices from "./slices/ProductSlices";
import WishListSlice from "./slices/WishListSlice";
import CartSlice from "./slices/CartSlice";
import AddressSlice from "./slices/AddressSlice";
import CategorySilce from "./slices/CategorySilce";
import ThemeSlice, { syncThemeMode } from "./slices/ThemeSlice";
import OrderSlice from "./slices/OrderSlice";
import TransactionSlice from "./slices/TransactionSlice";
import SliderSlice from "./slices/SliderSlice";

const store = configureStore({
    reducer: {
        AUTH: AuthSlice,
        SliderStore: SliderSlice,
        Products: ProductSlices,
        CategoryStore: CategorySilce,
        WishListStore: WishListSlice,
        CartStore: CartSlice,
        OrderStore: OrderSlice,
        TransactionStore: TransactionSlice,
        AddressesStore: AddressSlice,
        ThemeStore: ThemeSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})


store.dispatch(getAsyncStorage());
store.dispatch(syncThemeMode())
export default store