import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Product } from "../../Models/Product";
import { fetchProductsAsync } from "../../libs/store/slices/productsSlice";
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from "../../libs/store";
import { AnyAction } from "@reduxjs/toolkit";
import { Grid,Loader } from "@mantine/core";

export default function Products() {
    const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
    const { data, loading } = useSelector((state: { products: { data: Product[]; loading: boolean } }) => state.products);

    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);

    const addToCartHandler = (product: Product) => {
        console.log("sepete ekle ", product)
    };

    if (loading) {
        return <Loader size="xl" variant="dots" />;

    }

    return (

        <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
            {data.map((product: Product) => (
                <Grid.Col span={4}><ProductCard
                    to={`/products/${product.id}`}
                    key={product.id}
                    product={{
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        description: product.description,
                        category: product.category,
                        image: product.image,
                        rating: product.rating,
                    }}
                    onButtonClick={() => addToCartHandler(product)}
                /></Grid.Col>
            ))}
        </Grid>

    );
}
