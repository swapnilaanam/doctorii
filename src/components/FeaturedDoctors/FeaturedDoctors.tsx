import Image from "next/image";
import Link from "next/link";
import doctorImage from '../../../public/images/doctor.jpg';

const FeaturedDoctors = () => {
    return (
        <section className="relative -top-14">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid p-6 bg-sky-600 rounded place-content-center sm:p-8">
                        <div className="max-w-md mx-auto text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-semibold text-white sm:text-3xl">Featured Doctors</h2>
                                <p className="mt-4 text-gray-100 text-lg">
                                    The Best Doctors Based On Our Customers Reviews
                                </p>
                            </header>

                            <Link
                                href="/"
                                className="inline-block px-12 py-3 mt-8 text-xl font-medium text-sky-600 transition bg-white border border-gray-100 rounded hover:shadow focus:outline-none focus:ring"
                            >
                                See All Doctors
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-2 gap-4">
                            <li>
                                <Link href="/" className="block group">
                                    <Image src={doctorImage} alt="Featured Doctor" className="w-full" />
                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Simple Watch
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">$150</p>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="block group">
                                    <Image src={doctorImage} alt="Featured Doctor" className="w-full" />
                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Simple Watch
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">$150</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedDoctors;