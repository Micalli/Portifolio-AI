import {Aws} from "../../view/components/icons/Aws";
import { JavaScript } from "../../view/components/icons/JS";
import { Tailwind } from '../../view/components/icons/Tailwind';
import { Redis } from '../../view/components/icons/Redis';
import { Prisma } from '../../view/components/icons/Prisma';
import { PostgreeSql } from '../../view/components/icons/PostgreeSql';
import { NodeJs } from '../../view/components/icons/NodeJs';
import { NestJs } from '../../view/components/icons/NestJs';
import { TypeScript } from '../../view/components/icons/TS';
import { GitHub } from '../../view/components/icons/GitHub';
import { Instagram } from '../../view/components/icons/Instagram';
import { Linkedin } from '../../view/components/icons/Linkedin';
import { WhatsApp } from '../../view/components/icons/WhatsApp';

export const liOptions = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Chat",
    path: "/chat",
  },
  {
    name: "Sobre",
    path: "/about",
  },
  {
    name: "Contato",
    path: "/contact",
  },
 
  {
    name: "Projetos",
    path: "/projects",
  },
  {
    name: "Todo",
    path: "/todo",
  },
];


export const iconsHabilities = [
  {
    title: "Aws",
    icon: Aws,
  },
  {
    title: "Javascript",
    icon: JavaScript,
  },
  {
    title: "NestJs",
    icon: NestJs,
  },
  {
    title: "Node",
    icon: NodeJs,
  },
  {
    title: "PostgreeSql",
    icon: PostgreeSql,
  },
  {
    title: "Prisma",
    icon: Prisma,
  },
  {
    title: "Redis",
    icon: Redis,
  },
  {
    title: "Tailwind",
    icon: Tailwind
  },
  {
    title: "Typescript",
    icon: TypeScript
  },
];

export const socialMidia = [
  {
    href: "https://github.com/Micalli",
    icon: GitHub,
  },
  {
    href: "https://www.instagram.com/brunomicalli/",
    icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/in/brunomicalli/",
    icon: Linkedin,
  },
  {
    href: "https://w.app/f745b9",
    icon: WhatsApp,
  },
];


interface teste {
  priority: "Alta" | "Média" | "Baixa";
  value: "HIGH" | "MEDIUM" | "LOW";
}

export const priorities: teste[] = [
  {
    priority: "Alta",
    value: "HIGH",
  },
  {
    value: "MEDIUM",
    priority: "Média",
  },
  {
    value: "LOW",
    priority: "Baixa",
  },
];