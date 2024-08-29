"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("file", file);
    let result = await fetch("api/upload", {
      method: "POST",
      body: data,
    });
    result = await result.json();
    if (result.success) {
      alert("Image Uploaded");
    }
  };
  return (
    <main>
      <h1>Upload Image</h1>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        ></input>
        <button type="submit">Upload Image</button>
      </form>
    </main>
  );
}
