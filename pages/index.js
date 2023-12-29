import Banner from "./home/banner";
import About from "./home/about";
import Scop from "../components/common/scop";
import Find from "./home/find";
import Special from "./home/special";
import Testimonials from "../components/common/testimonials";
export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <About />
        <Scop />
        <Find />
        <Special />
        <Testimonials />
      </main>
    </>
  );
}
