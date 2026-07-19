import { CalendarPlus } from "lucide-react";
import { Container } from "../components/Container";
import { PageHeader } from "../components/PageHeader";
import { CtaStrip } from "../components/CtaStrip";
import { GoogleReviewsWidget } from "../components/GoogleReviewsWidget";
import { Button } from "../components/Button";
import { Seo } from "../components/Seo";

export function Testimonials() {
  return (
    <>
      <Seo
        title="Patient Testimonials & Reviews"
        description="Read patient testimonials and Google reviews for Elssy Hospital, Bengaluru — real stories from people we've cared for."
        path="/testimonials"
      />

      <PageHeader
        eyebrow="Testimonials & Reviews"
        title="Stories from people we've cared for"
        description="From routine consultations to surgery, here's what patients say about their experience at Elssy Hospital."
      />

      <section className="py-20">
        <Container>
          <GoogleReviewsWidget />
        </Container>
      </section>

      <CtaStrip
        title="Ready to become our next success story?"
        description="Book a consultation and experience the Elssy Hospital difference for yourself."
        align="center"
      >
        <Button to="/book-appointment" variant="accent" icon={<CalendarPlus size={18} />}>
          Book Appointment
        </Button>
      </CtaStrip>
    </>
  );
}
