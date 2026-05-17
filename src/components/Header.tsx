const Header = () => {
    return (
        <>
            <header className="bg-cf-light-fuxhia fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <a href="/">
                        <img src="https://usersnap.com/blog/wp-content/uploads/2021/03/7-Common-Types-of-Software-Testing@1x.png"
                             alt="SW Testing Logo" className="my-5 h-20"/>
                    </a>
                    <h1 className="text-cf-light-gray text-4xl font bold">
                        SOFTWARE TESTING RESULTS
                    </h1>
                    <nav className="flex gap-4 text-white font-medium">
                        <a href="/">Home</a>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;
