import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, Loader } from '@mantine/core';
import Card from './Card';
import { useSelector } from 'react-redux';
import { Product } from '../../Models/Product';


export default function Slide() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const { data, loading } = useSelector((state: { products: { data: Product[]; loading: boolean } }) => state.products);
    const slides = data.slice(0, 6).map((item: CardProps) => (
        <Carousel.Slide key={item.id}>
            <Card {...item} />
        </Carousel.Slide>
    ));
    if (loading) {
        return <Loader size="xl" variant="dots" />;
    }

    return (
        <Carousel
            slideSize="50%"
            breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
            slideGap="xl"
            align="start"
            slidesToScroll={mobile ? 1 : 2}
        >
            {slides}
        </Carousel>
    );
}