import CardFilm from "./components/CardFilm/CardFilm";

export default function Home() {
  return (
    <main className="flex-auto">
      <section className="flex flex-wrap justify-center">
      <CardFilm title="Deadpool" image="/deadpool.webp" link="https://youtu.be/Q9X-bAE8KTc?si=8dmIPli7glpJdZWk" />

      <CardFilm title="Jogador N°1" image="/jogador1.jpg" link="https://youtu.be/yulwIjJ-C4Q?si=uqOikKjNVrzkMK1g" />

      <CardFilm title="As branquelas" image="/branquelas.webp" link="https://youtu.be/seoJIPLLWp0?si=LJY1s8wuN7_HWrA6" />

      <CardFilm title="O Hobbit" image="/hobbit.jpg" link="https://youtu.be/4AKkpnCKa2I?si=1pHccxeP1oHv5cDn" />

      <CardFilm title="Scary movie" image="/todomundopanico.webp" link="https://youtu.be/g1xAc10-xOk?si=ISCFkIsKKAtb8tEK" />

      </section>

      <section className="flex flex-wrap justify-center">
      <CardFilm title="Scary movie" image="/todomundopanico.webp" link="https://youtu.be/g1xAc10-xOk?si=ISCFkIsKKAtb8tEK" />
      <CardFilm title="As branquelas" image="/branquelas.webp" link="https://youtu.be/seoJIPLLWp0?si=LJY1s8wuN7_HWrA6" />
      <CardFilm title="O Hobbit" image="/hobbit.jpg" link="https://youtu.be/4AKkpnCKa2I?si=1pHccxeP1oHv5cDn" />
      <CardFilm title="Jogador N°1" image="/jogador1.jpg" link="https://youtu.be/yulwIjJ-C4Q?si=uqOikKjNVrzkMK1g" />
      <CardFilm title="Deadpool" image="/deadpool.webp" link="https://youtu.be/Q9X-bAE8KTc?si=8dmIPli7glpJdZWk" />
      </section>
    </main>
  );
}
