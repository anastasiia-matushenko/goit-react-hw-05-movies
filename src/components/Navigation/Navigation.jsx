import { Link, List } from "./Navigation.styled";

export const Navigation = () => {
    return (
        <nav>
            <List>
                <li>
                    <Link to='/' end>Home</Link>
                </li>
                <li>
                    <Link to='movies'>Movies</Link>
                </li>
            </List>
        </nav>
    );
};