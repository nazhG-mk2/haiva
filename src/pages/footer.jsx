const Footer = () => {
    return (
        <>
            <div className="bg-white"><br /></div>
            <footer className="flex flex-col px-24 md:px-0 items-center bg-dashboard-dark">
                <img className="w-auto antialiased hidden md:block h-5 mx-auto my-4" src="./logo.png" alt="" />
                <div className="flex flex-wrap w-full justify-between text-xs font-semibold items-center text-center py-8 md:pt-2">
                    <span className="flex-1"><a href="#">Product</a></span>
                    <span className="flex-1"><a href="#">Features</a></span>
                    <span className="flex-1"><a href="#">Resources</a></span>
                    <span className="text-lg flex-[2] md:hidden"><a href="/" title="Dashboard">
                        <img className="w-auto antialiased h-5 mx-auto" src="./logo.png" alt="" />
                    </a></span>
                    <span className="flex-1"><a href="about">About</a></span>
                    <span className="flex-1"><a href="#">Blog</a></span>
                    <span className="flex-1"><a href="#">Support</a></span>
                </div>
                <hr className="border-b-0 border-gray-900 border-opacity-70 w-full" />
                <span className="text-xs py-8">
                    © 2024 — 2030 InnerEcho Inc. All Rights Reserved.
                </span>
            </footer>
        </>
    );
}

export default Footer;