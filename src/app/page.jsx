import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";


//Server por eso se utiliza localhost si fuera cliente seria solo la ruta
const loadTasks = async () => {
  return await prisma.task.findMany();
};

export const dynamic = 'force-dynamic'


export default async function Home() {
  const tasks = await loadTasks();

  return (
    <>
      <section className="container mx-auto">
        <div className="grid sm:grid-cols-3 grid-cols-1 p-[1rem] gap-[2rem] mt-10">
          {tasks.map((task) => (
            <>
              <TaskCard key={task.id} task={task} />
            </>
          ))}
        </div>
      </section>
    </>
  );
}
