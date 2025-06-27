// ---------- Navbar titles
const enNavbarData = {
  title: " Shannon Taylor ",
  Home: "Home",
  publications: "publications",
  Research: "Research",
  Jobs: "Jobs",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: " Shannon Taylor ",
  jobTitle: " Job title ",
  home_title: "About me",
  home_content: `
  <div>
  <p> I am passionate about... </p> 
  </div>
  `,
};



// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Selected Journal Articles",

  type_one_items: [
    {
      title: `Approximated gene expression trajectories for gene regulatory network inference on cell tracks`,
      abstract: `The study of pattern formation has benefited from our ability to reverse-engineer gene regulatory network (GRN) structure from spatiotemporal quantitative gene expression data. Traditional approaches have focused on systems where the timescales of pattern formation and morphogenesis can be separated. Unfortunately, this is not the case in most animal patterning systems, where pattern formation and morphogenesis are co-occurring and tightly linked. To elucidate patterning mechanisms in such systems we need to adapt our GRN inference methodologies to include cell movements. In this work, we fill this gap by integrating quantitative data from live and fixed embryos to approximate gene expression trajectories (AGETs) in single cells and use these to reverse-engineer GRNs. This framework generates candidate GRNs that recapitulate pattern at the tissue level, gene expression dynamics at the single cell level, recover known genetic interactions and recapitulate experimental perturbations while incorporating cell movements explicitly for the first time.`,
      date: "2024",
      link: "https://www.cell.com/iscience/fulltext/S2589-0042(24)02065-0",
      github: "",
      download: "https://www.cell.com/action/showPdf?pii=S2589-0042%2824%2902065-0",
      writers: ["Kay Speiss", "Shannon E. Taylor"],
    },
    {
      title: `The Nasonia pair-rule gene regulatory network retains its function over 300 million years of evolution`,
      abstract: `Insect segmentation is a well-studied and tractable system with which to investigate the genetic regulation of development. Though insects segment their germband using a variety of methods, modelling work implies that a single gene regulatory network can underpin the two main types of insect segmentation. This means limited genetic changes are required to explain significant differences in segmentation mode between different insects. This idea needs to be tested in a wider variety of species, and the nature of the gene regulatory network (GRN) underlying this model has not been tested. Some insects, e.g. Nasonia vitripennis and Apis mellifera segment progressively, a pattern not examined in previous studies of this segmentation model, producing stripes at different times progressively through the embryo, but not from a segment addition zone. Here, we aim to understand the GRNs patterning Nasonia using a simulation-based approach. We found that an existing model of Drosophila segmentation ( Clark, 2017) can be used to recapitulate the progressive segmentation of Nasonia, if provided with altered inputs in the form of expression of the timer genes Nv-caudal and Nv-odd paired. We predict limited topological changes to the pair-rule network and show, by RNAi knockdown, that Nv-odd paired is required for morphological segmentation. Together this implies that very limited changes to the Drosophila network are required to simulate Nasonia segmentation, despite significant differences in segmentation modes, implying that Nasonia use a very similar version of an ancestral GRN used by Drosophila, which must therefore have been conserved for at least 300 million years.`,
      date: "2022",
      link: "https://journals.biologists.com/dev/article/149/5/dev199632/274657/The-Nasonia-pair-rule-gene-regulatory-network",
      download: "https://journals.biologists.com/dev/article-pdf/149/5/dev199632/2135760/dev199632.pdf", 
      writers: ["Shannon E. Taylor", "Peter K. Dearden"],
    },
    {
      title: `The torso-like gene functions to maintain the structure of the vitelline membrane in Nasonia vitripennis, implying its co-option into Drosophila axis formation`, 
      abstract: ``, 
      date: `2019`, 
      writers: ["Shannon E. Taylor", "Jack Tuffery", "Daniel Bakopoulos", "Sharon Lequeux", "Coral G. Warr", "Travis K. Johnson", "Peter K. Dearden"]
    },
  ],


  type_two_title: "Other Journal Articles",
  type_two_items: [
    {
      title: `Development review`,
      abstract: ``,
      date: "forthcoming",
      link: "",
      github: "",
      writers: [],
    },

  ],

  type_three_title: "Under review", 
  type_three_items: [
      {
      title: `Development review`,
      abstract: ``,
      date: "forthcoming",
      link: "",
      github: "",
      writers: [],
    },
  ]

  type_four_title: "In preparation",
  type_four_items: [
    {
      title: `Cichlids 1`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `Cichlids 2`,
      abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla"],
    },
  ],
};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p> My research goal is to combine the three major sub-fields of the Computational Social Science, including Social Media Data Analysis, Network Analysis, and Agent-based Modeling, to study various social science problems. Below you can find a summary of my past and current projects.</p>
        <br />
        <h4 style="font-size: 1.1rem "> Identifying and Characterizing US Domestic Ideological Extremists </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
        <img src='../files/images/research.png' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat <br /> imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet <br /> lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
    </div>
  `,
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Jobs",
  items: [
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "20 April 2022",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2", "achievement 3"],
    },
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2"],
    },
  ],
};
