import { TfiCalendar } from 'react-icons/tfi';

const ResultSection = () => {
    return (
        <div className="bg-[#010B2E] mt-32 px-10">
            <div className="text-center">
                <h2 className="pt-16 mb-2 text-4xl text-white font-extrabold">We Deliver Real Results</h2>
                <p className="text-lg mt-4 text-white">Check back most work-days for new lessons on your favorite web <br/>technologies and techniques.</p>
            </div>
            <div className='grid grid-cols-3 items-center justify-center'>
                <div><TfiCalendar className='text-6xl text-white'></TfiCalendar></div>
                <div><TfiCalendar className='text-6xl text-white'></TfiCalendar></div>
                <div><TfiCalendar className='text-6xl text-white'></TfiCalendar></div>
            </div>
        </div>
    );
};

export default ResultSection;