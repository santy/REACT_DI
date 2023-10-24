import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useState } from "react";

const fetchAllData = async () => {
  const { data } = await axios.get(
    `http://localhost:5000/users`
  );
  return data;
};

const createUser = async (user) => {
    return axios.post(`http://localhost:5000/users`, user);
  };

const createUserFetch = async (user) => {
  return fetch(`http://localhost:5000/users`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export const MutationWithSideEffects = () => {
    const [name, setName] = useState("");
  
    const queryClient = useQueryClient();
  
    const { data } = useQuery({
      queryKey: ["allUsers"],
      queryFn: fetchAllData,
    });
  
    const { mutate } = useMutation({
      mutationFn: createUser,
      onSuccess: (data) => {
        const user = data.data;
        queryClient.setQueryData(["allUsers"], (prevData) => [user, ...prevData]);
      },
    });
  
    const submitForm = (e) => {
      e.preventDefault();
      mutate(
        { name },
        {
          onSuccess: (data) => {
            const userId = data.data.userID;
            //goToRoute(`/user/${userId}`);
            console.log("add with side Effect")
          },
        }
      );
    };
  
    return (
      <div>
        <form>
          <input
            name="name"
            type={"text"}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button onClick={submitForm}>Add</button>
        </form>
      </div>
    );
  };
  
  export default MutationWithSideEffects;