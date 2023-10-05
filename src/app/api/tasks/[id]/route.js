import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

//CRUD
export async function GET(request, { params }) {
  //Buscar por el dato donde quiero buscarlo, CONSULTAR
  const taskGet = await prisma.task.findUnique({
    where: {
      id: Number(params.id), //El params lo asigna como string (default)
    },
  });
  return NextResponse.json(taskGet);
}

//Actualizando
export async function PUT(request, { params }) {
  const data = await request.json();
  const taskUpdate = await prisma.task.update({
    //params
    where: {
      id: Number(params.id),
    },
    //datos
    data: data
  });
  return NextResponse.json(taskUpdate);
}

export async function DELETE(request, { params }) {
  try {
    const taskDelete = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(taskDelete);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
