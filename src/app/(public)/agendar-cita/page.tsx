import BookingForm from "@/components/BookingForm";
import ImageCarousel from "@/components/ImageCarousel";

export default function AgendarCitaPage() {
  return (
    <section className="w-full flex items-center justify-center bg-light-gray py-16 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Booking Form */}
        <div className="flex justify-center w-full max-w-4xl">
          <BookingForm />
        </div>

        {/* Right Column: Image Carousel */}
        <div className="w-full h-full min-h-[700px] hidden md:block">
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}