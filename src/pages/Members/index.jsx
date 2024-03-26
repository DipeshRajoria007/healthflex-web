import React, { useEffect, useState } from "react";
import { URL } from "../../utils/constants";
const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`${URL}/api/members/`);
        const data = await response.json();
        console.log(data);
        setMembers(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);
  return (
    <div className="p-4">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="flex flex-wrap gap-8">
        {members.map((member) => (
          <div
            key={member?._id}
            className="bg-pink-900 h-96 w-64 rounded-md p-8"
          >
            <h2> Member Name : {member?.MemberName}</h2>
            <p> Member ID : {member?.MemberID}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
