const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <div className="flex justify-evenly bg-secondary-second">
                    <div>SMV</div>
                    <div>Spendenlauf-App</div>
                    <div>Version: a0.2</div>
                </div>
            </nav>
            <main>{children}</main>
            <footer>
                <div className="bg-secondary-second flex justify-evenly">
                    Ende
                </div>
            </footer>
        </>
    )
}
export default Layout
