import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
export default function Home() {
  return (
    <Section>
      <Container>
        <SectionTitle
          eyebrow="Tentang Kami"
          title="Cita Rasa Autentik dari Solo"
          description="Sate yang dibuat menggunakan resep keluarga, bahan pilihan, dan cita rasa khas yang terus dijaga."
        />

        <div className="mt-8 flex flex-wrap gap-4">
          <Button>Pesan Sekarang</Button>

          <Button variant="secondary">
            Lihat Menu
          </Button>
        </div>
      </Container>
    </Section>
  );
}