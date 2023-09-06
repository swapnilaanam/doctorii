import Image from "next/image";
import Link from "next/link";
import categoryImage from '../../../../public/images/doctor.jpg';

const page = () => {
    return (
        <section>
            <div className="max-w-7xl px-4 py-8 mx-auto sm:py-32 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-stretch">
                    <div className="grid p-6 bg-sky-600 rounded place-content-center sm:p-8">
                        <div className="max-w-md mx-auto text-center lg:text-left">
                            <header>
                                <h2 className="text-3xl font-semibold text-white sm:text-3xl">Doctor Categories</h2>
                            </header>
                        </div>
                    </div>

                    <div className="lg:col-span-3 lg:py-8">
                        <ul className="grid grid-cols-4 gap-4">
                            <li>
                                <Link href="#" className="group relative block bg-black">
                                    <Image
                                        alt="Developer"
                                        src={categoryImage}
                                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                    />

                                    <div className="relative p-4 sm:p-6 lg:p-8">
                                        <div className="mt-32 sm:mt-48 lg:mt-64">
                                            <div
                                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                            >
                                                <p className="text-xl font-semibold text-white">
                                                    Regular Doctor
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="group relative block bg-black">
                                    <Image
                                        alt="Developer"
                                        src={categoryImage}
                                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                    />

                                    <div className="relative p-4 sm:p-6 lg:p-8">
                                        <div className="mt-32 sm:mt-48 lg:mt-64">
                                            <div
                                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                            >
                                                <p className="text-xl font-semibold text-white">
                                                    Specialist Doctor
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="group relative block bg-black">
                                    <Image
                                        alt="Developer"
                                        src={categoryImage}
                                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                    />

                                    <div className="relative p-4 sm:p-6 lg:p-8">
                                        <div className="mt-32 sm:mt-48 lg:mt-64">
                                            <div
                                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                            >
                                                <p className="text-xl font-semibold text-white">
                                                    Emergency Doctor
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="group relative block bg-black">
                                    <Image
                                        alt="Developer"
                                        src={categoryImage}
                                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                    />

                                    <div className="relative p-4 sm:p-6 lg:p-8">
                                        <div className="mt-32 sm:mt-48 lg:mt-64">
                                            <div
                                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                            >
                                                <p className="text-xl font-semibold text-white">
                                                    Online Doctor
                                                </p>
                                            </div>
                                        </div>
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

export default page;