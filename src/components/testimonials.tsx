import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
import { TTestimonial } from "@/types";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";

const testimonials = [
  {
    id: "0",
    comment:
      "Frontend developer and UI/UX enthusiast. Join me on this coding adventure! Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    customer: {
      name: "Sarah Johnson",
      handle: "@SarahDigitalPro",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
  {
    id: "1",
    comment:
      "Passionate about design and technology. Let's create beautiful and intuitive digital experiences together! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    customer: {
      name: "John Smith",
      handle: "@JohnDesignTech",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
  {
    id: "2",
    comment:
      "Full-stack developer with a knack for problem-solving. Ready to tackle any challenge that comes my way! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    customer: {
      name: "Emily Davis",
      handle: "@EmilyFullStack",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
  {
    id: "3",
    comment:
      "Graphic designer by day, digital artist by night. Let's add a touch of creativity to your project! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    customer: {
      name: "Alex Turner",
      handle: "@AlexGraphicArtist",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
  {
    id: "4",
    comment:
      "Marketing strategist and data-driven analyst. Let's craft strategies that drive results and propel your business forward! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    customer: {
      name: "Olivia White",
      handle: "@OliviaMarketing",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
  {
    id: "5",
    comment:
      "Experienced project manager with a passion for efficiency and collaboration. Let's streamline your project and achieve success together! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    customer: {
      name: "Daniel Brown",
      handle: "@DanielProjectMgr",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
];

export function Testimonials() {
  return (
    <section>
      <SectionHeading>Testimonials!</SectionHeading>
      <SectionSubheading>
        Hear What Our Clients Have to Say About Their Journey with Us
      </SectionSubheading>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({
  comment,
  customer: { picture, name, handle },
}: TTestimonial) {
  return (
    <Card
      classNames={{
        base: [
          "bg-background/40",
          "dark:bg-background/50",
          "data-[hover=true]:bg-background/80",
          "dark:data-[hover=true]:bg-background/80",
          "backdrop-blur-md",
          "backdrop-saturate-150",
        ],
      }}
      className="group p-2 dark:border dark:border-foreground/10 sm:p-4 lg:p-5"
    >
      <CardHeader className="flex items-center gap-x-4">
        <Avatar isBordered radius="lg" size="md" src={picture} />
        <div className="space-y-1">
          <h3 className="font-semibold leading-none">{name}</h3>
          <span className="text-sm tracking-tight text-foreground/60">
            {handle}
          </span>
        </div>
      </CardHeader>
      <CardBody className="leading-relaxed text-foreground/60">
        <p>{comment}</p>
      </CardBody>
    </Card>
  );
}
