import viralIMG from "../../assets/viralIMG.png";
import Bar from "../Bar";
import { FundBlockContext } from "../../store/fundBlockContext";
import { useContext } from "react";
import Modal from "../Modal";

const ProjectCard = () => {
  const { funds, donate, setDonate, ownerAccount } =
    useContext(FundBlockContext);
  const { setModal } = useContext(FundBlockContext);

  const openModal = () => {
    setModal("scale-100");
  };

  const resetForm = () => {
    setDonate(0);
  };

  const handleChange = (e) => {
    setDonate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!donate) return;

    try {
      resetForm();
    } catch (error) {
      console.log("Error uploading donating: ", error);
    }

    console.log("Form submitted with data:", donate);
  };

  return (
    <div className="text-white rounded-lg border border-spacing-4">
      <div className="p-[20px]">
        <div className=" flex space-x-4 ">
          <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]">
            <img src={viralIMG} alt="" />
          </div>
          <div className="block ">
            <h1 className="text-white mb-[12px] text-zinc-100 text-2xl sm:text-4xl font-bold leading-10">
              ViraSafe
            </h1>
            <button className="rounded-full px-2 sm:px-3  bg-orange-200 text-slate-900">
              Ongoing
            </button>
          </div>
        </div>
        {!ownerAccount ? (
          <div className="py-[28px]">
            <button
              onClick={openModal}
              className="px-5 py-2.5 w-full text-neutral-900 text-base sm:text-xl font-semibold bg-gradient-to-r 
        from-emerald-300 to-cyan-300 rounded-lg"
            >
              Donate
            </button>

            <Modal>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="pb-5 appearance-none">
                  <label
                    className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                    htmlFor="donate"
                  >
                    Your contribution
                  </label>
                  <input
                    className="
                border rounded w-full py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                    id="donate"
                    type="number"
                    name="donate"
                    value={donate}
                    onChange={handleChange}
                    placeholder="contribution must be valued at 2USD or more"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 w-full text-neutral-900 text-base sm:text-xl font-semibold bg-gradient-to-r 
        from-emerald-300 to-cyan-300 rounded-lg"
                >
                  Donate
                </button>
              </form>
            </Modal>
          </div>
        ) : (
          <div className="py-[28px]">
            <button
              className="px-5 py-2.5 w-full text-neutral-900 text-base sm:text-xl font-semibold bg-gradient-to-r 
        from-emerald-300 to-cyan-300 rounded-lg"
            >
              Withdraw
            </button>

          </div>
        )}

        <Bar value={funds} />

        <p className="text-white text-base sm:text-lg font-normal leading-relaxed">
          {funds}% fundraising goal met{" "}
        </p>

        <div className="flex py-[40px] gap-6">
          <div className="block">
            <h2 className="text-orange-200 text-base sm:text-xl font-semibold leading-5 sm:leading-7">
              Fundraising goal
            </h2>
            <h2 className="text-gray-50 text-xl sm:text-3xl font-bold leading-8 sm:leading-10">
              $78,204,512
            </h2>
          </div>
          <div className="block">
            <h2 className="text-orange-200 text-base sm:text-xl font-semibold leading-5 sm:leading-7">
              Fundraising goal
            </h2>
            <h2 className="text-gray-50 text-xl sm:text-3xl font-bold leading-8 sm:leading-10">
              $78,204,512
            </h2>
          </div>
        </div>

        <hr />

        <div className="py-[16px] gap-4">
          <div className="flex justify-between">
            <h3 className="text-orange-200 text-sm sm:text-xl font-semibold leading-5 sm:leading-7">
              Starting date
            </h3>
            <p className="text-gray-50 sm:text-xl font-normal leading-5 sm:leading-7">
              Oct 28, 2023
            </p>
          </div>

          <div className="flex justify-between">
            <h3 className="text-orange-200 text-sm sm:text-xl font-semibold leading-5 sm:leading-7">
              Completion date
            </h3>
            <p className="text-gray-50 sm:text-xl font-normal leading-5 sm:leading-7">
              Oct 28, 2023
            </p>
          </div>

          <div className="flex justify-between">
            <h3 className="text-orange-200 text-sm sm:text-xl font-semibold leading-5 sm:leading-7">
              Numbers of backers
            </h3>
            <p className="text-gray-50 sm:text-xl font-normal leading-5 sm:leading-7">
              Oct 28, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
