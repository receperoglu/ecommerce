import { Button } from '@mantine/core';

interface PrimaryButtonProp {
    Title: string;
    Event: () => void;
}

export default function PrimaryButton({ Title, Event }: PrimaryButtonProp) {

    return (
        <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={Event}>
            {Title}
        </Button>

    )

}