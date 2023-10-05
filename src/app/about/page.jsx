export default function About() {
  return (
    <>
      <div className="flex flex-col sm:text-start text-center p-[2rem] gap-[1rem]">
        <h1 className="text-3xl font-bold  ">¿Cual es el proposito de esta pagina?</h1>
        <hr />
        <div className="sm:text-start text-justify ">
          <li>
            Este es un espacio dedicado a la discusión y reflexión sobre temas
            relacionados con la Biblia y otros aspectos espirituales y
            religiosos. Ofrecemos a los usuarios la oportunidad de compartir sus
            pensamientos, preguntas, y comentarios sobre pasajes bíblicos,
            enseñanzas religiosas y cuestiones espirituales en general.
          </li>
          <h1 className=" text-sky-600 text-3xl font-bold">Nota:</h1>
          <li>
            Esta pagina esta en desarrollo
          </li>
        </div>
      </div>
    </>
  );
}
