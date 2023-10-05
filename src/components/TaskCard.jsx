"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";
import { Icon } from "@iconify/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";

export default function TaskCard({ task }) {
  const router = useRouter();
  return (
    <>
      <Tippy
        interactive={true}
        followCursor={true}
        plugins={[followCursor]}
        theme="material"
        content={
          <div className="flex flex-col justify-center items-center font-bold">
            ¿Editar?
            <Icon className="w-10 h-10 text-orange-400" icon="bx:edit" />
          </div>
        }
      >
        <div
          key={task.id}
          className="flex flex-col bg-slate-800 p-3 hover:bg-slate-700
          hover:cursor-pointer rounded-md"
          onClick={() => router.push("/tasks/edit/" + task.id)}
        >
          <h1 className="font-bold text-2xl mb-2 text-center">{task.name}</h1>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{new Date(task.date).toLocaleDateString()}</p>
        </div>
      </Tippy>
    </>
  );
}
