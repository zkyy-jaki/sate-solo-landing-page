import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { menuItems } from "@/data/menu";

const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export default function FeaturedMenu() {
  const featuredMenuItems = menuItems.filter(
    (item) => item.featured
  );

  return (
    <Section id="menu">
      <Container>
        <SectionTitle
          eyebrow="Menu Pilihan"
          title="Menu Favorit Pelanggan"
          description="Nikmati pilihan hidangan khas dengan bahan berkualitas dan cita rasa yang selalu kami jaga."
          align="center"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredMenuItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-border bg-surface"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-semibold text-text">
                    {item.name}
                  </h3>

                  <p className="shrink-0 font-semibold text-primary">
                    {currencyFormatter.format(item.price)}
                  </p>
                </div>

                <p className="mt-3 leading-relaxed text-text-secondary">
                  {item.description}
                </p>

                <Button
                  variant="secondary"
                  className="mt-6 w-full"
                >
                  Pesan Menu
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}