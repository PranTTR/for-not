import Link from 'next/link'

const Header = () => {
    return (
        <ul>
            <li>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </li>
            <li>
                <Link href="/blog/hello-world">
                    <a>Blog Post</a>
                </Link>
            </li>
            <li>
                <Link href="/post/hello">
                    <a>Dynamic router with basic PID</a>
                </Link>
            </li>
            <li>
                <Link href="/post/money?username=Pran&password=123456">
                    <a>Dynamic router with query param</a>
                </Link>
            </li>
        </ul>
    )
}

export default Header