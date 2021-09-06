import { useRouter } from 'next/router';

const Destination = () => {
    const router = useRouter();
    const { id } = router.query;

    return <p>Destination: { id }</p>
}

export default Destination;