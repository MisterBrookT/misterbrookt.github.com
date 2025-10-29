export interface Person {
  name: string;
  link?: string;
}

export interface Publication {
  title: string;
  author: string;
  journal: string;
  year: string;
  abstract: string;
  image: string;
  paper_link?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  cvLink: string;
  github: string;
  profileImage: string;
  bio: string;
  people: Record<string, Person>;
  publications: Publication[];
  misc: {
    image: string;
    description: string;
    quote: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Yinghao Tang",
  title: "Ph.D. Student",
  email: "tangyinghao@zju.edu.cn",
  cvLink: "#",
  github: "https://github.com/MisterBrookT",
  profileImage: "/profile.jpeg",
   bio: "I am a second year Ph.D. student in Computer Science at Zhejiang University under the supervision of {Wei Chen} in VAI group. I received my B.Eng. degree from Sichuan University, where I was advised by {Mingjie Tang} in IDS lab. My research explores \"AI for Visual Communication\", focusing on [u]how to use artificial intelligence to communicate information in ways that are not only efficient but also aesthetically expressive and visually engaging[/u]. Outside my main research, I love tinkering with AI infra infrastructure and system design (side passion😊).",
  people: {
    "Wei Chen": {
      name: "Wei Chen",
      link: "http://www.cad.zju.edu.cn/home/chenwei/"
    },
    "Mingjie Tang": {
      name: "Mingjie Tang",
      link: "https://merlintang.github.io/"
    }
  },
  publications: [
    {
      title: "SCORPIO: Serving the Right Requests at the Right Time for Heterogeneous SLOs in LLM Inference",
      author: "Yinghao Tang and Tingfeng Lan and Xiuqi Huang and Hui Lu and Wei Chen",
      journal: "Preprint",
      year: "2025",
      abstract: "An SLO-oriented LLM serving system that maximizes system goodput and SLO attainment by exploiting SLO heterogeneity through adaptive scheduling across admission control, queue management, and batch selection.",
      image: "/scorpio.png",
      paper_link: "https://arxiv.org/abs/2505.23022"
    },
    {
      title: "Exploring Multimodal Prompt for Visualization Authoring with Large Language Models",
      author: "Zhen Wen and Luoxuan Weng and Yinghao Tang and Runjin Zhang and Yuxin Liu and Bo Pan and Minfeng Zhu and Wei Chen",
      journal: "Preprint",
      year: "2025",
      abstract: "A novel approach to visualization authoring using multimodal prompts with large language models.",
      image: "/vispilot.png",
      paper_link: "https://wenzhen.site/vispilot/"
    },
    {
      title: "DataLab: A Unified Platform for LLM-Powered Business Intelligence",
      author: "Luoxuan Weng and Yinghao Tang and Yingchaojie Feng and Zhuo Chang and Ruiqin Chen and Haozhe Feng and Chen Hou and Danqing Huang and Yang Li and Huaming Rao and Haonan Wang and Canshi Wei and Xiaofeng Yang and Yuhui Zhang and Yifeng Zheng and Xiuqi Huang and Minfeng Zhu and Yuxin Ma and Bin Cui and Peng Chen and Wei Chen",
      journal: "ICDE",
      year: "2025",
      abstract: "a unified BI platform that integrates a one-stop LLM-based agent framework with a augmented computational notebook interface.",
      image: "/datalab.png",
      paper_link: "https://arxiv.org/abs/2412.02205"
    },
    {
      title: "DLRover-RM: Resource Optimization for Deep Recommendation Models Training in the Cloud",
      author: "Qinlong Wang and Tingfeng Lan and Yinghao Tang and Bo Sang and Ziling Huang and Yiheng Du and Haitao Zhang and Jian Sha and Hui Lu and Yuanchun Zhou and others",
      journal: "VLDB",
      year: "2024",
      abstract: "An efficient resource management system for training deep recommendation models in cloud environments.",
      image: "/dlrover.png",
      paper_link: "https://www.vldb.org/pvldb/vol17/p4130-tang.pdf"
    },
    {
      title: "MixLoRA: Enhancing Large Language Models Fine-Tuning with LoRA-based Mixture of Experts",
      author: "Dengchun Li and Yingzi Ma and Naizheng Wang and Zhengmao Ye and Zhiyuan Cheng and Yinghao Tang and Yan Zhang and Lei Duan and Jie Zuo and Cal Yang and Mingjie Tang",
      journal: "Preprint",
      year: "2024",
      abstract: "A novel approach to fine-tune large language models using LoRA-based mixture of experts, improving efficiency and performance.",
      image: "/mixlora.png",
      paper_link: "https://arxiv.org/abs/2404.15159"
    },
  ],
  misc: {
    image: "/chromakopia.jpeg",
    description: "Except for academics, I keep the habits of reading and exercising, including swimming and working out. I love music, especially R&B and Hip-Hop 🎧. My favorite artists are Tyler, The Creator and Frank Ocean. One of my favorite quotes from `White Ferrari` by Frank Ocean is:",
    quote: "Mind Over Matter is magic, I do magic."
  }
}; 