import { Rating } from '@mantine/core';
interface RatingProps {
    rate: number
}
export default function YellowRating({ rate }: RatingProps) {

    return (

        <Rating defaultValue={rate} />

    )

}