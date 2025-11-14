import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { Container } from "../container";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container className="flex justify-between py-3 px-10 border-t border-neutral-200">
      <p className="text-xs text-neutral-500 flex">
        Built with <FaHeart className="mt-0.5 ml-1 mr-1" /> by Anupam Kumar
        Krishnan
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://x.com/kuma19028">
          <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://www.linkedin.com/in/anupamkumarkrishnan/">
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://github.com/anupam-kumar-krishnan">
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
};
