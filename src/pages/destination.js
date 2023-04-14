import classNames from "classnames";
import Link from "next/link";

const Destination = () => {
  const regionHeader = classNames(
    "text-center text-2xl lg:text-2xl bg-[#899ff7] w-1/3 text-white rounded py-1 hover:bg-white hover:border hover:text-slate-900"
  );
  return (
    <>
      <section>
        <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-32 lg:pt-40 pb-4">
          <h1 className="text-2xl lg:text-5xl  font-bold text-white pl-10 lg:pl-20">
            Destination
          </h1>
        </div>
        <div className="block md:flex lg:flex gap-10 px-10 lg:px-20 mx-auto py-5 md:py-16 lg:py-16">
          <div className="max-w-full md:max-w-[30%] lg:max-w-[25%] shadow-md px-6 py-5">
            <h1 className="text-lg lg:text-2xl font-bold">
              Tourist Attractions of Bangladesh
            </h1>
            <h2 className="pt-4 text-md lg:text-[19px] text-slate-600">
              Bangladesh is situated in the north-east part of South Asia which
              is blessed with natural beauty, ranging from mountains, rivers,
              beaches, biodiversity, ancient archaeological sites, medieval
              monasteries to temples, pagodas, mosques, churches and many more.
              The majestic Himalayas locate some distance to the north, while in
              the south lays the Bay of Bengal. This big delta is marked by lush
              greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna
              rivers create fertile plains and the monsoon brings the necessary
              rain to soothe the hot summer making a charming weather round the
              year. Bangladesh has been ranked seventh out of ‘top ten best
              value’ travel destinations for 2019 launched by Lonely Planet, a
              global leader of travel guidebook publisher. But in true sense,
              the whole Bangladesh is a classic hotspot of eco-tourism with
              diverse beauty and natural wonders.
            </h2>
          </div>
          <div>
            {/* ------- Single Region -------- */}
            <div className="pb-8 ">
              <h2 className={`${regionHeader}`}>North West Region</h2>
              <div className="divider"></div>
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-16">
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/YZYxGJ6/New-Project-13.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="/destinations/1">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Paharpur
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/HBbPgyf/New-Project-17.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Mahasthangar
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/424Qvf4/New-Project-20.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Dinajpur
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            {/* ------- Single Region -------- */}
            {/* ------- Single Region -------- */}
            <div className="pb-8">
              <h2 className={`${regionHeader}`}>Capital and Central Region</h2>
              <div className="divider"></div>
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-16">
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/wzyy0C1/New-Project-21.png"
                      alt="car"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Dhaka city
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/HBbPgyf/New-Project-17.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Lalbagh fort
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/424Qvf4/New-Project-20.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Ahsan Manzil
                    </h1>
                  </Link>
                </div>
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/424Qvf4/New-Project-20.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Panamnagar
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/424Qvf4/New-Project-20.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Sonargaon
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/424Qvf4/New-Project-20.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Shalban Vihara
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            {/* ------- Single Region -------- */}
            {/* ------- Single Region -------- */}
            <div className="pb-8">
              <h2 className={`${regionHeader}`}>South East Region</h2>
              <div className="divider"></div>
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-16">
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/5WRYCZH/New-Project-9.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Cox's bazar
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/PNmSbrV/New-Project-25.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Teknaf
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/424Qvf4/New-Project-20.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Bandarban
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/42KsrvH/New-Project-41.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Rangamati
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            {/* ------- Single Region -------- */}
            {/* ------- Single Region -------- */}
            <div className="pb-8">
              <h2 className={`${regionHeader}`}>North East Region</h2>
              <div className="divider"></div>
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-16">
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/t2L5wKm/New-Project-37.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Tanguar Haor
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/RT1w3qc/New-Project-34.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Shadapathor
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/CwXPBNb/New-Project-31.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Jaflong
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/j6cXw2Q/New-Project-28.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Sreemangal
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            {/* ------- Single Region -------- */}
            {/* ------- Single Region -------- */}
            <div className="pb-8">
              <h2 className={`${regionHeader}`}>South West Region</h2>
              <div className="divider"></div>
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-16">
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/nmpN569/New-Project-2.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Sunderbans
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/x3h8Fhf/New-Project-5.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Kuakata Sea Beach
                    </h1>
                  </Link>
                </div>
                {/* ------ All place cards----- */}
                <div className=" border hover:shadow-lg hover:border-none p-3 rounded">
                  <div>
                    <img
                      src="https://i.ibb.co/424Qvf4/New-Project-20.png"
                      alt="car!"
                      className="w-full h-full rounded"
                    />
                  </div>
                  <Link href="">
                    <h1 className="text-center text-lg hover:text-[#627FF4] pt-2">
                      Bagerhat
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            {/* ------- Single Region -------- */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
