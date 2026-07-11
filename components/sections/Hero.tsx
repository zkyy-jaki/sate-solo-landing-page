import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Hero Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Cita Rasa Khas Solo
            </p>

            <h1 className="max-w-2xl font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl">
              Nikmati Sate Autentik dengan Cita Rasa yang Istimewa
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Dibuat menggunakan bahan pilihan dan resep keluarga untuk
              menghadirkan cita rasa khas Solo yang hangat di setiap
              hidangan.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg">
                Pesan Sekarang
              </Button>

              <Button
                variant="secondary"
                size="lg"
              >
                Lihat Menu
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
           <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/hero/sate-hero.png"
              alt="Sate khas Solo dengan bumbu kecap dan cabai"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-8 -z-10 size-40 rounded-full bg-secondary/20 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 -z-10 size-48 rounded-full bg-primary/15 blur-3xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}