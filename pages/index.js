import Layout from '../components/Layout';
import Link from 'next/link';
import SideBar from '../components/SideBar';
import Prices from '../components/Prices';



const Home = (props) => (

    <Layout>
        <SideBar/>
        <div className="w-full lg:w-4/5 lg:pl-2 lg:mt-0 text-gray-900 leading-normal">

            <div className="py-2 px-4 bg-white rounded-sm shadow">

                <div
                    className="flex lg:flex-row flex-col mb-2 lg:items-center py-2 items-start space-y-2 justify-between text-sm text-gray-600">
                    <div>
                        <span className="font-bold text-gray-900">7,753</span> job postings
                    </div>
                    <div className="flex lg:space-x-4 pt-2 lg:flex-row flex-col">
                        <p className="font-xs text-gray-400 flex-col">Sort by</p>

                        <div className="flex lg:pt-0 pt-2 space-x-4 item-start">
                            <p className="cursor-pointer ">Location</p>
                            <p className="cursor-pointer ">Role </p>
                            <p className="cursor-pointer ">Eduction </p>
                            <p className="cursor-pointer ">Experience </p>
                        </div>
                    </div>
                </div>


                <div>
                    <h1>Welcome to BitzPrice</h1>
                    <p>Check current Bitcoin rate</p>
                    <Prices bpi={props.bpi}/>
                </div>


                <div>
                    <ul className="flex flex-col space-y-4 p-2 ">

                        <li className="flex w-full items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    MA
                                </div>
                                <p className="text-gray-600">8 jobs for Mammoth Hospital</p>
                            </div>
                        </li>

                        <li className="flex w-full items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    FO
                                </div>
                                <p className="text-gray-600">7 jobs for Fountain Valley Rgnl Hosp And Med Ctr -
                                    Euclid</p>
                            </div>
                        </li>

                        <li className="flex w-full items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    ST
                                </div>
                                <p className="text-gray-600">6 jobs for Stanislaus Surgical Hospital</p></div>
                        </li>

                        <li className="flex w-full items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    EA
                                </div>
                                <p className="text-gray-600">8 jobs for Eastside Medical Center</p></div>
                        </li>

                        <li className="flex w-full items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    CA
                                </div>
                                <p className="text-gray-600">7 jobs for Candler County Hospital</p></div>
                        </li>

                        <li className="flex w-full items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    JE
                                </div>
                                <p className="text-gray-600">7 jobs for Jerold Phelps Community Hospital</p></div>
                        </li>

                        <li className="flex w-full items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    PO
                                </div>
                                <p className="text-gray-600">8 jobs for Porterville Developmental Center</p></div>
                        </li>

                        <li className="flex w-full items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    MI
                                </div>
                                <p className="text-gray-600">9 jobs for Miller County Hospital</p></div>
                        </li>

                        <li className="flex w-full items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    PI
                                </div>
                                <p className="text-gray-600">5 jobs for Piedmont Rockdale Hospital</p></div>
                        </li>

                        <li className="flex w-full items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    JE
                                </div>
                                <p className="text-gray-600">2 jobs for Jefferson Hospital</p></div>
                        </li>
                        <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    UN
                                </div>
                                <p className="text-gray-600">4 jobs for Union General Hospital</p></div>
                        </li>
                        <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    TU
                                </div>
                                <p className="text-gray-600">5 jobs for Tulane - Lakeside Hospital</p></div>
                        </li>
                        <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    WA
                                </div>
                                <p className="text-gray-600">4 jobs for Warm Springs Medical Center</p></div>
                        </li>
                        <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    ST
                                </div>
                                <p className="text-gray-600">6 jobs for St. James Behavioral Health Hospital</p>
                            </div>
                        </li>
                        <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    TU
                                </div>
                                <p className="text-gray-600">6 jobs for Tulane Medical Center</p></div>
                        </li>
                        <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    FR
                                </div>
                                <p className="text-gray-600">5 jobs for Franklin Foundation Hospital</p></div>
                        </li>
                        <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    PH
                                </div>
                                <p className="text-gray-600">4 jobs for Physicians Medical Center</p></div>
                        </li>
                        <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    IN
                                </div>
                                <p className="text-gray-600">5 jobs for Indiana University Health Transplant</p>
                            </div>
                        </li>
                        <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    AB
                                </div>
                                <p className="text-gray-600">6 jobs for Abrom Kaplan Memorial Hospital</p></div>
                        </li>
                        <li className="w-full space-y-2 flex flex-col items-center cursor-pointer">
                            <div className="w-full space-x-4 flex item-center">
                                <div
                                    className="flex flex-shrink-0 bg-gray-300 shadow  text-white font-black text-md p-1 items-center justify-center rounded-lg h-9 w-9">
                                    ST
                                </div>
                                <p className="text-gray-600">8 jobs for St. James Parish Hospital</p></div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </Layout>
);

Home.getInitialProps = async function () {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {

        bpi: data.bpi
    };
};


export default Home;