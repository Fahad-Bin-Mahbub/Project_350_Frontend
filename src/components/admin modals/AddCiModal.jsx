import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Input } from "rsuite";
import { BASE_URL } from "../../data/data";
import Button from "../Button";

const AddCiModal = () => {
  const [ci, setCi] = useState("");
  const [email, setEmail] = useState("");
  const [session, setSession] = useState("");
  // const baseUrl = "https://examtrack.up.railway.app";
  const baseUrl = BASE_URL;

  const addCi = async (e) => {
    if (ci == "") return;
    e.preventDefault();
    console.log(ci, session, email);

    axios
      .post(
        `${baseUrl}/api/head/create-ci`,
        {
          session,
          email,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        const { status, data } = response;
        console.log(status, data);

        if (status == 200) {
          toast.success(`${ci} Chief Invigilator created successfully`);
        } else {
          toast.error("Could not create Chief Invigilator");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Could not create Chief Invigilator");
      });
    setCi("");
  };

  return (
    <div>
      <Button
        onClick={() => document.getElementById("add-ci-modal").showModal()}
        className="w-44"
        title="Add CI"
      />
      <dialog id="add-ci-modal" className="modal">
        <div className="modal-box bg-gray-200">
          <div className="flex justify-center p-11 bg-gray-200">
            <h1 className="text-3xl font-semibold text-[#0A2463]">
              Add Chief Invigilator
            </h1>
          </div>

          <div className="flex justify-center">
            <form>
              <div className="flex flex-col gap-y-1.5 pb-8">
                <label className="text-sm text-[#0A2463] font-medium">
                  Session
                </label>
                <Input
                  type="text"
                  placeholder="Enter Session"
                  onChange={(value) => setSession(value)}
                  className="input input-bordered w-[365px] h-11 rounded-sm bg-gray-300"
                />
              </div>
              {/* Department */}
              <div className="flex flex-col gap-y-1.5 pb-8">
                <label className="text-sm text-[#0A2463] font-medium">
                  Chief Invigilator
                </label>
                <Input
                  type="text"
                  placeholder="Chief Invigilator"
                  onChange={(value) => setCi(value)}
                  className="input input-bordered w-[365px] h-11 rounded-sm bg-gray-300"
                />
              </div>
              {/* Department Head */}
              <div className="flex flex-col gap-y-1.5 pb-8">
                <label className="text-sm text-[#0A2463] font-medium">
                  Email
                </label>
                <Input
                  type="text"
                  placeholder="Enter Email"
                  onChange={(value) => setEmail(value)}
                  className="input input-bordered w-[365px] h-11 rounded-sm bg-gray-300"
                />
              </div>
              <div className="modal-action">
                <form method="dialog" className="flex gap-2">
                  <button className="btn w-40 h-8 rounded-2xl text-[#0A2463] border-[#0A2463] border-2 bg-gray-300 hover:bg-gray-300">
                    Cancel
                  </button>
                  <Input
                    type="submit"
                    onClick={addCi}
                    value="Add CI"
                    className="btn w-40 h-8 rounded-2xl bg-[#0A2463] text-white hover:bg-primary"
                  />
                </form>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddCiModal;
