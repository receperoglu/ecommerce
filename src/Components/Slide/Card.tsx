
import { Button, Paper, Text, Title } from '@mantine/core';
import { SlideStyle } from './SlideStyle';

export default function Card({ image, title, category }: CardProps) {

    const { classes } = SlideStyle();


    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${image});` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
            <Button variant="white" color="dark">
                Go to Product
            </Button>
        </Paper>
    );
}


