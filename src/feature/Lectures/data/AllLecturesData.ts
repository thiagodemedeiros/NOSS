import { type AllLecturesData } from "./IAllLecturesData";

export const allLecturesData: AllLecturesData[] = [
    {
        speaker: {
            id: "1",
            name: "Nick Vidal",
            bio: "Nick é Gerente de Marketing e Comunidade na Open Source Initiative. Anteriormente, ele foi Diretor de Outreach no Confidential Computing Consortium da Linux Foundation e Diretor das Américas na Open Invention Network.",
            photoUrl: "https://github.com/cumbucadev/NOSS/raw/2026-atualiza-grade/2026/assets/images/participantes/nick-vidal.jpg",
            pronouns: "ele/dele",
            linkedIn: "https://www.linkedin.com/in/nickvidal",
            github: "https://github.com/nickvidal",
            lecture: {
                title: "Maintaine.rs: Os heróis invisíveis do Open Source",
                description: "Grande parte da infraestrutura digital que usamos diariamente depende de projetos Open Source mantidos por pessoas que quase nunca recebem reconhecimento.\n\nInspirada nas histórias do projeto maintaine.rs, esta palestra apresenta o lado humano do Open Source e destaca o papel essencial dos mantenedores na construção, segurança e evolução das tecnologias que movem a internet.\n\nA conversa aborda desafios como sustentabilidade, burnout, colaboração e comunidade, além de refletir sobre como empresas e desenvolvedores podem apoiar melhor quem mantém o ecossistema funcionando.",
                topics: [
                    "O impacto dos mantenedores no ecossistema tecnológico",
                    "Os desafios invisíveis da manutenção",
                    "Sustentabilidade e colaboração em comunidades",
                    "Como apoiar projetos e mantenedores"
                ],
                infos: {
                    typeOfLecture: "Palestra",
                    category: "FLOSS",
                    nivel: "Iniciante",
                    experienceOnOpenSource: "Básico",
                    language: "Português"
                }
            }
        }
    },
    {
        speaker: {
            id: "2",
            name: "Mr Enderson",
            bio: "Enderson Menezes Candido 30 anos, Engenheiro de Software pela UniCesumar e Pós Graduado em DevOps pela PUC Minas, atualmente trabalhando como Lead de Infraesteutura na Thoughtworks. Apaixonado pela cultura Geek, aluno de Capoeira pela Betel, atuando no mercado de TI a 10 anos.",
            photoUrl: "https://github.com/cumbucadev/NOSS/raw/2026-atualiza-grade/2026/assets/images/participantes/mr-enderson.jpg",
            pronouns: "ele/dele",
            linkedIn: "https://www.linkedin.com/in/endersonmenezes/",
            github: "www.enderson.dev",
            lecture: {
                title: "GitHub, OpenSource e Comunidades",
                description: "Apresentação de uma base teorica e cientifica sobre comunidades e contribuições e discussão sobre o nosso impacto nesse ecosistema.",
                topics: [
                    "Ciência por trás de comunidades",
                    "Projetos open source para contribuir",
                    "Primeiros passos",
                ],
                infos: {
                    typeOfLecture: "Palestra",
                    category: "Projeto",
                    nivel: "Iniciante",
                    experienceOnOpenSource: "Nenhuma experiência",
                    language: "Português"
                }
            }
        }
    },
    {
        speaker: {
            id: "3",
            name: "Carlos Becker",
            bio: "GoReleaser maintainer, software engineer at GitHub",
            photoUrl: "https://github.com/cumbucadev/NOSS/raw/2026-atualiza-grade/2026/assets/images/participantes/carlos-becker.png",
            pronouns: "ele/dele",
            linkedIn: "https://www.linkedin.com/in/caarlos0/",
            github: "https://github.com/caarlos0",
            lecture: {
                title: "O valor do portfólio na era da AI",
                description: 'Minha idéia é fazer uma provocação. Agora que "código é mato", qual o valor do OpenSource? O que diferencia um portfólio bom de um ruim?\n\nMinha teoria é que é um misto de "quão boa essa idéia é", como o autor gerencia a comunidade em volta dos seus projetos (caso tenha uma), e talvez um pouco de "novelty".',
                topics: [
                    "Aproveitar a AI pra testar idéias",
                    "Experimentar coisas",
                    "Resolver problemas reais",
                ],
                infos: {
                    typeOfLecture: "Palestra",
                    category: "Carreira",
                    nivel: "Iniciante",
                    experienceOnOpenSource: "Nenhuma experiência",
                    language: "Português"
                }
            }
        }
    },
    {
        speaker: {
            id: "4",
            name: "Camis Moreira",
            bio: "Oiie, sou Camis, não binária e goiana do pé rachado, sou Coordenador de Tecnologia que prega a palavra de que lideranças técnicas também podem ser humanas. Já fiz de tudo um pouco para os projetos darem certo e, atualmente estou no universo Salesforce. Sou fundadora da Portera Tech, fofoqueira e falo sobre carreira, gestão e comunicação entre equipes.",
            photoUrl: "https://github.com/cumbucadev/NOSS/raw/2026-atualiza-grade/2026/assets/images/participantes/camis-moreira.jpeg",
            pronouns: "elu/delu",
            linkedIn: "https://www.linkedin.com/in/camismoreira",
            lecture: {
                title: "Comunidade e Diversidade: uma combinação obrigatória",
                description: "Falar sobre diversidade na tecnologia vai muito além de números e discursos prontos. Ambientes realmente inclusivos são construídos através de conexões, pertencimento e comunidades que acolhem diferentes vivências, trajetórias e perspectivas.\n\nNesta palestra, vamos conversar sobre o impacto das comunidades na construção de espaços mais diversos dentro da tecnologia, como elas fortalecem profissionais historicamente minorizados e por que diversidade e colaboração precisam caminhar juntas para transformar o mercado tech.\n\nUma troca sobre representatividade, inclusão, networking, desenvolvimento profissional e o poder que comunidades têm de gerar oportunidades, apoio e mudanças reais no ecossistema de tecnologia.",
                topics: [
                    "Empatia",
                    "Respeito",
                ],
                infos: {
                    typeOfLecture: "Palestra",
                    category: "Pessoas",
                    nivel: "Iniciante",
                    experienceOnOpenSource: "Nenhuma experiência",
                    language: "Português"
                }
            }
        }
    },
    {
        speaker: {
            id: "5",
            name: "Maitê",
            bio: "Iniciei minha migração de carreira em 2021 e, desde então, venho em dedicado a me aprimorar no desenvolvimento de software. Já tive experiência com desenvolvimento e faço parte da Cumbuca Dev como Pessoa Iniciante Contribuidora. Desde que comecei a fazer parte da Cumbuca, tive a oportunidade de aprender sobre o desenvolvimento de linguagens de programação, gerenciamento de comunidade e produção de material educacional para a área de tecnologia.",
            photoUrl: "https://github.com/cumbucadev/NOSS/raw/2026-atualiza-grade/2026/assets/images/participantes/maite.jpg",
            pronouns: "ela/dela",
            linkedIn: "https://www.linkedin.com/in/maicapref/",
            github: "https://github.com/maitecr",
            lecture: {
                title: "Desenvolvendo Sistemas em Língua Portuguesa - Venha conhecer!",
                description: "Apresentação do ecossistema desenvolvido pela Design Líquido, em que serão apresentadas as linguagens e recursos desenvolvidos até então para que as pessoas consigam desenvolver com linguagens em língua portuguesa.",
                topics: [
                    "Linguagens de Programação em Português",
                    "Desenvolvimento de Sistemas",
                    "Ecossistema Design Líquido"
                ],
                infos: {
                    typeOfLecture: "Palestra",
                    category: "Projeto",
                    nivel: "Iniciante",
                    experienceOnOpenSource: "Básico",
                    language: "Português"
                }
            }
        }
    },
    {
        speaker: {
            id: "6",
            name: "Hisham Muhammad",
            bio: "Fazendo software livre há mais de 20 anos — criador do htop (monitor de processos), do LuaRocks (gerenciador de pacotes da linguagem Lua), do GoboLinux (distro que inspirou o Homebrew) e fui core team do Kong (API gateway open source mais usada no mundo). Hoje trabalho com Rust para sistemas embarcados na osdyne.",
            photoUrl: "https://github.com/cumbucadev/NOSS/raw/2026-atualiza-grade/2026/assets/images/participantes/hisham-muhammad.jpg",
            pronouns: "ele/dele",
            linkedIn: "https://br.linkedin.com/in/hishamhm",
            github: "https://github.com/hishamhm",
            lecture: {
                title: "Software livre, ontem e hoje",
                description: "Como foi a jornada de um desenvolvedor de software livre no Brasil nas últimas décadas? E qual é a realidade hoje? O que foi mudando nesse tempo e segue mudando agora? O que permanece igual? Que lições dá pra pegar do passado, e quais as coisas novas a construir? São muitas perguntas, que rendem um papo que pode dar pano pra manga! Bora fazer esse encontro de gerações e pensar juntos!",
                topics: [
                    "História do Software Livre",
                    "Evolução do Ecossistema",
                    "Lições do Passado"
                ],
                infos: {
                    typeOfLecture: "Palestra",
                    category: "FLOSS",
                    nivel: "Iniciante",
                    experienceOnOpenSource: "Básico",
                    language: "Português"
                }
            }
        }
    },
    {
        speaker: {
            id: "7",
            name: "FeliPython",
            bio: "FeliPython aqui! Premiado com PSF Fellow, Community Service Award e Dorneles Treméa.",
            photoUrl: "https://github.com/cumbucadev/NOSS/raw/2026-atualiza-grade/2026/assets/images/participantes/felipython.jpg",
            pronouns: "ele/dele",
            linkedIn: "https://www.linkedin.com/in/felipythondev/",
            github: "https://github.com/felipythondev/",
            lecture: {
                title: "Como contribuir open source mudou a minha vida",
                description: "Pretendo contar minha trajetória profissional e compartilhar a importância dos eventos, da contribuições e da comunidade open source nela.",
                topics: [
                    "Contribuição Open Source",
                    "Desenvolvimento de Carreira",
                    "Comunidade e Oportunidades"
                ],
                infos: {
                    typeOfLecture: "Palestra",
                    category: "Carreira",
                    nivel: "Iniciante",
                    experienceOnOpenSource: "Nenhuma experiência",
                    language: "Português"
                }
            }
        }
    },
    {
        speaker: {
            id: "8",
            name: "Pachi Parra",
            bio: "Pachi Parra é profissional de Developer Relations e autora do livro O que é DevRel?. Já atuou em empresas como GitHub e New Relic, com foco em comunidades técnicas, educação para pessoas desenvolvedoras e fortalecimento do ecossistema open source no Brasil.",
            photoUrl: "https://github.com/cumbucadev/NOSS/raw/2026-atualiza-grade/2026/assets/images/participantes/pachi-parra.png",
            pronouns: "ela/dela",
            linkedIn: "https://www.linkedin.com/in/pachicodes/",
            github: "https://github.com/pachicodes",
            lecture: {
                title: "Contribuindo com Open Source: por onde começar?",
                description: "Minha palestra será sobre como começar a contribuir com projetos open source de forma prática, acessível e sem medo. A ideia é mostrar que contribuir não é algo reservado apenas para pessoas muito experientes ou para quem escreve código todos os dias.\n\nVou abordar os primeiros passos, como entender a documentação, escolher uma issue, abrir uma primeira contribuição e participar da comunidade de forma respeitosa e colaborativa. Também quero mostrar que contribuição open source vai além de código: documentação, tradução, testes, revisão, divulgação e organização de comunidades também são formas valiosas de fortalecer projetos abertos.",
                topics: [
                    "Primeiros Passos",
                    "Documentação",
                    "Issues e Contribuições",
                    "Comunidade"
                ],
                infos: {
                    typeOfLecture: "Palestra",
                    category: "FLOSS",
                    nivel: "Iniciante",
                    experienceOnOpenSource: "Nenhuma experiência",
                    language: "Português"
                }
            }
        }
    },
    {
        speaker: {
            id: "9",
            name: "Mateus Roveda",
            bio: "Engenheiro de software, especialista em DevOps e um dos mantenedores da Universidade Brasileira Livre, com experiência em desenvolvimento, GNU/Linux, infraestrutura, IA e boas práticas. Mestre em computação aplicada e apaixonado por compartilhar conhecimentos e estar em comunidade.",
            photoUrl: "https://github.com/cumbucadev/NOSS/raw/2026-atualiza-grade/2026/assets/images/participantes/mateus-roveda.png",
            pronouns: "ele/dele",
            linkedIn: "https://www.linkedin.com/in/mateusrovedaa/",
            github: "https://github.com/mateusrovedaa/",
            lecture: {
                title: "Conhecimento livre: como a Universidade Brasileira Livre surgiu e como posso contribuir",
                description: "Talk sobre a ulivre.dev, mostrando um pouco da ideia inicial, como colocamos em prática e como ela tem se sustentado até então, abrindo caminhos para as pessoas poderem contribuir também.",
                topics: [
                    "Conhecimento Livre",
                    "Universidade Brasileira Livre",
                    "Contribuição em Projetos"
                ],
                infos: {
                    typeOfLecture: "Palestra",
                    category: "Projeto",
                    nivel: "Iniciante",
                    experienceOnOpenSource: "Nenhuma experiência",
                    language: "Português"
                }
            }
        }
    },
    {
        speaker: {
            id: "10",
            name: "MelissaWM",
            bio: "Melissa é matemática, mãe e apaixonada por ciência e computação científica. Trabalhou como professora e pesquisadora em matemática aplicada por quase 10 anos. Hoje trabalha como Senior DevEx Engineer na Quansight, interagindo com projetos e comunidades open source e com clientes da indústria. É mantenedora das bibliotecas NumPy, SciPy e napari.",
            photoUrl: "https://github.com/cumbucadev/NOSS/raw/2026-atualiza-grade/2026/assets/images/participantes/melissawm.jpg",
            pronouns: "ela/dela",
            linkedIn: "https://www.linkedin.com/in/axequalsb/",
            github: "https://github.com/melissawm",
            lecture: {
                title: "Open source vs. IA: Um panorama das políticas de engajamento atuais",
                description: "Com o uso cada vez mais frequente de IA por pessoas desenvolvedoras, um desafio recente entre mantenedores de projetos open source tem sido lidar com contribuições geradas total ou parcialmente por IA. Em alguns casos, a contribuição é totalmente automatizada, sem que um humano sequer supervisione o resultado.\n\nVários projetos já se mobilizam para instituir políticas que definem limites para o uso de IA em seus repositórios. Nesta palestra, vamos discutir o panorama atual, quais são as questões a serem consideradas e o que podemos esperar do futuro das contribuições em projetos open source.",
                topics: [
                    "IA em Open Source",
                    "Políticas de Engajamento",
                    "Contribuições Automatizadas",
                    "Futuro do Open Source"
                ],
                infos: {
                    typeOfLecture: "Palestra",
                    category: "FLOSS",
                    nivel: "Iniciante",
                    experienceOnOpenSource: "Básico",
                    language: "Português"
                }
            }
        }
    },
    {
        speaker: {
            id: "11",
            name: "Anna e Só",
            bio: "Anna e só é uma líder no ecossistema de projetos livres e abertos nascida e criada em Goiânia. Estabelecendo-se como uma hacker que conecta tecnologia — a sua criação, construção, manutenção e uso — e impacto social, ela já trabalhou (e aprendeu) com a Wikimedia Foundation, MediaLab/UFG, Open Collective, Internews Network e SECTI-GO. Atua como líder do programa Outreachy, oferecendo oportunidades no open source para minorias na tecnologia; como pesquisadora no Lab Livre/UnB; e está em seu último ano da graduação em Sistemas de Informação na Universidade Federal de Goiás.",
            photoUrl: "https://github.com/cumbucadev/NOSS/raw/2026-atualiza-grade/2026/assets/images/participantes/anna-e-so.jpg",
            pronouns: "ela/dela",
            linkedIn: "https://linkedin.com/annaeso",
            github: "https://github.com/contraexemplo",
            lecture: {
                title: "Para onde vai o software livre?",
                description: "O regime de Donald Trump tem forçado países em todo o mundo a pensar na sua dependência dos Estados Unidos e em soberania digital — e nesse cenário, iniciativas de software livre como o Sovereign Tech Fund têm se destacado. No Brasil, iniciativas interseccionais foram timidamente retomadas pela atual gestão do governo federal — dentre elas, a construção da plataforma Brasil Participativo. Mas entre sistemas de IA, crises de financiamento e transições geracionais, para onde vai o software livre?\n\nVamos discutir conjunturas, preocupações e aspirações para o futuro. Como o software livre se encaixa no mundo de hoje — seus princípios ainda fazem sentido? O seu modelo social e financeiro é sustentável? Algo virá para superar o software livre?",
                topics: [
                    "Governança de Software Livre",
                    "Soberania Digital",
                    "Financiamento e Sustentabilidade",
                    "Futuro do Ecossistema"
                ],
                infos: {
                    typeOfLecture: "Palestra",
                    category: "FLOSS",
                    nivel: "Intermediário",
                    experienceOnOpenSource: "Básico",
                    language: "Português"
                }
            }
        }
    },
    {
        speaker: {
            id: "12",
            name: "Eduardo Oliveira",
            bio: "Sou o Eduardo, Desenvolvedor FullStack, Autista com diagnóstico tardio. Sou Licenciado em Matemática. Durante a graduação fiz pesquisa em Matemática Aplicada e Computacional. Transicionei de carreira durante a pandemia e desde o começo da carreira atuo em startup's e empresas pequenas. Atualmente, participo, também, da organização da comunidade Portera Tech. Fora do trabalho, gosto de ler, jogar videogame e escrever.",
            photoUrl: "https://github.com/cumbucadev/NOSS/raw/2026-atualiza-grade/2026/assets/images/participantes/eduardo-oliveira.jpeg",
            pronouns: "ele/dele",
            linkedIn: "https://www.linkedin.com/in/edujso/",
            github: "https://github.com/EduardoJM/",
            lecture: {
                title: "Contribuindo para o Open-Source sendo uma pessoa comum",
                description: "Atuando em empresas pequenas e startup's sempre utilizei e sugeri a implantação de muitas ferramentas open-source e self-hosted nos fluxos, até o momento em que passei a criar meus próprios projetos open-source e contribuir em outros. A proposta dessa palestra é trazer um exemplo real de como, enquanto uma pessoa comum, é possível contribuir e/ou criar seus próprios projetos open-source que serão utilizados por outras pessoas sem comentários comuns do tipo \"procure por good first issues\".",
                topics: [
                    "Criação de Projetos Open Source",
                    "Contribuições Práticas",
                    "Divulgação de Projetos",
                    "Oportunidades Reais"
                ],
                infos: {
                    typeOfLecture: "Palestra",
                    category: "Desenvolvimento",
                    nivel: "Iniciante",
                    experienceOnOpenSource: "Básico",
                    language: "Português"
                }
            }
        }
    },
];