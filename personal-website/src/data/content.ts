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
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  cvLink: string;
  github: string;
  profileImage: string;
  bio: string;
  background: string[];
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
  bio: "I am a Ph.D. candidate in Computer Science at Zhejiang University under the supervision of {Wei Chen} in VAI group.",
  background: [
    "I received my B.Eng. degree from Sichuan University, where I was advised by {Mingjie Tang} in IDS lab.",
    "My research interests include MLsys, LLM training and visualization.",
    "I am passionate about building efficient and scalable machine learning systems."
  ],
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
      title: "Exploring Multimodal Prompt for Visualization Authoring with Large Language Models",
      author: "Zhen Wen and Luoxuan Weng and Yinghao Tang and Runjin Zhang and Yuxin Liu and Bo Pan and Minfeng Zhu and Wei Chen",
      journal: "Preprint",
      year: "2025",
      abstract: "A novel approach to visualization authoring using multimodal prompts with large language models.",
      image: "/vispilot.png"
    },
    {
      title: "DataLab: A Unified Platform for LLM-Powered Business Intelligence",
      author: "Luoxuan Weng and Yinghao Tang and Yingchaojie Feng and Zhuo Chang and Ruiqin Chen and Haozhe Feng and Chen Hou and Danqing Huang and Yang Li and Huaming Rao and Haonan Wang and Canshi Wei and Xiaofeng Yang and Yuhui Zhang and Yifeng Zheng and Xiuqi Huang and Minfeng Zhu and Yuxin Ma and Bin Cui and Peng Chen and Wei Chen",
      journal: "ICDE",
      year: "2025",
      abstract: "a unified BI platform that integrates a one-stop LLM-based agent framework with a augmented computational notebook interface.",
      image: "/datalab.png"
    },
    {
      title: "DLRover-RM: Resource Optimization for Deep Recommendation Models Training in the Cloud",
      author: "Qinlong Wang and Tingfeng Lan and Yinghao Tang and Bo Sang and Ziling Huang and Yiheng Du and Haitao Zhang and Jian Sha and Hui Lu and Yuanchun Zhou and others",
      journal: "VLDB",
      year: "2024",
      abstract: "An efficient resource management system for training deep recommendation models in cloud environments.",
      image: "/dlrover.png"
    },
    {
      title: "MixLoRA: Enhancing Large Language Models Fine-Tuning with LoRA-based Mixture of Experts",
      author: "Dengchun Li and Yingzi Ma and Naizheng Wang and Zhengmao Ye and Zhiyuan Cheng and Yinghao Tang and Yan Zhang and Lei Duan and Jie Zuo and Cal Yang and Mingjie Tang",
      journal: "Preprint",
      year: "2024",
      abstract: "A novel approach to fine-tune large language models using LoRA-based mixture of experts, improving efficiency and performance.",
      image: "/mixlora.png"
    },
  ],
  misc: {
    image: "/childhood-placeholder.png",
    description: "I love playing piano and swimming. I am a big fan of Tottenham Hotspur since 2009. I enjoy reading Murakami Haruki's novels and exploring new technologies.",
    quote: "Stay hungry, stay foolish."
  }
}; 