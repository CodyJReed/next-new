"use client";
import { useState } from "react";

export default function DeleteButton(id) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (id) => {
    setIsLoading(true);
  };
  return (
    <button className="btn-primary" onClick={handleClick} disabled={isLoading}>
      {isLoading ? "Deleteing..." : "Delete Ticket"}
    </button>
  );
}
