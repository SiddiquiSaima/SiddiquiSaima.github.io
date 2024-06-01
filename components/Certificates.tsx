import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";

const Certificates = () => {
  return (
    <div className=" py-20 w-fit " id="certificates">
      <h1 className="heading">
        Some of my{" "}
        <span className="text-purple"> Certifications</span>{" "}
      </h1>
      <div className=" w-full grid lg:grid-cols-4 grid-cols-1 gap-10 mt-10 ">
        {workExperience.map((card) => (
            <Button key={card.id} borderRadius='1.75rem' className=" text-white flex-1 border-neutral-200 dark:border-slate-800" duration={Math.floor(Math.random() * 10000) + 10000}>
                <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                  <img src={card.thumbnail} alt={card.thumbnail} className=" lg:w-32 md:w-20 w-16"  />
                  <div className=" lg:ms-5 ">
                      <h1 className=" text-xl text-start  text-blue-500/90 md:text-2xl font-bold">
                        {card.title}
                       
                      </h1>
                      <div key={card.id} className=" flex text-purple  items-center justify-end">
                          ~{card.provider}
                        </div>

                      <p className="text-start mt-3 font-medium text-white-100 ">
                        {card.desc}
                      </p>
                  </div>
                </div>
            </Button>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
