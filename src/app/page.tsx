import Programs from "../component/programs/Programs";
import About from "../component/about/About";
import Hero from "../component/hero/Hero";
import Contact from "..//component/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <Contact/>
    </main>
  );
}
