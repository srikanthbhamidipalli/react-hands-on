export default function Header() {
    return (
        <header>
            <nav class="nav-container">
                <img src="./react-logo.png" className="react-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}