---
marp: true
backgroundColor: "#fcfcfc"
color: "#000000"
style: |
  img[alt~="center"] {
    display: block;
    margin: 0 auto;
  }
  section.header {
    text-align: center;
    color: "#091a37";
  }
  h1, h2, h3 { 
      text-align: center;
  }
  table {
      font-size: 14px;
      margin-left: auto;
      margin-right: auto;
  }
---
<!-- _class: header -->

<!-- _backgroundColor: '#0E1536' -->
<!-- _color: white -->

# Artificial Intelligence

![h:100 bg right](images/SanTSG_100.yil-Logo_beyaz.svg)



---

# Outline

- History of AI
  - What is AI?
  - Definitions
- AI Overview
  - Supervised, Unsupervised, Reinforcement, Generative AI
- Generative AI
  - LLMs, Agents, RAG, MCP
- RAG Demo
- Q&A

---

![center](images/history-of-ai.webp "AI History")

---

## What is AI?

Systems or machines that can simulate human intelligence.

- **Learning** from data (machine learning)
- **Reasoning** to solve problems
- **Understanding** language (natural language processing)
- **Perceiving** the world (computer vision)
- **Acting** autonomously (virtual agents)

---

## Definitions

- **Artificial Intelligence (AI):** A branch of computer science focused on creating machines that simulate human intelligence.
- **Machine Learning (ML):** Enables systems to learn from data and improve over time without explicit programming.
- **Neural Networks (NNs):** Computational models inspired by the human brain, used for pattern recognition and classification.
- **Deep Learning (DL):** A subset of ML that uses multi-layered neural networks to model complex patterns in data.
- **Generative AI (GenAI):** AI systems capable of creating new content, such as text, images, or audio.
- **Large Language Models (LLMs):** Advanced GenAI models specialized in understanding and generating human language.
---

![center h:600](images/ai-diagram.png)

---

# Overlook of AI

- Supervised Learning
- Unsupervised Learning
- Reinforcement Learning
- Generative AI

---

## Supervised Learning

Supervised learning is a type of machine learning where models are trained on labeled data to predict outcomes for new, unseen inputs.

---

![center](images/supervise-learning.png)

---

## Unsupervised Learning

Unsupervised learning is a machine learning approach where models find patterns or groupings in data without labeled outcomes.

---

![center](images/unsupervised-learning.png)

---

## Reinforcement Learning

Reinforcement learning is a type of machine learning where an **agent** learns to make **decisions** by interacting with an **environment** and receiving **rewards** or **penalties** based on its actions.

---

![center h:600](images/reinforcement-learning.png)

---

<div align="center">
  <iframe width="700" height="400" src="https://www.youtube.com/embed/hgjsLmFSkxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

---

# Generative AI

- Generative AI refers to systems that can create new content—such as text, images, or audio—by learning patterns from existing data.
- It predicts which token will be next based on previous tokens.

---

## Large Language Models (LLMs)

Large Language Models (LLMs) are advanced AI models trained on vast amounts of text data to understand and generate human-like language.

---

## Agents

Agents are AI systems that can autonomously perceive their environment, reason, and take actions to achieve specific goals, often using chain-of-thought reasoning.

---

## Retrieval Augmental Generation (RAG)

An AI technique that combines retrieving relevant information from external sources with generating natural language responses to provide more accurate and informed answers.

---
![RAG](images/rag.png)

---

# **Model Context Protocol (MCP)**

LLMs are stateless—they forget previous interactions unless context is provided each time. **Model Context Protocol (MCP)** is a software protocol or architecture layer designed to address this by:

- Managing context, memory, and state across interactions
- Coordinating multiple AI components, tools, and agents
- Facilitating complex, multi-turn interactions with LLMs and agent-based systems

---

MCP enables:

- Multi-turn conversation history
- Agent planning and decision tracking
- Long-term memory and goal management

---

| Component               | Role                                                                |
| ----------------------- | ------------------------------------------------------------------- |
| 🧠 **Context Manager**  | Stores conversation history, task steps, memory states              |
| 🧾 **Memory Store**     | Saves structured and unstructured memory (vector DB, key-value)     |
| 🔧 **Tool Router**      | Routes requests to external tools/functions (APIs, databases, etc.) |
| 🔄 **LLM Orchestrator** | Manages calls to different LLMs with contextual prompts             |
| 🧑‍💼 **Agent Manager** | Coordinates AI agents, tracks their goals and subtasks              |

---

# Q&A

---

# **Resources**

- https://medium.com/@lmpo/a-brief-history-of-ai-with-deep-learning-26f7948bc87b

- https://medium.com/womenintechnology/ai-c3412c5aa0ac

- https://www.youtube.com/watch?v=LPZh9BOjkQs
