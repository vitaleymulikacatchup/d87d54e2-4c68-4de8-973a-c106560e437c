"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogoBillboardSplitImage from '@/components/sections/hero/HeroLogoBillboardSplitImage';
import MediaGridAbout from '@/components/sections/about/MediaGridAbout';
import FeatureCardEighteen from '@/components/sections/feature/FeatureCardEighteen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBase from '@/components/sections/footer/FooterBase';
import { MessageSquare } from "lucide-react";

export default function F1ElitePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="animatedAurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Models", id: "models" },
            { name: "Performance", id: "performance" },
            { name: "Teams", id: "teams" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="F1 ELITE"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplitImage
          logoText="F1 ELITE"
          description="Experience the pinnacle of motorsport engineering. Discover the cutting-edge performance machines that dominate the world's most prestigious racing competition."
          buttons={[
            { text: "Explore Models", href: "https://www.linkedin.com" },
            { text: "Learn More", href: "#performance" }
          ]}
          layoutOrder="default"
          splitImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057949801-x5uf0ox9.jpg"
          splitImageAlt="Formula 1 race car in motion"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057959499-hnf3m9qa.jpg"
          imageAlt="F1 track racing circuit"
          frameStyle="card"
        />
      </div>

      <div id="models" data-section="models">
        <MediaGridAbout
          title="Engineering Excellence"
          description="Our collection showcases the finest examples of Formula 1 automotive design, combining aerodynamic precision with raw performance. Each model represents years of technological innovation and racing heritage."
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057951059-s02vonf6.jpg", imageAlt: "Ferrari F1 car detail" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057952260-6ttdjdvi.jpg", imageAlt: "Mercedes F1 car detail" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057953483-z359sddc.jpg", imageAlt: "Red Bull F1 car detail" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057954948-ru3n0cno.jpg", imageAlt: "McLaren F1 car detail" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057956962-t2npbiro.jpg", imageAlt: "F1 car cockpit" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057957781-q0xgobwv.jpg", imageAlt: "F1 car on track" }
          ]}
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="performance" data-section="performance">
        <FeatureCardEighteen
          negativeCard={{
            title: "Conventional Racing",
            items: ["Limited aerodynamic efficiency", "Slower acceleration", "Higher fuel consumption", "Reduced tire lifespan"],
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057961644-rsk0qpya.jpg",
            imageAlt: "Standard racing approach"
          }}
          positiveCard={{
            title: "F1 Elite Performance",
            items: ["Advanced aerodynamic design", "Exceptional acceleration", "Optimized fuel efficiency", "Superior tire performance"],
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057949801-x5uf0ox9.jpg",
            imageAlt: "F1 Elite superior performance"
          }}
          animationType="slide-up"
          title="Why F1 Elite Dominates"
          description="Experience the competitive advantage that separates champions from competitors."
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="lineup" data-section="lineup">
        <ProductCardThree
          products={[
            {
              id: "1",
              name: "Ferrari Scuderia F1",
              price: "$2,850,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057951059-s02vonf6.jpg",
              imageAlt: "Ferrari Scuderia F1"
            },
            {
              id: "2",
              name: "Mercedes AMG F1",
              price: "$2,920,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057952260-6ttdjdvi.jpg",
              imageAlt: "Mercedes AMG F1"
            },
            {
              id: "3",
              name: "Red Bull RB20",
              price: "$2,890,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057953483-z359sddc.jpg",
              imageAlt: "Red Bull RB20"
            },
            {
              id: "4",
              name: "McLaren MCL38",
              price: "$2,800,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057954948-ru3n0cno.jpg",
              imageAlt: "McLaren MCL38"
            }
          ]}
          title="F1 Car Lineup"
          description="Discover our complete collection of high-performance Formula 1 racing machines."
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          gridVariant="two-columns-alternating-heights"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Unmatched Performance Specifications"
          tag="Performance"
          metrics={[
            {
              id: "1",
              value: "370",
              description: "Maximum speed in km/h achieved on race tracks"
            },
            {
              id: "2",
              value: "1050",
              description: "Peak horsepower delivered by hybrid power units"
            },
            {
              id: "3",
              value: "0-100",
              description: "Acceleration in 2.6 seconds from standing start"
            },
            {
              id: "4",
              value: "73",
              description: "Total racing championships across our lineup"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="teams" data-section="teams">
        <SocialProofOne
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057968976-mcamo3cw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057970269-wkehxwtr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057971581-jrnpudt6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057976029-4qbqmmxw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057977088-qave34sz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057978237-i2tb4tkv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057979317-aqvum3v2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057980201-icunna8g.jpg"
          ]}
          title="Trusted by Top Racing Teams"
          description="Leading Formula 1 teams worldwide choose F1 Elite for championship-winning performance"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          testimonials={[
            {
              id: "1",
              title: "Championship Performance",
              quote: "F1 Elite machines have delivered consistent podium finishes. The engineering precision and reliability are unmatched in the sport.",
              name: "Lewis Hamilton",
              role: "Racing Driver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057962797-ggo3ok38.jpg",
              imageAlt: "Lewis Hamilton"
            },
            {
              id: "2",
              title: "Speed and Reliability",
              quote: "Every lap counts. The performance characteristics of these cars give us the competitive edge we need to win races.",
              name: "Max Verstappen",
              role: "Champion Driver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057963749-20wwburq.jpg",
              imageAlt: "Max Verstappen"
            },
            {
              id: "3",
              title: "Engineering Marvel",
              quote: "The attention to aerodynamic detail and mechanical precision is exceptional. These machines are built for champions.",
              name: "Charles Leclerc",
              role: "Ferrari Driver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057964870-46v2ln3n.jpg",
              imageAlt: "Charles Leclerc"
            },
            {
              id: "4",
              title: "Uncompromising Quality",
              quote: "F1 Elite represents the pinnacle of motorsport technology. Every component reflects decades of racing heritage.",
              name: "Fernando Alonso",
              role: "Veteran Racing Driver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057965873-qs1ewdjs.jpg",
              imageAlt: "Fernando Alonso"
            },
            {
              id: "5",
              title: "Game Changing Performance",
              quote: "The innovation in these machines pushes the boundaries of what's possible in motorsport competition.",
              name: "Lando Norris",
              role: "McLaren Driver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057966869-w2nsnn7c.jpg",
              imageAlt: "Lando Norris"
            },
            {
              id: "6",
              title: "Built for Victory",
              quote: "Consistency, speed, and reliability - F1 Elite delivers everything a championship team needs.",
              name: "George Russell",
              role: "Mercedes Driver",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766057967795-ftteju0p.jpg",
              imageAlt: "George Russell"
            }
          ]}
          variant="card"
          title="Trusted by Champions"
          description="Hear from the world's top racing drivers about F1 Elite performance"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          faqs={[
            {
              id: "1",
              title: "What makes F1 Elite cars superior?",
              content: "F1 Elite cars feature cutting-edge aerodynamic design, hybrid power units producing 1050 horsepower, and advanced materials for optimal performance and reliability."
            },
            {
              id: "2",
              title: "Are these vehicles street legal?",
              content: "These are specialized racing machines designed specifically for Formula 1 competition. They meet all international racing regulations and are not intended for street use."
            },
            {
              id: "3",
              title: "What is the maintenance schedule?",
              content: "F1 cars require specialized maintenance between races. Our team provides comprehensive support including engine rebuilds, aerodynamic adjustments, and component replacements."
            },
            {
              id: "4",
              title: "How do I arrange a viewing?",
              content: "Contact our team directly to schedule a private viewing. We offer detailed presentations of our complete lineup at our headquarters or preferred locations."
            }
          ]}
          ctaTitle="Interested in F1 Elite?"
          ctaDescription="Get in touch with our team to discuss your racing ambitions and explore partnership opportunities."
          ctaButton={{ text: "Contact Us", href: "mailto:hello@f1elite.com" }}
          ctaIcon={MessageSquare}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Product",
              items: [
                { label: "Models", href: "models" },
                { label: "Performance", href: "performance" },
                { label: "Teams", href: "teams" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "#" },
                { label: "Resources", href: "#" }
              ]
            }
          ]}
          logoText="F1 ELITE"
          copyrightText="© 2025 F1 Elite | All rights reserved"
        />
      </div>
    </ThemeProvider>
  );
}