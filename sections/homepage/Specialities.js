import Speciality from '../../components/Speciality';
import cakedivider from '../../assets/images/cakedivider.png';
import Image from 'next/image';
const Specialities = () => {
    return (
        <div className="bg-spec bg-cover bg-opacity-10 bg-no-repeat h-screen min-w-full mt-10 mb-10 flex flex-col justify-between items-center">
            <div className=" bg-white bg-transparent bg-opacity-70 h-full min-w-full  flex flex-col justify-start items-center">
                <div className="flex flex-col justify-around items-center mt-20 mb-20">
                    <Image src={cakedivider} alt="logo" width={181} height={41} className="mt-20" />
                    <h1 className="font-header text-mybrown-100 text-6xl mt-5 mb-10">
                        Our Specialities
                    </h1>
                </div>
                <div className="w-3/5 h-100 flex flex-row  justify-around items-start">
                    <Speciality />
                    <Speciality />
                    <Speciality />
                    <Speciality />
                </div>
            </div>
        </div>
    );
};

export default Specialities;
