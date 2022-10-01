import { Link } from 'react-router-dom';

export default function Page404(): JSX.Element {
    return (
        <div>
            <h1>Error 404. Page not found.</h1>
            <Link to="/">
                MAIN PAGE
            </Link>
        </div>
    );
}
