import { render, screen, fireEvent, within } from "@testing-library/react";
import type { ComponentProps } from "react";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: ComponentProps<"a">) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

describe("Header", () => {
  it("renders the shop name", () => {
    render(<Header />);
    expect(screen.getByText("SparkleClean Co")).toBeInTheDocument();
  });

  it("contains a nav link to Services and Contact", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: /main navigation/i });
    expect(within(nav).getByRole("link", { name: /services/i })).toHaveAttribute("href", "#services");
    expect(within(nav).getByRole("link", { name: /contact/i })).toHaveAttribute("href", "#contact");
  });

  it("has a 'Book a pickup' CTA linking to #contact", () => {
    render(<Header />);
    const ctas = screen.getAllByRole("link", { name: /book a pickup/i });
    expect(ctas.length).toBeGreaterThanOrEqual(1);
    for (const cta of ctas) {
      expect(cta).toHaveAttribute("href", "#contact");
    }
  });
});

describe("Hero", () => {
  it("renders the eyebrow text", () => {
    render(<Hero />);
    expect(screen.getByText("Pickup & delivery across the metro area")).toBeInTheDocument();
  });

  it("renders the main headline containing 'fresh'", () => {
    render(<Hero />);
    expect(screen.getByText(/Laundry that comes back/)).toBeInTheDocument();
    expect(screen.getByText("fresh")).toBeInTheDocument();
  });

  it("renders a CTA linking to #contact", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /book a pickup/i })).toHaveAttribute("href", "#contact");
  });

  it("renders at least one trust fact", () => {
    render(<Hero />);
    expect(screen.getByText("7-day pickup guarantee")).toBeInTheDocument();
    expect(screen.getByText("Free detergent")).toBeInTheDocument();
    expect(screen.getByText("Satisfaction guaranteed")).toBeInTheDocument();
  });
});

describe("Services", () => {
  it("renders the section with id='services'", () => {
    render(<Services />);
    const section = document.getElementById("services");
    expect(section).not.toBeNull();
  });

  it("renders all four service names from data", () => {
    render(<Services />);
    expect(screen.getByRole("heading", { name: "Wash & Fold" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Dry Cleaning" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Ironing & Pressing" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Pickup & Delivery" })).toBeInTheDocument();
  });
});

describe("Pricing", () => {
  it("renders the three pricing tier names", () => {
    render(<Pricing />);
    expect(screen.getByRole("heading", { name: "Everyday" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Household" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Garment Care" })).toBeInTheDocument();
  });

  it("renders the $1.80 price for the Everyday tier", () => {
    render(<Pricing />);
    expect(screen.getByText("$1.80")).toBeInTheDocument();
  });

  it("marks the Household tier as most popular", () => {
    render(<Pricing />);
    expect(screen.getByText("Most popular")).toBeInTheDocument();
  });
});

describe("ContactForm", () => {
  it("renders Name and Email inputs and the submit button", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("shows a confirmation message on submit", () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Jane Doe" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "jane@example.com" } });

    const form = screen.getByText("Name").closest("form")!;
    fireEvent.submit(form);

    expect(screen.getByText(/Thanks — we'll reach out within one business day/)).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("renders the dynamic copyright line with the current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    const copyright = screen.getByText(new RegExp(`©\\s*${year}\\s*SparkleClean Co\\.\\s*All rights reserved`, "i"));
    expect(copyright).toBeInTheDocument();
  });

  it("renders the wordmark 'SparkleClean Co.'", () => {
    render(<Footer />);
    expect(screen.getByText("SparkleClean Co.")).toBeInTheDocument();
  });
});
