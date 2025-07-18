// ---------- Navbar titles
const enNavbarData = {
  title: " Shannon Taylor ",
  Home: "Home",
  publications: "Publications",
  Research: "Research",
  Jobs: "Education",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: " Shannon Taylor ",
  jobTitle: " Aspiring postdoc ",
  home_title: "About me",
  home_content: `
  <div>
  <p> I am an evolutionary developmental biologist interested in how developmental processes evolve to generate phenotypic diversity. In my postdoc, I will leverage my unique skillset in comparative embryology, gene regulatory network modeling, and quantitative imaging to uncover how subtle changes in development can drive significant phenotypic diversification. </p> 
  <p> <a href="https://shannon-e-taylor.github.io/files/resume.pdf"><b>My CV</b></a> </p>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Selected Journal Articles",

  type_one_items: [
    {
      title: `Approximated gene expression trajectories for gene regulatory network inference on cell tracks, <i>iScience</i>`,
      abstract: `<div class="image-text-container"> 
      <p>The study of pattern formation has benefited from our ability to reverse-engineer gene regulatory network (GRN) structure from spatiotemporal quantitative gene expression data. Traditional approaches have focused on systems where the timescales of pattern formation and morphogenesis can be separated. Unfortunately, this is not the case in most animal patterning systems, where pattern formation and morphogenesis are co-occurring and tightly linked. To elucidate patterning mechanisms in such systems we need to adapt our GRN inference methodologies to include cell movements. In this work, we fill this gap by integrating quantitative data from live and fixed embryos to approximate gene expression trajectories (AGETs) in single cells and use these to reverse-engineer GRNs. This framework generates candidate GRNs that recapitulate pattern at the tissue level, gene expression dynamics at the single cell level, recover known genetic interactions and recapitulate experimental perturbations while incorporating cell movements explicitly for the first time. </p> 
      <img src="https://www.cell.com/cms/10.1016/j.isci.2024.110840/asset/ba9b9789-60a1-418c-8c1f-971f485e13b1/main.assets/fx1_lrg.jpg" alt="AGETs graphical abstract" /> 
      </div>`,
      date: "2024",
      link: "https://www.cell.com/iscience/fulltext/S2589-0042(24)02065-0",
      download: "https://www.cell.com/action/showPdf?pii=S2589-0042%2824%2902065-0",
      github: "",
      writers: ["Kay Speiss", "<b>Shannon E. Taylor</b> (co-first author)", "Timothy Fulton", "Kane Toh", "Dillan Saunders", "Seongwon Huang", "Yuxan Wang", "Brooks Paige", "Benjamin Steventon", "Berta Verd"
      ],
    },
    {
      title: `The <i>Nasonia</i> pair-rule gene regulatory network retains its function over 300 million years of evolution, <i>Development</i>`,
      abstract: `<img src="files/images/TaylorDearden2022.png", alt="Timer genes graphical abstract", style="width: 800px;">
      <p>Insect segmentation is a well-studied and tractable system with which to investigate the genetic regulation of development. Though insects segment their germband using a variety of methods, modelling work implies that a single gene regulatory network can underpin the two main types of insect segmentation. This means limited genetic changes are required to explain significant differences in segmentation mode between different insects. This idea needs to be tested in a wider variety of species, and the nature of the gene regulatory network (GRN) underlying this model has not been tested. Some insects, e.g. <i>Nasonia vitripennis</i> and <i>Apis mellifera</i> segment progressively, a pattern not examined in previous studies of this segmentation model, producing stripes at different times progressively through the embryo, but not from a segment addition zone. Here, we aim to understand the GRNs patterning <i>Nasonia</i> using a simulation-based approach. We found that an existing model of <i>Drosophila</i> segmentation (Clark, 2017) can be used to recapitulate the progressive segmentation of <i>Nasonia</i>, if provided with altered inputs in the form of expression of the timer genes <i>Nv-caudal</i> and <i>Nv-odd</i> paired. We predict limited topological changes to the pair-rule network and show, by RNAi knockdown, that Nv-odd paired is required for morphological segmentation. Together this implies that very limited changes to the <i>Drosophila</i> network are required to simulate <i>Nasonia</i> segmentation, despite significant differences in segmentation modes, implying that <i>Nasonia</i> use a very similar version of an ancestral GRN used by <i>Drosophila</i>, which must therefore have been conserved for at least 300 million years.</p>
      `,
      date: "2022",
      link: "https://journals.biologists.com/dev/article/149/5/dev199632/274657/The-Nasonia-pair-rule-gene-regulatory-network",
      download: "https://journals.biologists.com/dev/article-pdf/149/5/dev199632/2135760/dev199632.pdf", 
      github: "",
      writers: ["<b>Shannon E. Taylor</b>", "Peter K. Dearden"],
    },
    {
      title: `The <i>torso-like</i> gene functions to maintain the structure of the vitelline membrane in <i>Nasonia vitripennis</i>, implying its co-option into <i>Drosophila</i> axis formation, <i>Biology Open</i>`, 
      abstract: `Axis specification is a fundamental developmental process. Despite this, the mechanisms by which it is controlled across insect taxa are strikingly different. An excellent example of this is terminal patterning, which in Diptera such as <i>Drosophila melanogaster</i> occurs via the localized activation of the receptor tyrosine kinase Torso. In Hymenoptera, however, the same process appears to be achieved via localized mRNA. How these mechanisms evolved and what they evolved from remains largely unexplored. Here, we show that <i>torso-like</i>, known for its role in <i>Drosophila</i> terminal patterning, is instead required for the integrity of the vitelline membrane in the hymenopteran wasp <i>Nasonia vitripennis</i>. We find that other genes known to be involved in <i>Drosophila</i> terminal patterning, such as <i>torso</i> and <i>Ptth</i>, also do not function in <i>Nasonia</i> embryonic development. These findings extended to orthologues of <i>Drosophila</i> vitelline membrane proteins known to play a role in localizing Torso-like in <i>Drosophila</i>; in <i>Nasonia</i> these are instead required for dorso–ventral patterning, gastrulation and potentially terminal patterning. Our data underscore the importance of the vitelline membrane in insect development, and implies phenotypes caused by knockdown of torso-like must be interpreted in light of its function in the vitelline membrane. In addition, our data imply that the signalling components of the <i>Drosophila</i> terminal patterning systems were co-opted from roles in regulating moulting, and co-option into terminal patterning involved the evolution of a novel interaction with the vitelline membrane protein Torso-like.`, 
      date: `2019`, 
      link:`https://journals.biologists.com/bio/article/8/9/bio046284/222846/The-torso-like-gene-functions-to-maintain-the`, 
      download:``, 
      github:``, 
      writers: ["<b>Shannon E. Taylor</b>", "Jack Tuffery", "Daniel Bakopoulos", "Sharon Lequeux", "Coral G. Warr", "Travis K. Johnson", "Peter K. Dearden"]
    },
  ],

  type_two_title: "Other Journal Articles",
  type_two_items: [
    {
      title: `Genetic Diversity in Invasive Populations of Argentine Stem Weevil Associated with Adaptation to Biocontrol, <i>Insects</i>`,
      abstract: `Modified, agricultural landscapes are susceptible to damage by insect pests. Biological control of pests is typically successful once a control agent has established, but this depends on the agent’s capacity to co-evolve with the host. Theoretical studies have shown that different levels of genetic variation between the host and the control agent will lead to rapid evolution of resistance in the host. Although this has been reported in one instance, the underlying genetics have not been studied. To address this, we measured the genetic variation in New Zealand populations of the pasture pest, Argentine stem weevil (Listronotus bonariensis), which is controlled with declining effectiveness by a parasitoid wasp, Microctonus hyperodae. We constructed a draft reference genome of the weevil, collected samples from a geographical survey of 10 sites around New Zealand, and genotyped them using a modified genotyping-by-sequencing approach. New Zealand populations of Argentine stem weevil have high levels of heterozygosity and low population structure, consistent with a large effective population size and frequent gene flow. This implies that Argentine stem weevils were able to evolve more rapidly than their biocontrol agent, which reproduces asexually. These findings show that monitoring genetic diversity in biocontrol agents and their targets is critical for long-term success of biological control.`,
      date: "2020",
      link: "https://www.mdpi.com/2075-4450/11/7/441",
      github: "",
      download: "",
      writers: ["Thomas W. R. Harrop", "Marissa F. Le Lec", "Ruy Jauregui", "<b>Shannon E. Taylor</b>", "Sarah N. Inwood", "Tracey van Stijn", "Hannah Henry", "John Skelly", "Siva Ganesh", "Rachael L. Ashby", "Jeanne M. E. Jacobs", "Stephen L. Goldson", "Peter K. Dearden"],
    },
    {
      title: `When ‘#xmasangels’ Tweet: a Reception Study of Craftivism as Christian Witness, <i>Ecclesial Practices</i>`,
      abstract: `Craftivism combines craft and activism. This paper contributes to the field of contemporary culture, mission, and creative making by examining the Christmas Angels project, in which local churches yarn-bomb hand-knitted angels, as an ecclesial expression of craftivism. Recipient responses to this fresh expression of Christian witness are analysed by examination of over 1,100 ‘#xmasangel’ tweets. Analysis reveals a found theology, in which angels are received with joy and surprise, understood in the context of love, experienced as a place-based gift and embody a participative making. A missiology of making is developed, reading the yarn-bombed Christmas angels as an ecclesial practice of witness in continuity with a theology of making in the Wisdom literature and ‘craft-egesis’ of mission in Acts. The research has relevance in exploring the potential of digital data in empirical ecclesial research and challenging missiology to be practical in ‘making’ a domestic turn.`,
      date: "2020",
      link: "https://brill.com/view/journals/ep/7/2/article-p143_143.xml",
            github: "",
      download: "",
      writers: ["Steve Taylor", "<b>Shannon E. Taylor</b>"],
    },
        {
      title: `The honeybee as a model insect for developmental genetics, <i>Genesis</i>`,
      abstract: `Honeybees are an important component of modern agricultural systems, and a fascinating and scientifically engrossing insect. Honeybees are not commonly used as model systems for understanding development in insects despite their importance in agriculture. Honeybee embryogenesis, while being superficially similar to Drosophila, is molecularly very different, especially in axis formation and sex determination. In later development, much of honeybee biology is modified by caste development, an as yet poorly understood, but excellent, system to study developmental plasticity. In adult stages, developmental plasticity of the ovaries, related to reproductive constraint exhibits another aspect of plasticity. Here they review the tools, current knowledge and opportunities in honeybee developmental biology, and provide an updated embryonic staging scheme to support future studies.`,
      date: "2017",
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/dvg.23019",
            github: "",
      download: "",
      writers: ["Andrew G. Cridge", "Mackenzie R. Lovegrove", "John G. Skelly", "<b>Shannon E. Taylor</b>", "Gertje E. L. Petersen", "Rosannah C. Cameron", "Peter K. Dearden"],
    },

  ],

  type_three_title: "",//Under Review
  type_three_items: [

  ],

  type_four_title: "Forthcoming",
  type_four_items: [
    {
      title: `Evolving vertebral counts without evolving the segmentation clock`,
      abstract: `A major question in evolutionary developmental biology is how organismal diversity is generated. Lake Malawi cichlid fishes are a fascinating system with which to study this problem, varying in phenotype but having extremely limited genetic diversity. We have focused on the evolution of somite number in these fishes, as segmentation/somitogenesis process is very well understood in other species.  We studied the cichlids fish, Astatotilapia calliptera and Ramphochromis chilingali, which form 30 and 38 somites respectively. The rate of segment production is the same in these two species, so we focused on differences in axial morphogenesis during somitogenesis. We found differences in embryonic morphology at the onset of somitogenesis but similarities in the dynamics of axial elongation between these species. At the onset of somitogenesis, R. chillingali embryos are longer than their A. calliptera counterparts, and the pre-somitic mesoderm (which will give rise to the somites) is larger and has more cells in R.chillingali than in A. calliptera.  However, the Tbox genes, which are required for axial elongation in other vertebrates, are expressed identically between the two species. Altogether, our work suggests that morphogenetic differences at the onset of somitogenesis might important in evolving vertebral count, while the process of somitogenesis can remain unchanged. 
`,
      date: "",
      github: "",
      download: "",
      link:'', 
      writers: ["<b>Shannon E. Taylor</b>", "Berta Verd"],
    },
  ],
};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p> 
        I am an evolutionary developmental biologist interested in how developmental processes evolve to generate phenotypic diversity. My work combines comparative embryology, gene regulatory network modeling, and quantitative imaging to uncover how subtle changes in development can drive significant phenotypic diversification. 
</p> <p>
        During my PhD, I studied Lake Malawi Cichlid fishes, a species group with striking variation in colour, size, shape, and somite/vertebrae number, despite very low genetic divergence. I showed that differences in somite number arise at the onset of somitogenesis, without changes to the underlying somitogenesis process. This highlights how subtle shifts in early development can shape major phenotypic traits.
        In parallel, I helped develop and validate a methodology to reverse-engineer gene regulatory networks (GRNs) onto moving cell tracks (published in  
<a href="https://www.cell.com/iscience/fulltext/S2589-0042(24)02065-0"><i>iScience</i></a>). This allows GRNs to be reconstructed in tissues undergoing morphogenesis, using zebrafish tailbud patterning as a case study. 
</p> <p>
Before my PhD, I worked as a research assistant in Peter Dearden's lab while I completed my undergraduate and MSc degrees. I showed that <i>Nasonia</i> segmentation is functionally homologous to that of <i>Drosophila</i>, despite 300 million years of evolution and significant differences in the dynamics of segmentation (published in <a href="https://journals.biologists.com/dev/article/149/5/dev199632/274657/The-Nasonia-pair-rule-gene-regulatory-network"><i>Development</i></a>). I also showed that the terminal patterning gene <i>torso-like</i> is required for eggshell integrity in <i>Nasonia</i>, implying its co-option into <i>Drosphila</i> axis formation (<a href="https://journals.biologists.com/bio/article/8/9/bio046284/222846/The-torso-like-gene-functions-to-maintain-the"><i>Biology Open</i></a>).  
 </p> 
 <p> As a postdoc, I aim to apply my skills in imaging, non-model organism handling, and mathematical modeling to explore how developmental systems evolve to generate the extraordinary diversity of life. </p>
    </div>
  `,
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "Education",
  items: [
    {
      title: `PhD (under examination)`,
      company: "Department of Biology, University of Oxford",
      startData: "April 2021",
      endDate: "April 2025",
      location: "Oxford, UK",
      abstract:
        "",
      achievements: ["Thesis title: Evolving developmental trajectories to generate phenotypic diversity in Lake Malawi Cichlids", "First-author publication resulting: Speiss, Taylor et al. (2024), 'Approximated gene expression trajectories for gene regulatory network inference on cell tracks', <a href='https://www.cell.com/iscience/fulltext/S2589-0042(24)02065-0'><i>iScience</i></a>", 
      "Clarendon Scholarship in Zoology: 3.5 years of full support (international fees + stipend)", 
      "William Georgetti Scholarship: 10,000NZD of conference and travel funding", 
      "Jenkinson fund: £2000 for project titled 'Quantifying genetic and morphological epigenetic landscapes in cichlid fish'"],
    },
    {
      title: `Masters of Science`,
      company: "Department of Biochemistry, University of Otago",
      startData: "April 2019",
      endDate: "August 2020",
      location: "Dunedin, Aotearoa New Zealand",
      abstract:
        "",
      achievements: ["Grade: High Distinction", "Thesis title: Using hybridization chain reaction to investigate the homology of gene regulatory networks", 
      "First-author publication resulting: Taylor and Dearden (2021), 'The <i>Nasonia</i> pair-rule gene regulatory network retains its function over 300 million years of evolution', <a href='https://journals.biologists.com/dev/article/149/5/dev199632/274657/The-Nasonia-pair-rule-gene-regulatory-network'><i>Development</i></a>"],
    },
        {
      title: `Bachelor of Biomedical Science (Honours)`,
      company: "Department of Biochemistry, University of Otago",
      startData: "February 2018",
      endDate: "November 2018",
      location: "Dunedin, Aotearoa New Zealand",
      abstract:
        "",
      achievements: ["Grade: First Class Honours", "Thesis title: The role of Numb in Honeybee Ovary Activation"],
    },
    {
      title: `Bachelor of Biomedical Science`,
      company: "Department of Biochemistry, University of Otago",
      startData: "February 2018",
      endDate: "November 2018",
      location: "Dunedin, Aotearoa New Zealand",
      abstract:
        "",
      achievements: ["Overall GPA (Undergrad & Honours)– 8.1/9"],
    },
  ],
};
