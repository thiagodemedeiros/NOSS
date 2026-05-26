import OpenSourceInitiative from "./img/img1.webp";
import UniversidadeBrasileiraLivre from "./img/img2.png";
import PythonFloripa from "./img/img3.jpeg";
import TechFloripa from "./img/img4.jpeg";

export interface PartnerOrganization {
    id: string;
    name: string;
    atuationArea: string;
    localization: string;
    description: string;
    link: string;
    image: string;
};

export const partnerOrganizations: PartnerOrganization[] = [
    {
        id: "1",
        name: "Open Source Initiative",
        atuationArea: "Organização global dedicada à promoção e proteção do open source",
        localization: "Global / Estados Unidos",
        description: "A Open Source Initiative é uma das principais organizações globais do ecossistema de open source e atua diretamente na definição, promoção e proteção do conceito de Open Source Software.\n\nO NOSS contará com participação confirmada de representante da OSI na programação do evento.",
        link: "https://opensource.org/",
        image: OpenSourceInitiative
    },
    {
        id: "2",
        name: "Universidade Brasileira Livre",
        atuationArea: "Organização brasileira dedicada ao apoio de estudantes de todos os níveis que ajudam uns aos outros e compartilham suas experiências e conhecimentos em torno de diferentes currículos de código aberto.",
        localization: "Brasil (remoto)",
        description: "A Universidade Livre Brasileira é um projeto inspirado na Open Source Society University (OSSU). É uma comunidade sem fins lucrativos de apoio de estudantes de todos os níveis que ajudam uns aos outros e compartilham suas experiências e conhecimentos em torno de diferentes currículos de código aberto.\n\nO NOSS contará com participação confirmada de representante da UBL na programação do evento.",
        link: "https://ulivre.dev/",
        image: UniversidadeBrasileiraLivre
    },
    {
        id: "3",
        name: "Python Floripa",
        atuationArea: "Comunidade regional que reúne pessoas interessadas em Python, tecnologia e inovação por meio de encontros mensais de troca de conhecimento e conexões.",
        localization: "Florianópolis, Brasil",
        description: "A Python Floripa é uma comunidade regional que reúne entusiastas da linguagem Python em encontros mensais voltados à troca de conhecimento, networking e fortalecimento do ecossistema de tecnologia da Grande Florianópolis. Mais do que uma comunidade sobre uma linguagem, é um espaço de conexão entre pessoas, ideias e iniciativas do mundo tech.\n\nNo NOSS, a Python Floripa participará com uma Palestra ao vivo no formato híbrido - enquanto acontece o 96° meetup da comunidade no mesmo dia.",
        link: "https://python.floripa.br/",
        image: PythonFloripa
    },
    {
        id: "4",
        name: "Tech Floripa",
        atuationArea: "Hub regional que apoia, organiza e conecta eventos, comunidades, empresas e oportunidades do ecossistema de tecnologia da Grande Florianópolis.",
        localization: "Florianópolis, Brasil",
        description: "A Tech Floripa é um hub de eventos de tecnologia de Florianópolis e região, criado para fortalecer comunidades, produtores de eventos e iniciativas ligadas ao ecossistema de inovação. A plataforma apoia a divulgação de eventos, a gestão de inscrições, o controle de participantes e a emissão de certificados, além de conectar organizadores a espaços, apoiadores, patrocinadores, empresas, oportunidades de mercado e outros agentes estratégicos da comunidade tech.\n\nNo NOSS, a Tech Floripa participa da gestão do evento, atuando na organização das inscrições, na emissão de certificados e na realização de sorteios.",
        link: "https://tech.floripa.br/",
        image: TechFloripa
    },
];