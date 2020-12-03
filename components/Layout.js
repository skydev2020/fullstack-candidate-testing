import Head from 'next/head';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Footer from './Footer';

const Layout = (props) => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>{process.env.appName}</title>
            <meta name="author" content="mohamed ziada 2020-11-29"/>
        </Head>
        <Navbar/>
        <SearchBar/>
        <div className="w-full flex flex-wrap mx-auto pt-2 lg:pt-2 mt-2 mb-6 px-4">
            {props.children}
        </div>

        <Footer/>
    </div>
);

export default Layout;