import { useEffect, useState } from "react";
import api from "../api/api";

export default function Contact() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetcher() {
      const result = await api.get("api/?id=374.131.949-94");
      setUser(result.data.results[0]);
      setIsLoading(false);
      return result;
    }
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>{user?.name?.first}</h1>
    </>
  );
}
