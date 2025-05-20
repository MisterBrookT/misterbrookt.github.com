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

export interface Project {
  title: string;
  description: string;
  link?: string;
  image: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  cvLink: string;
  blogLink: string;
  profileImage: string;
  bio: string;
  background: string[];
  people: Record<string, Person>;
  publications: Publication[];
  projects: Project[];
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
  blogLink: "#",
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
      link: "https://scholar.google.com/citations?user=8nQkQJwAAAAJ"
    }
  },
  publications: [
    {
      title: "MixLoRA: Enhancing Large Language Models Fine-Tuning with LoRA-based Mixture of Experts",
      author: "Dengchun Li and Yingzi Ma and Naizheng Wang and Zhengmao Ye and Zhiyuan Cheng and Yinghao Tang and Yan Zhang and Lei Duan and Jie Zuo and Cal Yang and Mingjie Tang",
      journal: "Preprint",
      year: "2024",
      abstract: "A novel approach to fine-tune large language models using LoRA-based mixture of experts, improving efficiency and performance.",
      image: "/mixlora.png"
    },
    {
      title: "DLRover-RM: Resource Optimization for Deep Recommendation Models Training in the Cloud",
      author: "Qinlong Wang and Tingfeng Lan and Yinghao Tang and Bo Sang and Ziling Huang and Yiheng Du and Haitao Zhang and Jian Sha and Hui Lu and Yuanchun Zhou and others",
      journal: "Proc. VLDB Endow.",
      year: "2024",
      abstract: "An efficient resource management system for training deep recommendation models in cloud environments.",
      image: "/dlrover.png"
    }
  ],
  projects: [
    {
      title: "Project Title 1",
      description: "Short description of the project goes here. What did you build? What was the impact?",
      link: "#",
      image: "/proj1-placeholder.png"
    },
    {
      title: "Project Title 2",
      description: "Short description of the project goes here. What did you build? What was the impact?",
      link: "#",
      image: "/proj2-placeholder.png"
    }
  ],
  misc: {
    image: "/childhood-placeholder.png",
    description: "I love playing piano and swimming. I am a big fan of Tottenham Hotspur since 2009. I enjoy reading Murakami Haruki's novels and exploring new technologies.",
    quote: "Stay hungry, stay foolish."
  }
}; 