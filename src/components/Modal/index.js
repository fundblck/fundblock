import { FundBlockContext } from "../../store/fundBlockContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  const { modal, setModal } = useContext(FundBlockContext);

  const closeModal = () => {
    setModal("scale-0");
  };

  return (
    <div>
      <div
        className={`fixed z-30 top-0 right-0 
          bg-black flex justify-center items-center
           w-screen h-screen 
         bg-opacity-30 transform
        transition-transform duration-300 ${modal}`}
      >
        <div
          className="bg-[#121113] border shadow-xl
         shadow-slate-950 rounded-xl
          w-11/12 sm:w-2/5 h-7/12 p-6"
        >
          <div className="flex flex-col">
            <div
              onClick={closeModal}
              style={{ color: "black" }}
              className="flex justify-end"
            >
               <FontAwesomeIcon icon={faTimes} style={{color: "white"}}/> 
            </div>

            {props.children}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
