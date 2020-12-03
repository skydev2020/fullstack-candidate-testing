const Footer = () => {
    return (
        <footer>
            <div className="lg:w-2/5 w-full flex flex-col mb-2">
                <h3 className="text-lg">About us</h3>
                <p className="text-sm">We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</p>
                <p className="text-sm">All copyrights reserved © 2020 - Health Explore</p>
            </div>
            <div className="lg:w-2/5 w-full flex flex-col mb-2">
                <h3 className="text-lg">Sitemap</h3>
                <a href="#">Nurces</a><a href="#">Employes</a><a href="#">Social Networking</a>
                <a href="#">Jobs</a>
            </div>
            <div className="lg:w-1/5 w-full flex flex-col mb-2">
                <h3 className="text-lg">Privacy Policy</h3>
                <a href="#">Terms of Use</a><a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
            </div>
        </footer>
    );
}

export default Footer;