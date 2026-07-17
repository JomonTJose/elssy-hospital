import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Seo } from "../components/Seo";

export function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <Container className="flex flex-col items-center py-32 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-accent-600">404</p>
        <h1 className="mt-3 font-serif-display text-3xl font-semibold text-brand-950">
          We couldn't find that page
        </h1>
        <p className="mt-3 max-w-md text-slate-600">
          The page you're looking for may have moved. Head back home or get in touch with us directly.
        </p>
        <div className="mt-8 flex gap-4">
          <Button to="/">Back to Home</Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </Container>
    </>
  );
}
