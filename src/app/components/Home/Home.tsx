import { Button } from '@/components/Button';
import { TypedText } from '@/components/TypedText';

function Home() {
  const sequence = ["I'm Walter Radduso", 2000, "I'm Frontend Engineer.", 2000];

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-8 font-poppins">
      <h2 className="text-3xl">Welcome</h2>

      <TypedText className="mb-2 text-center font-poppins text-6xl font-semibold" sequence={sequence} wrapper="span" />

      <Button className="w-56 border-primary text-primary hover:bg-primary hover:text-white" text="More About Me" />
    </section>
  );
}

export default Home;
