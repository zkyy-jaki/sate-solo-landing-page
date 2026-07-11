import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
export default function Home() {
  return (
    <Section>
    <Container className="py-20">
      <h1 className="text-4xl font-bold">Warung Sate Solo</h1>
      <p className="mt-4 text-text-secondary">
        Landing Page sedang dibangun...
      </p>
              <div className="flex gap-4">
          <Button>Pesan Sekarang</Button>

          <Button variant="secondary">
            Lihat Menu
          </Button>

          <Button variant="ghost">
            Hubungi Kami
          </Button>
        </div>

    </Container>
    </Section>
  );
}