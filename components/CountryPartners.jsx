// Umer

import Image from "next/image";

const CountryPartners = () => {
  return (
    <main className="text-white py-6 md:py-16 bg-[linear-gradient(90deg,rgba(35,3,63)32.12%,rgba(0,50,171,0.7)100%)]">
      <h2 className="text-2xl md:text-4xl font-bold font-el-messiri pb-12 text-center">
        Our Country Partners
      </h2>
      <div className="container mx-auto space-y-8">
        {/* First Row */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/Partners1.png"
            alt="Partner 1"
            width={128}
            height={128}
          />
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/Partners2.png"
            alt="Partner 2"
            width={128}
            height={128}
          />
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/Partners3.png"
            alt="Partner 3"
            width={128}
            height={128}
          />
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/Partners4.png"
            alt="Partner 4"
            width={128}
            height={128}
          />
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/Partners5.png"
            alt="Partner 5"
            width={128}
            height={128}
          />
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/Partners6.png"
            alt="Partner 6"
            width={128}
            height={128}
          />
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/2Partners1.png"
            alt="Partner 7"
            width={128}
            height={128}
          />
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/2Partners2.png"
            alt="Partner 8"
            width={128}
            height={128}
          />
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/2Partners3.png"
            alt="Partner 9"
            width={128}
            height={128}
          />
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/2Partners4.png"
            alt="Partner 10"
            width={128}
            height={128}
          />
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/2Partners5.png"
            alt="Partner 11"
            width={128}
            height={128}
          />
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/2Partners6.png"
            alt="Partner 12"
            width={128}
            height={128}
          />
          <Image
            className="w-24 md:w-28 lg:w-32"
            src="/2Partners7.png"
            alt="Partner 13"
            width={128}
            height={128}
          />
        </div>
      </div>
    </main>
  );
};

export default CountryPartners;
