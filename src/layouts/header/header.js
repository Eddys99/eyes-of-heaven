import '../../assets/styles/header.css';

export default function Header() {

    return (
        <header>
            <div id = "nav-bar">
                <nav>
                    <ul>
                        <li>
                            <a href="/auth"> Login </a>
                        </li>
                        <li>
                            <a href="/register"> Register </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
