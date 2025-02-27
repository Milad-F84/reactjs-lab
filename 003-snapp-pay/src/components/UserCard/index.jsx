import { useNavigate } from "react-router-dom";

export default function UserCard({ userName, imagesObj, cell, onClick }) {
  const navigate = useNavigate();
  return (
    <div
      className="shadow-lg p-2 rounded-md"
      onClick={() => {
        // if (onClick) onClick();
        navigate("contact");
      }}
    >
      <img
        className="w-full rounded-full"
        src={imagesObj.large}
        alt="user image"
      />
      <h2>
        {userName.title}.{userName.first} {userName.last}
      </h2>
      <span>{cell}</span>
    </div>
  );
}
