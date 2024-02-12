import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSubheading } from "@/components/ui/section-subheading";
import { getTestimonialsFromDB } from "@/lib/services";
import { TTestimonial } from "@/types";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";

const testimonials = [
  {
    id: "0",
    comment:
      "Frontend developer anLorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    customer: {
      name: "Sarah Johnson",
      handle: "@SarahDigitalPro",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
  {
    id: "1",
    comment:
      "Passionate about design Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. and tcreate beautiful and intuitive digital experiences together! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    customer: {
      name: "John Smith",
      handle: "@JohnDesignTech",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
  {
    id: "2",
    comment:
      "Full-stack developeany challenge that comes my way! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    customer: {
      name: "Emily Davis",
      handle: "@EmilyFullStack",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
  {
    id: "3",
    comment:
      "Graphic designer by day, diga touch of creativity to your project! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    customer: {
      name: "Alex Turner",
      handle: "@AlexGraphicArtist",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
  {
    id: "4",
    comment:
      "Marketing strategist Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. and datathat drive results and propel your business forward! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
  {
    id: "6",
    comment:
      "Frontend developer and UI/UX Join me on this coding adventure! Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    customer: {
      name: "Sarah Johnson",
      handle: "@SarahDigitalPro",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
  {
    id: "7",
    comment:
      "Passionate about design and tcreate beautiful and intuitive digital experiences together! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    customer: {
      name: "John Smith",
      handle: "@JohnDesignTech",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
  {
    id: "8",
    comment:
      "Full-stack developer with a kproblem-solving. Ready to tackle any challenge that comes my way! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    customer: {
      name: "Emily Davis",
      handle: "@EmilyFullStack",
      picture: "https://source.unsplash.com/random/?random,person",
    },
  },
];

export async function Testimonials() {
  // const testimonials = await getTestimonialsFromDB();

  return (
    <section className="py-20">
      <SectionHeading>Recommendations!</SectionHeading>
      <SectionSubheading>
        Learn about the positive impact our services have had on our customers
        through their testimonials.
      </SectionSubheading>
      <div className="mt-10 [column-fill:_balance] sm:columns-2 lg:columns-3">
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
      isHoverable
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
      className="group mb-4 p-2 dark:border dark:border-foreground/10 
      sm:break-inside-avoid sm:p-4 lg:p-5"
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
