"use client"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useFetchTask from "../hooks/useFetchTask";

const schema = z.object({
  name: z
    .string()
    .min(5, { message: "El nombre debe tener al menos 5 caracteres" }),
  title: z
    .string()
    .min(5, { message: "El titulo debe tener al menos 5 caracteres" }),
  description: z
    .string()
    .min(10, { message: "La descripcion debe tener al menos 10 caracteres" }),
});

export default function NewPage({ params }) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const {
    name,
    title,
    description,
    setName,
    setTitle,
    setDescription,
    OnSubmit,
  } = useFetchTask({ params });

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="text-3xl relative bottom-[2rem] max-[400px]:text-center">
          {params.id ? (
            <h1>¡Edita tus comentarios aqui!</h1>
          ) : (
            <h1>¡Crea tus comentarios aqui!</h1>
          )}
        </div>
        <form
          onSubmit={handleSubmit(OnSubmit)}
          className=" bg-slate-800 p-10 rounded-lg max-w-xs"
        >
          <h1 className="text-center text-sky-400 font-bold">
            ¡Tu opinion, brinda claridad a tu realidad!
          </h1>
          <p className="text-center">
            Si te cuestionas, ofendes a Dios, ¿Entonces nuestro libre albedrío
            está limitado?
          </p>
          <label htmlFor="name" className="font-bold text-sm">
            Tu nombre
          </label>
          <input
            {...register("name")}
            aria-invalid={errors.name ? "false" : "true"}
            placeholder="Nombre"
            type="text"
            className="border-gray-400 bg-slate-900 p-2 mb-4 w-full text-white"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {errors.name && (
            <p className="text-pink-800">{errors.name?.message}</p>
          )}
          <label htmlFor="title" className="font-bold text-sm">
            Titulo de la premisa
          </label>
          <input
            {...register("title")}
            aria-invalid={errors.title ? "false" : "true"}
            placeholder="Titulo"
            type="text"
            className="border-gray-400 bg-slate-900 p-2 mb-4 w-full text-white"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          {errors.title && (
            <p className="text-pink-800">{errors.title?.message}</p>
          )}
          <textarea
            {...register("description")}
            aria-invalid={errors.description ? "false" : "true"}
            placeholder="Escribe tu premisa"
            className="border-gray-400 bg-slate-900 p-2 mb-4 w-full text-white"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          {errors.description && (
            <p className="text-pink-800">{errors.description?.message}</p>
          )}
          <div className="flex justify-between">
            {params.id ? (
              <button
                type="submit"
                className="bg-orange-400 p-2 rounded-md hover:bg-orange-300"
              >
                Editar
              </button>
            ) : (
              <button
                type="submit"
                className=" bg-sky-400 p-2 rounded-md hover:bg-sky-300"
              >
                Enviar
              </button>
            )}
            {params.id && (
              <button
                onClick={async () => {
                  const res = await fetch(`/api/tasks/${params.id}`, {
                    method: "DELETE",
                  });
                  const data = await res.json();
                  router.refresh();
                  router.push("/");
                }}
                type="button"
                className="bg-red-700 p-2 rounded-md hover:bg-red-400"
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
