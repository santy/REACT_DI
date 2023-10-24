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

export const Mutation = () => {
    const queryClient = useQueryClient();
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
  
    const { data } = useQuery({
      queryKey: ["allUsers"],
      queryFn: fetchAllData,
      retry: 0,
    });
  
    const mutation = useMutation({
      mutationFn: createUserFetch,
      retry: 3,
      onSettled: () =>
        queryClient.invalidateQueries({
          queryKey: ["allUsers"],
        }),
      onMutate: async (user) => {
        await queryClient.cancelQueries({
          queryKey: ["allUsers"],
        });
  
        const previousUsers = queryClient.getQueryData({
          queryKey: ["allUsers"],
        });
  
        queryClient.setQueryData(["allUsers"], (prevData) => [user, ...prevData]);
  
        return { previousUsers };
      },
      onError: (error, user, context) => {
        queryClient.setQueryData(["allUsers"], context.previousUsers);
      },
    });
  
    return (
      <div>
        {data?.map((user) => (
          <div key={user.userID}>
            Name: {user.name} Age: {user.age}
          </div>
        ))}
        <form>
          <input
            name="name"
            type={"text"}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            name="number"
            type={"number"}
            onChange={(e) => setAge(Number(e.target.value))}
            value={age}
          />
          <button
            disabled={mutation.isPaused || mutation.isLoading}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              mutation.mutate({ name, age });
            }}
          >
            Add
          </button>
        </form>
      </div>
    );
  };
  
  export default Mutation;