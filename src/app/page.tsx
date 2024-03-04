import Container from "@/components/Container";
import { Large, Muted } from "@/components/ui/typography";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/home"));

export default function HomePage() {
  return (
    <>
      <div className="mb-4 bg-secondary">

        <div className="min-h-[200px] flex items-center justify-center gap-3 flex-col m-auto max-w-4xl p-12">
          <Large className="text-center text-xl tracking-wide">Empowering Communication with AI Precision.</Large>

          <Muted className="text-md text-center">Unlock the future of translation with our language translator web app that seamlessly integrates AI generations. Experience precision and contextual understanding like never before. Our app leverages the power of artificial intelligence to enhance translation accuracy, adapt to evolving language nuances, and provide you with cutting-edge communication capabilities. Stay ahead with a platform that embraces the potential of AI generations, making your language translation experience smarter and more intuitive.</Muted>
        </div>

      </div>

      <Container>
        <Home />
      </Container>
    </>
  );
}
