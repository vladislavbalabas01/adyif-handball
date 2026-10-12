import Logo from "../ui/Logo";
import Slider from "./Slider";

const HeroSection = () => {
  return (
    <section className="mb-6 container">
      {/* Фон */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.25),rgba(255,255,255,0))] z-0" />
      <div className="flex justify-center my-6">
        <Logo width={20} />
      </div>
      <div className="overflow-hidden rounded-2xl md:container">
        <Slider />
      </div>
    </section>
  );
};

export default HeroSection;
