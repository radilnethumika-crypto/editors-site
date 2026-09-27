import { site } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20your%20editing%20services`}
      target="_blank"
      rel="noopener"
     className="fixed bottom-6 right-4 md:bottom-5 md:right-5 z-40 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 md:px-5 rounded-full shadow-2xl shadow-green-500/30 flex items-center gap-2 text-sm md:text-base"
    >
      💬 WhatsApp
    </a>
  );
}
