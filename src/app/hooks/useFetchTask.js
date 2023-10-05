import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function useFetchTask({ params }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setName(data.name);
            setTitle(data.title);
            setDescription(data.description);
          }
        });
    }
  }, []);

  const OnSubmit = async (e) => {
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ name, title, description }),
        headers: {
          //Ser entendido como un JSON y lo espera el back
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ name, title, description }),
        headers: {
          //Ser entendido como un JSON y lo espera el back
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    }
    //Para que refrezque esos datos del local storage
    router.refresh();
    router.push("/");
  };

  return {
    name,
    title,
    description,
    setName,
    setTitle,
    setDescription,
    OnSubmit,
  };
}
