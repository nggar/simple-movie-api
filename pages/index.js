import axios from 'axios';
import Hero from '../components/Hero';
import Popular from '../components/Popular';
import { server } from '../config/index';

export default function Home({ movies }) {
    console.log(movies);
    return (
        <div className="bg-gray-700">
            <Hero />
            <Popular movies={movies.results} />
        </div>
    );
}

export async function getStaticProps() {
    const response = await axios.get(
        `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    );

    const movies = response.data;

    return {
        props: { movies },
    };
}
