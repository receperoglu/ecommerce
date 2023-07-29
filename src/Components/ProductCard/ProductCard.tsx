import { FC } from "react";
import { Badge, Card, Group, Text, Spoiler, Flex } from '@mantine/core';
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom";

import { ProductCardProps } from "./Model"
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import YellowRating from "../YellowRating/YellowRating";

const ProductCard: FC<ProductCardProps> = ({ to, onButtonClick, product }) => {
    return (
        <Link to={to} style={{ textDecoration: "none" }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Flex align="center" justify="center">
                    <Card.Section>
                        <LazyLoadImage
                            src={product.image}
                            height={160}
                            alt={product.title}
                        />
                    </Card.Section>
                </Flex>

                <Group position="apart" mt="md" mb="xs">


                    <Spoiler maxHeight={20} showLabel="" hideLabel="Hide">

                        <Text weight={500}>{product.title}</Text>

                    </Spoiler>

                    <YellowRating rate={product.rating.rate} />
                    ({product.rating.count} )
                    <Badge color="pink" variant="light">
                        {product.category}
                    </Badge>
                </Group>


                <Spoiler maxHeight={50} showLabel="" hideLabel="Hide">
                    {product.description}

                </Spoiler>


                <PrimaryButton Title="Add to Basket" Event={onButtonClick} />
            </Card>
        </Link>
    );
};

export default ProductCard;
