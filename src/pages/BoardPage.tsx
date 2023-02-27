import { useEffect } from "react";

export default function BoardPage() {
  useEffect(() => {
    fetch("http://localhost:5050/board")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return <div>Hel;lo</div>;
}
