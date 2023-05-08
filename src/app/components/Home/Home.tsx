import { TypedText } from '@/components/TypedText';

function Home() {
  const sequence = ["I'm Walter Radduso", 3000, "I'm a Frontend Engineer.", 3000, ''];

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-8 font-poppins">
      <h2 className="text-3xl">Welcome</h2>

      <TypedText className="mb-2 text-center font-poppins text-6xl font-semibold" sequence={sequence} wrapper="span" />
    </section>
  );
}

export default Home;
