import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

//Obteniendo datos
export async function GET() {
  //task tabla que hemos creado
  const tasks = await prisma.task.findMany();

  return NextResponse.json(tasks);
}

//Para crear es request body, creando datos
export async function POST(request) {
  //Es un objeto que se tiene que convertir en un JSON
  const { name, title, description } = await request.json();
  //data son justamente las columnas que yo quiero guardar
  const newTask = await prisma.task.create({
    data: {
      name,
      title,
      description,
    },
  });
  console.log(newTask)

  return NextResponse.json(newTask);
}
