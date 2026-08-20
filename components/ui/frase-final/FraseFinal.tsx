import AnimateOnScroll from "../animate/AnimateOnScroll";

export default function FraseFinal() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-black py-20 px-4 text-center">
      <AnimateOnScroll variant="fade-up">
        <p className="flex flex-col items-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          <span className="font-script text-primary">Tú</span>
          <span className="font-script text-primary">transformación</span>
          <span className="font-script text-primary">comienza</span>
          <span className="font-sans uppercase text-secondary">aquí...</span>
        </p>
      </AnimateOnScroll>
    </section>
  );
}
