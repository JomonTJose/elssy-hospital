import { CalendarPlus } from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { PageHeader } from "../components/PageHeader";
import { CtaStrip } from "../components/CtaStrip";
import { YouTubeThumb } from "../components/YouTubeThumb";
import { YoutubeIcon } from "../components/SocialIcons";
import { Button } from "../components/Button";
import { Seo } from "../components/Seo";
import { facilityVideo, learningSeries, youtubeChannelUrl } from "../data/videos";

export function LearningSeries() {
  return (
    <>
      <Seo
        title="Learning Series & Hospital Tour"
        description="Watch a video tour of Elssy Hospital's facilities and our patient learning series covering varicose veins, gallbladder stones, and hernia treatment."
        path="/learning-series"
      />

      <PageHeader
        eyebrow="Learning Series"
        title="Watch, learn, and know what to expect"
        description="A short tour of our facilities, plus a patient learning series explaining common conditions and treatments in plain language."
        actions={
          <Button to={youtubeChannelUrl} external variant="outline" icon={<YoutubeIcon size={18} />}>
            Visit our YouTube channel
          </Button>
        }
      />

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Take a Look Inside" title="Our Facilities" align="left" />
          <div className="mt-10 mx-auto max-w-3xl">
            <YouTubeThumb {...facilityVideo} />
          </div>
        </Container>
      </section>

      <section className="border-y border-brand-100 bg-brand-50/60 py-20">
        <Container>
          <SectionHeading
            eyebrow="Patient Learning Series"
            title="Understand your treatment options"
            description="Short explainer videos on common conditions we treat, in Kannada and English."
            align="left"
          />
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {learningSeries.map((video) => (
              <div key={video.id}>
                <YouTubeThumb {...video} />
                <p className="mt-4 text-sm font-semibold text-brand-950">{video.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaStrip
        title="Have questions after watching?"
        description="Book a consultation and talk to our specialists directly."
        align="center"
      >
        <Button to="/book-appointment" variant="accent" icon={<CalendarPlus size={18} />}>
          Book Appointment
        </Button>
      </CtaStrip>
    </>
  );
}
