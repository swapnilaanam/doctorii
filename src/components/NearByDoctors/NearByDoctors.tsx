import Image from "next/image";
import wave from '../../../public/images/wave (1).svg';
import doctor from '../../../public/images/doctor.jpg';
import Link from "next/link";

const NearByDoctors = () => {
    return (
        <div className="w-full relative -top-40">
            <div className="w-full" >
                <Image src={wave} alt="wave" className="w-full h-[500px] object-cover" />
                <div className="w-full absolute top-32 px-20">
                    <h2 className="text-3xl font-medium text-white mt-20">Nearby Doctors {">>"}</h2>
                    <div className="my-16 h-full flex justify-center gap-20">
                        <Link href="/">
                            <div className="border-4 border-white rounded-full">
                                <Image src={doctor} alt="Nearby Doctor" width={100} height={100} className="object-cover rounded-full m-1" />
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="border-4 border-white rounded-full">
                                <Image src={doctor} alt="Nearby Doctor" width={100} height={100} className="object-cover rounded-full m-1" />
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="border-4 border-white rounded-full">
                                <Image src={doctor} alt="Nearby Doctor" width={100} height={100} className="object-cover rounded-full m-1" />
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="border-4 border-white rounded-full">
                                <Image src={doctor} alt="Nearby Doctor" width={100} height={100} className="object-cover rounded-full m-1" />
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="border-4 border-white rounded-full">
                                <Image src={doctor} alt="Nearby Doctor" width={100} height={100} className="object-cover rounded-full m-1" />
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="border-4 border-white rounded-full">
                                <Image src={doctor} alt="Nearby Doctor" width={100} height={100} className="object-cover rounded-full m-1" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NearByDoctors;