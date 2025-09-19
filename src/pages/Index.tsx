import { Calendar, Gift, Hotel, Map, Youtube, Ticket, Plane, Globe, BedDouble } from "lucide-react";
import { FaTiktok, FaWhatsapp, FaTicketAlt } from "react-icons/fa";
import { LinkButton } from "@/components/LinkButton";
import backgroundImage from "@/assets/selorejo-lake-bg.jpg";
import videoBackground from "@/assets/video-background.mp4";

const Index = () => {
  return (
    <div 
      className="min-h-screen relative"
    >
      {/* Video background */}
      <video
        src={videoBackground}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
        style={{ zIndex: -2 }}
      >
        {/* Fallback for browsers that don't support the video element */}
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-overlay" style={{ zIndex: -1 }} />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Hotel Logo/Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg">
            Selorejo Hotel & Resort
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Hotel Rooms, Cottage, Hall, Meeting Package, Camping Ground, Outbond
          </p>
          <div className="w-24 h-1 bg-gradient-nature mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Content Card */}
        <div className="w-full max-w-sm space-y-4">
          <LinkButton
            href="https://www.booking.com/Share-foHKhPz"
            icon={Hotel}
            title="Booking.com"
            variant="nature"
            className="mb-6"
          />
          
          <LinkButton
            href="https://www.tiket.com/hotel/indonesia/selorejo-hotel-resort-206001560499427896"
            icon={Ticket}
            title="Tiket.com"
            variant="earth"
            className="mb-6"
          />
          
          <LinkButton
            href="https://www.traveloka.com/id-id/hotel/indonesia/selorejo-hotel--resort-3000010006528"
            icon={Plane}
            title="Traveloka.com"
            variant="glass"
            className="mb-6"
          />
          
          <LinkButton
            href="https://www.agoda.com/id-id/selorejo-hotel-resort/hotel/malang-id.html?cid=1844104"
            icon={Calendar}
            title="Agoda.com"
            variant="nature"
            className="mb-6"
          />

          <LinkButton
            href="https://www.reddoorz.com/id-id/hotel/indonesia/malang/ngantang/ngantang/selorejo-resort-mitra-reddoorz"
            icon={BedDouble}
            title="Reddoorz.com"
            variant="earth"
            className="mb-6"
          />
          
          <LinkButton
            href="https://id.trip.com/hotels/ngantang-hotel-detail-1486447/selorejo-hotel-resort/"
            icon={Globe}
            title="Trip.com"
            variant="glass"
            className="mb-6"
          />

          <LinkButton
            href="https://maps.app.goo.gl/xsTLvdtfFHErpVyS9"
            icon={Map}
            title="Google Maps"
            variant="nature"
          />
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <button
            onClick={() => window.open('https://youtube.com/@selorejohotel184', '_blank')}
            className="p-3 bg-white/20 text-white border border-white/30 backdrop-blur-sm hover:bg-white/30 rounded-full transition-smooth hover:scale-110 shadow-soft"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => window.open('https://tiktok.com/@selorejohotel', '_blank')}
            className="p-3 bg-white/20 text-white border border-white/30 backdrop-blur-sm hover:bg-white/30 rounded-full transition-smooth hover:scale-110 shadow-soft"
            aria-label="TikTok"
          >
            <FaTiktok className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => window.open('https://wa.me/6282232323430', '_blank')}
            className="p-3 bg-white/20 text-white border border-white/30 backdrop-blur-sm hover:bg-white/30 rounded-full transition-smooth hover:scale-110 shadow-soft"
            aria-label="WhatsApp Admin"
          >
            <FaWhatsapp className="w-6 h-6" />
          </button>
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