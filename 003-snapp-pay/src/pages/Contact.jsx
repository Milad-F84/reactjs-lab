import { useEffect, useState } from "react";
import api from "../api/api";

export default function Contact() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetcher() {
      const result = await api.get("api/?id=374.131.949-94");
      setUser(result.data.results[0]);
      setIsLoading(false);
      return result;
    }

    const result = fetcher();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className=" p-2">
        <img
          className="w-[300px] rounded-full"
          src={user.picture.large}
          alt="user image"
        />
        <h2>
          {user.name.title}.{user.name.first} {user.name.last}
        </h2>
        <span>{user.cell}</span>
      </div>
    </>
  );
}
