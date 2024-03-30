import * as React from "react";
import './App.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCalendar } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface InputFieldProps {
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={`justify-center px-10 py-4 rounded-lg ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const InputField: React.FC<InputFieldProps> = ({ label, className }) => {
  return (
    <div className="flex flex-col mt-4">
      <label className="text-lg text-center text-neutral-500 max-md:max-w-full">{label}</label>
      <input type="text" className={`mt-2 p-3 bg-white rounded-lg border border-solid border-stone-300 max-md:max-w-full ${className}`} />
    </div>
  );
};

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-11 bg-white">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec94a23b26fc26b29a70755c975e966fad49339661195711cf88e57d956baa49?apiKey=e4d452f99242495d95127baf3bbbb809&" alt="" className="max-w-full aspect-[3.85] w-[375px]" />
      <div className="flex flex-col items-center self-stretch p-20 mt-7 w-full bg-neutral-100 shadow-[1px_-2px_4px_rgba(0,0,0,0.06)] max-md:px-5 max-md:max-w-full">
        <h2 className="self-start ml-40 text-3xl font-bold text-cyan-800 max-md:max-w-full">
          Individual or Sole Proprietorship
        </h2>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9b9174687fe0224f71145f3ef57753c82fa157ad84d1b5f650b62bc4fdbcb0?apiKey=e4d452f99242495d95127baf3bbbb809&" alt="" className="mt-12 ml-16 w-8 aspect-[0.92] fill-red-500 max-md:mt-10" />
        <div className="flex flex-col justify-center p-2.5 mt-1.5 ml-16 max-w-full text-base font-bold text-white w-[168px]">
          <div className="justify-center px-3.5 py-1.5 bg-red-500 rounded">General Details</div>
        </div>
        <div className="mt-9 w-full max-w-[1114px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <InputField label="First Name" />
                <InputField label="Email ID" className="mt-8" />
                <div className="relative">
                <InputField label="DOB" className="mt-8"   />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7c34fe463ee355638e4c0cdb99534742164a142b7aab9c4be0f44bbed658d2b?apiKey=e4d452f99242495d95127baf3bbbb809&" alt="" className="w-10 aspect-square" />
                </div>
                <div className="relative">
        <input type="text" className="pl-4 pr-10 py-2 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <FontAwesomeIcon icon={faCalendar} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
  
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-lg text-center text-neutral-500 max-md:mt-10 max-md:max-w-full">
                <InputField label="Last Name" />
                <InputField label="Phone" className="mt-8" />
                <InputField label="Gender" className="mt-8" />
              </div>
            </div>
          </div>
        </div>
        <h3 className="self-start mt-12 ml-40 text-2xl font-semibold text-black max-md:mt-10 max-md:ml-2.5">
          Insert Aadhaar & PAN Details
        </h3>
        <div className="mt-4 w-full max-w-[1114px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-4 max-md:flex-wrap max-md:mt-10">
                <div className="flex flex-col justify-center my-auto">
                 <input type="radio" name="DeatilsProof"></input>
                </div>
                <div className="flex flex-col justify-center p-2.5 max-md:max-w-full">
                  <div className="flex flex-col justify-center px-3 py-1.5 bg-white rounded-lg border border-solid border-stone-300 max-md:max-w-full">
                    <div className="flex gap-4">
                    
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b44c58cbb2ee0a655c1d1bc6c4abde2f0dc933a88748d25bd537784f7dbd34df?apiKey=e4d452f99242495d95127baf3bbbb809&" alt="" className="shrink-0 my-auto w-20 aspect-[0.99]" />
                      <div className="flex flex-col p-2.5">
                        <h4 className="text-2xl font-bold text-cyan-800">Zero Doc KYC</h4>
                        <p className="mt-2 text-base leading-5 text-neutral-700">
                          You must have valid Aadhaar number linked with your mobile number
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-4 self-stretch my-auto max-md:flex-wrap max-md:mt-10">
              <input type="radio" name="DeatilsProof"></input>
                <div className="flex flex-col justify-center px-4 py-1.5 bg-white rounded-lg border border-solid border-stone-300">
                  <div className="flex gap-5 py-2 pr-2.5">
                    <div className="flex flex-col justify-center">
                      <div className="flex justify-center items-center px-6 w-20 h-20 bg-gray-200 rounded-full max-md:px-5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9c166356a4bff81db41a9d8c3c3393cdf379defb846ee32fcfc42128010b86c?apiKey=e4d452f99242495d95127baf3bbbb809&" alt="" className="w-9 aspect-[0.85]" />
                      </div>
                    </div>
                    <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                      <h4 className="text-2xl font-bold text-cyan-800">Manual KYC</h4>
                      <p className="mt-2 text-base leading-5 text-neutral-700">
                        Valid ID proof options include Aadhaar and PAN card.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between self-start mt-9 mb-7 ml-40 text-xl font-semibold max-md:ml-2.5">
          <Button className="text-red-500 bg-white border border-red-500 border-solid max-md:px-5">
            Skip
          </Button>
          <Button className="text-white bg-red-500 max-md:px-5">
            Save & Proceed
          </Button>
        </div>
      </div>
      <footer className="mt-8 text-base text-center text-neutral-500 max-md:max-w-full">
        Copyrights @ 2024 C AUM Capital Mkt. Pvt. Ltd. All Rights Reserved
      </footer>
    </div>
  );
};

function App() {
  return (
    <MyComponent />
  );
}

export default App;
