import { FaWalking } from "react-icons/fa";
const Leftsidebar = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center border mx-auto px-3 py-5 rounded hover:shadow-2xl">
          <div className="pb-2">
            <FaWalking className="w-1/2 h-1/2 p-4 bg-[#E3E7F8] hover:bg-[#627FF4] text-[#627FF4] hover:text-white rounded-full mx-auto text-9xl" />
          </div>
          <div>
            <h2 className="text-3xl">3500+</h2>
            <div className="text-sm font-light text-slate-500">
              Happy Travelars
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftsidebar;
