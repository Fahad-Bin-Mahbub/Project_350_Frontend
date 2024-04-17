import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Input } from "rsuite";
import Button from "../Button";

const AddCiModal = () => {
  const [ci, setCi] = useState("");
  const [email, setEmail] = useState("");
  const [session, setSession] = useState("");
  const baseUrl = "https://examtrack.up.railway.app";

  const addCi = async (e) => {
    if (ci == "") return;
    e.preventDefault();
    console.log(ci, session, email);

    const options = {
      // TODO: "Add API endpoint for creating CI",
      method: "POST",
      url: `${baseUrl}/api/head/create-ci`,
      data: {
        session,
        email,
      },
    };

    axios
      .request(options)
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
        <div className="modal-box">
          <div className="flex justify-center p-11">
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
                <input
                  type="text"
                  placeholder="Enter Session"
                  onChange={(value) => setSession(value)}
                  className="input input-bordered w-[365px] h-11 rounded-sm"
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
                  className="input input-bordered w-[365px] h-11 rounded-sm"
                />
              </div>
              {/* Department Head */}
              <div className="flex flex-col gap-y-1.5 pb-8">
                <label className="text-sm text-[#0A2463] font-medium">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  onChange={(value) => setEmail(value)}
                  className="input input-bordered w-[365px] h-11 rounded-sm"
                />
              </div>
              <div className="modal-action">
                <form method="dialog" className="flex gap-2">
                  <button className="btn w-40 h-8 rounded-2xl text-[#0A2463] border-[#0A2463] border-2">
                    Cancel
                  </button>
                  <input
                    type="submit"
                    onClick={addCi}
                    value="Add CI"
                    className="btn w-40 h-8 rounded-2xl bg-[#0A2463] text-white"
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
