import { useState } from "react";
import { FaInfo } from "react-icons/fa";

const InfoModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseClick = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        className="z-[900] bottom-0 right-0 mr-[20px] mb-[20px] btn fixed bg-secondaryGrad text-white hover:bg-opacity-75"
        onClick={handleButtonClick}
      >
        <FaInfo />
      </button>

      {isModalOpen && (
        <dialog
          id="my_modal_1"
          className={`modal fixed inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
            isModalOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          open
          style={{
            backdropFilter: "blur(5px)",
          }}
        >
          <form
            method="dialog"
            className="modal-box border-[3px] bg-[#131313] rounded-[5px] lg:p-[50px]"
          >
            <h1 className=" font-bold text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 bg-clip-text animate-text">
              Hello!
            </h1>
            <p className=" py-4">
              I&apos;m excited to let you know that this app is currently under
              development. It&apos;s going to take some time before it&apos;s
              fully complete, but I promise it&apos;ll be worth the wait.
              <br />
              <br />
              To get things started, I&apos;m releasing the TradeLog feature
              first. This will let you try out the app and provide valuable
              feedback to me. Your feedback will be incredibly helpful for me to
              improve the app and make it better suit your needs.
              <br />
              <br />
              After the initial release, I&apos;ll be rolling out updates
              addressing any issues and introducing new features.
              <br />
              <br />
              Thanks for your patience and understanding. Stay tuned for more
              exciting updates! ✅
            </p>
            <div className="modal-action flex justify-between items-center">
              <p>- KJ</p>
              <button
                className=" bg-opacity-0 border-[1px] border-white text-white p-[10px] rounded-[5px] hover:scale-110 ease-in-out transition"
                onClick={handleCloseClick}
              >
                Enough Yappin!
              </button>
            </div>
          </form>
        </dialog>
      )}
    </>
  );
};
const InfoModalTradeLog = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseClick = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        className="z-[900] bottom-0 right-0 mr-[20px] mb-[20px] btn fixed bg-secondaryGrad text-white hover:bg-opacity-75"
        onClick={handleButtonClick}
      >
        <FaInfo />
      </button>

      {isModalOpen && (
        <dialog
          id="my_modal_1"
          className={`modal fixed inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
            isModalOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          open
          style={{
            backdropFilter: "blur(5px)",
          }}
        >
          <form
            method="dialog"
            className="modal-box border-[3px] bg-[#131313] rounded-[5px] lg:p-[50px]"
          >
            <h1 className=" font-bold text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 bg-clip-text animate-text">
              Hello.
            </h1>
            <p className="py-4">
              It&apos;s important to note that the TradeLog is currently in a
              universal state, meaning that the information you see is
              accessible to everyone.
              <br />
              <br />
              My immediate goal is to tailor the TradeLog so that the Firebase
              documents update individually for each user. This customization
              will ensure that your specific trading activities and data are
              personal and exclusive to you.
              <br />
              <br />
              Along with this, I&apos;m aware of some existing issues such as
              inputs not working properly, and the layout needs further
              refinement. These will be fixed soon.
              <br />
              <br />
              Stay tuned for more updates ✅
            </p>

            <div className="modal-action flex justify-between items-center">
              <p>- KJ</p>
              <button
                className=" bg-opacity-0 border-[1px] border-white text-white p-[10px] rounded-[5px] hover:scale-110 ease-in-out transition"
                onClick={handleCloseClick}
              >
                Enough Yappin!
              </button>
            </div>
          </form>
        </dialog>
      )}
    </>
  );
};
const KnownIssues = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseClick = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        className="z-[900] bottom-[60px] right-0 mr-[20px] mb-[20px] btn fixed bg-red-500 text-white hover:bg-opacity-75"
        onClick={handleButtonClick}
      >
        <FaInfo />
      </button>

      {isModalOpen && (
        <dialog
          id="my_modal_1"
          className={`modal fixed inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out ${
            isModalOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          open
          style={{
            backdropFilter: "blur(5px)",
          }}
        >
          <form
            method="dialog"
            className="modal-box border-[3px] bg-[#131313] rounded-[5px] border-red-500 lg:p-[50px]"
          >
            <h1 className=" font-bold text-[30px] text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-700 bg-clip-text animate-text">
              Here are some known issues that I&apos;m currently working on
              improving:
            </h1>
            <p
              className="py-4"
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              While the sign-in and sign-up functionalities are operational, and
              users can be successfully created and logged in, there is no
              option to sign out at this moment.
              <br />
              <br />
              Upon signing in, users are immediately directed to the dashboard.
              Although this is intentional, I realize that it may not be clear
              that you are successfully signed in. While there is a user icon in
              the top right, I will be enhancing the interface to make it more
              apparent that YOU are the one signed in.
              <br />
              <br />
              If you are already signed in and navigate to the page's URL, you
              should be redirected straight to the dashboard rather than to the
              index to sign in again. I'm in the process of implementing this
              behavior to enhance your user experience.
              <br />
              <br />
              Please know that these are priority areas for me, and I&apos;m
              working to fix these issues. ✅
            </p>

            <div className="modal-action flex justify-between items-center">
              <p>- KJ</p>
              <button
                className=" bg-opacity-0 border-[1px] border-white text-white p-[10px] rounded-[5px] hover:scale-110 ease-in-out transition"
                onClick={handleCloseClick}
              >
                Enough Yappin!
              </button>
            </div>
          </form>
        </dialog>
      )}
    </>
  );
};

export { InfoModal, InfoModalTradeLog, KnownIssues };
