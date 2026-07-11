import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const highlights = [
  {
    value: "100%",
    label: "Bahan Pilihan",
  },
  {
    value: "Autentik",
    label: "Cita Rasa Solo",
  },
  {
    value: "Hangat",
    label: "Dibakar Saat Dipesan",
  },
];

export default function About() {
  return (
    <Section id="about" className="bg-surface">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* About Image */}
          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/about/about-restaurant.png"
                alt="Proses pembakaran sate di Warung Sate Solo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 -z-10 size-40 rounded-full bg-secondary/20 blur-3xl"
            />
          </div>

          {/* About Content */}
          <div>
            <SectionTitle
              eyebrow="Tentang Kami"
              title="Cita Rasa Solo yang Dihidangkan dengan Sepenuh Hati"
              description="Kami menghadirkan sate dengan bahan pilihan, racikan bumbu khas, dan proses pembakaran yang menjaga cita rasa autentik di setiap tusuknya."
            />

            <p className="mt-6 leading-relaxed text-text-secondary">
              Bagi kami, makanan bukan hanya tentang rasa. Setiap hidangan
              dibuat untuk menghadirkan kehangatan, kebersamaan, dan pengalaman
              bersantap yang berkesan bagi setiap pelanggan.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-secondary pl-4"
                >
                  <p className="font-heading text-2xl font-semibold text-primary">
                    {item.value}
                  </p>

                  <p className="mt-1 text-sm text-text-secondary">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}