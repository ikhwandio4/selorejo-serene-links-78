import { Calendar, Camera, Gift } from "lucide-react";
import { LinkButton } from "@/components/LinkButton";
import backgroundImage from "@/assets/selorejo-lake-bg.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Hotel Logo/Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg">
            Hotel Selorejo
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Nature Resort & Wellness
          </p>
          <div className="w-24 h-1 bg-gradient-nature mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Content Card */}
        <div className="w-full max-w-sm space-y-4">
          <LinkButton
            href="https://booking.example.com"
            icon={Calendar}
            title="Book Now"
            variant="nature"
            className="mb-6"
          />
          
          <LinkButton
            href="https://promos.example.com"
            icon={Gift}
            title="Special Promos"
            variant="earth"
            className="mb-6"
          />
          
          <LinkButton
            href="https://gallery.example.com"
            icon={Camera}
            title="Photo Gallery"
            variant="glass"
          />
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-white/70 text-sm">
            Discover tranquility at Selorejo Lake
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;