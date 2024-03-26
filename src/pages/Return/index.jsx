import React, { useState } from "react";
import { URL } from "../../utils/constants";
import { Toaster, toast } from "sonner";

const Return = () => {
  const [memberId, setMemberId] = useState("");
  const [bookId, setBookId] = useState("");

  const handleReturn = async () => {
    try {
      const response = await fetch(`${URL}/api/circulation/return`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          MemberID: memberId,
          BookID: bookId,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      } else {
        toast.success(data.message);
        setMemberId("");
        setBookId("");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className=" min-h-[100vh] bg-pink-900 flex justify-center items-center">
      <div className="w-[30%] bg-slate-800 flex flex-col justify-around items-center rounded-md p-16 gap-4 ">
        <h1 className="text-white">Return Book</h1>
        <input
          type="text"
          placeholder="Member ID"
          className="p-2 rounded-md w-full text-black"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book ID"
          className="p-2 rounded-md w-full text-black"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
        <button
          className="bg-green-500 p-2 rounded-md text-white self-end"
          onClick={handleReturn}
          disabled={!memberId || !bookId}
        >
          Return Book
        </button>
      </div>
    </div>
  );
};

export default Return;
