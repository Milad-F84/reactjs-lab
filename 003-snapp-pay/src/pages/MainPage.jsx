import { useEffect, useRef, useState } from "react";
import UserCard from "../components/UserCard";

export default function MainPage() {
  const [users, setUsers] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [recentUser, setRecentUser] = useState([]);
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

    const storedHistory = JSON.parse(localStorage.getItem("recentUsers")) || [];
    setRecentUser(storedHistory);
  }, []);

  function handleSearchChange(evt) {
    setSearchResult(
      users.filter(
        (item) =>
          item.name?.first
            ?.toLowerCase()
            .includes(inputRef.current.value.toLowerCase()) ||
          item.name?.last
            ?.toLowerCase()
            .includes(inputRef.current.value.toLowerCase()) ||
          item.name?.title
            ?.toLowerCase()
            .includes(inputRef.current.value.toLowerCase()) ||
          item.cell?.includes(inputRef.current.value)
      )
    );
  }

  function handleAddToRecent(user) {
    debugger;
    setRecentUser((prev) => {
      const updateList = [
        user,
        ...prev.filter((item) => item.cell !== user.cell),
      ].slice(0, 4);
      localStorage.setItem("recentUsers", JSON.stringify(updateList));
      return updateList;
    });
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

      <h2>مخاطبین پرتکرار</h2>
      <div>
        {recentUser.length > 0 ? (
          recentUser.map((user) => (
            <UserCard
              key={`${user.id.value ?? "hi"}-${user.cell}`}
              userName={user.name}
              imagesObj={user.picture}
              cell={user.cell}
              onclick={() => handleAddToRecent(user)}
            />
          ))
        ) : (
          <p>هیچ مخاطبی مشاهده نشده است.</p>
        )}
      </div>

      <div className="grid grid-cols-5">
        {searchResult.length > 0
          ? searchResult.map((user) => (
              <UserCard
                key={`${user.id.value ?? "hi"}-${user.cell}`}
                userName={user.name}
                imagesObj={user.picture}
                cell={user.cell}
                onclick={() => handleAddToRecent(user)}
              />
            ))
          : users.map((user) => (
              <UserCard
                key={`${user.id.value ?? "hi"}-${user.cell}`}
                userName={user.name}
                imagesObj={user.picture}
                cell={user.cell}
                onclick={() => handleAddToRecent(user)}
              />
            ))}
      </div>
    </>
  );
}
