
const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <>
            <footer className="bg-cf-light-gray text-white">
                <div className="container mx-auto py-8 text-center">
                    &copy; {currentYear} Nikos React Assignment, No Rights Reserved.
                </div>
            </footer>
        </>
    )
}
export default Footer;