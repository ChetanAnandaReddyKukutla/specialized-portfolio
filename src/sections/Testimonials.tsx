import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Janardhan Reddy",
    position: "Managing Director @ IXORA Global Services",
    text: "chetan was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "D. Vijai Kumar",
    position: "President @ SES High School",
    text: "Chetan's commitment during the Community Development Program was inspiring. He showed strong initiative, technical capability, and a sincere passion for helping others. His efforts in web development and guiding students reflected empathy, leadership, and a genuine drive to create social impact.",
    avatar: memojiAvatar2,
  },
  {
    name: "Jindal Himanshu",
    position: "Head @ ORTUS Club",
    text: "Chetan's leadership, creativity, and collaborative spirit made a remarkable impact on ORTUS. Whether organizing events or mentoring peers, he consistently brought energy, empathy, and initiative to the team. A true team player and problem-solver.",
    avatar: memojiAvatar3,
  },
  {
    name: "Jitesh Bhatia",
    position: "Course Mentor @ GeeksForGeeks",
    text: "Mentoring Chetan has been a truly rewarding experience. He displayed a strong grasp of modern web development practices and consistently approached challenges with a problem-solving mindset. His eagerness to learn, ability to implement feedback, and dedication to improving his craft made him stand out as a disciplined and capable developer.",
    avatar: memojiAvatar4,
  },
  {
    name: "Rajdeep Das",
    position: "Content Creator @ IamNoobRD",
    text: "Chetan brought a fresh creative perspective to my channel. His editing support was always timely, polished, and thoughtfully aligned with the tone of my content. He’s reliable, easy to work with, and adds genuine value to any creative collaboration.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title="Voices from My Journey"
          description="Don't just take my word for it. See what some of my clients have to say about my work."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} 
                className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300">
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex rounded-flex items-center justify-center rounded-full flex-shrink-0 ">
                    <Image
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="max-h-full " 
                    />
                    </div>
                    <div>
                      <div className="font-semibold ">{testimonial.name}</div>
                      <div className="text-sm text-white/40">{testimonial.position}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm md:text-base md:mt-6">{testimonial.text}</p>
                </Card>
              ))}
              </Fragment>
            ))}
          
          </div>
        </div>
      </div>
    </div>
  );
};
