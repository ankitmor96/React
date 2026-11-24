import { useSelector } from "react-redux";

const DashBoard = () => {

    const products = useSelector(
        (state) => state.inventory.products
    );

    const totalProducts = products.length;

    const totalPrice = products.reduce((total, product) => {
        return total + (product.price * product.qty);
    }, 0);

    const highStock = products.filter(
        (product) => product.qty > 10
    ).length;

    const lowStock = products.filter(
        (product) => product.qty <= 10
    ).length;

    return (
        <div>
            <h3>TotalProducts: {totalProducts}</h3>
            <h3>TotalPrice: ₹{totalPrice}</h3>
            <h3>HighStock: {highStock}</h3>
            <h3>LowStock: {lowStock}</h3>
        </div>
    );
};

export default DashBoard;