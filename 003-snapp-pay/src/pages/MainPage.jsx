import { useEffect, useRef, useState } from "react";
import UserCard from "../components/UserCard";

export default function MainPage() {
  const [users, setUsers] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("users")) {
      fetch("https://randomuser.me/api/?results=50")
        .then((res) => res.json())
        .then((json) => {
          localStorage.setItem("users", JSON.stringify(json.results));
          setUsers(json.results);
        });
    } else {
      const userData = JSON.parse(localStorage.getItem("users"));
      setUsers(userData);
    }
  }, []);

  function handleSearchChange(evt) {
    setSearchResult(
      users.filter((item) => {
        item.name?.first
          ?.toLowerCase()
          .includes(inputRef.current.value.toLowerCase()) ||
          item.name?.last
            ?.toLowerCase()
            .includes(inputRef.current.value.toLowerCase()) ||
          item.name?.title
            ?.toLowerCase()
            .includes(inputRef.current.value.toLowerCase()) ||
          item.cell?.includes(inputRef.current.value);
      })
    );
  }

  return (
    <>
      <input
        className="block border p-2 m-4"
        type="text"
        placeholder="search user"
        ref={inputRef}
        onChange={handleSearchChange}
      />

      <div>
        {searchResult.length > 0
          ? searchResult.map((user) => (
              <UserCard
                key={`${user.id.value ?? "hi"}-${user.cell}`}
                userName={user.name}
                imagesObj={user.picture}
                cell={user.cell}
              />
            ))
          : users.map((user) => (
              <UserCard
                key={`${user.id.value ?? "hi"}-${user.cell}`}
                userName={user.name}
                imagesObj={user.picture}
                cell={user.cell}
              />
            ))}
      </div>
    </>
  );
}
