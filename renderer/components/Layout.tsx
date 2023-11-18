const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <div className="flex justify-between bg-white">
                    <div>SMV</div>
                    <div>Spendenlauf-App</div>
                    <div>Version: a0.1</div>
                </div>
            </nav>
            <main>{children}</main>
        </>
    )
}
export default Layout
