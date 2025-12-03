'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const FactsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state immediately
      cardsRef.current.forEach((card) => {
        gsap.set(card, {
          opacity: 0,
          y: 12,
          scale: 0.98
        });
      });

      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.to(card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power4.out",
            delay: index * 0.03,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const references = [
    {
      id: 1,
      citation: 'National Institute of Standards and Technology, "Quantum Computing Explained." [Online]. Available: https://www.nist.gov/quantum-information-science/quantum-computing-explained',
      url: 'https://www.nist.gov/quantum-information-science/quantum-computing-explained'
    },
    {
      id: 2,
      citation: 'IBM, "What Is Quantum Computing?" [Online]. Available: https://www.ibm.com/think/topics/quantum-computing',
      url: 'https://www.ibm.com/think/topics/quantum-computing'
    },
    {
      id: 3,
      citation: 'QuantumExplainer.com, "Qubit Vs Bit: The Key Differences Explained." [Online]. Available: https://quantumexplainer.com/qubit-vs-bit-the-key-differences-explained/',
      url: 'https://quantumexplainer.com/qubit-vs-bit-the-key-differences-explained/'
    },
    {
      id: 4,
      citation: 'TechTarget, "What is NISQ Computing? Pros and Cons." [Online]. Available: https://www.techtarget.com/searchcio/definition/NISQ-computing',
      url: 'https://www.techtarget.com/searchcio/definition/NISQ-computing'
    },
    {
      id: 5,
      citation: 'QuantumGrad.com, "The NISQ Era of Quantum Computing: Challenges and Opportunities." [Online]. Available: https://www.quantumgrad.com/article/733',
      url: 'https://www.quantumgrad.com/article/733'
    },
    {
      id: 6,
      citation: 'NIH PMC, "The complexity of NISQ." [Online]. Available: https://pmc.ncbi.nlm.nih.gov/articles/PMC10522708/',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10522708/'
    },
    {
      id: 7,
      citation: 'Wikipedia, "Shor\'s algorithm." [Online]. Available: https://en.wikipedia.org/wiki/Shor\'s_algorithm',
      url: 'https://en.wikipedia.org/wiki/Shor\'s_algorithm'
    },
    {
      id: 8,
      citation: 'QAI.ca, "Shor\'s Algorithm and RSA Encryption." [Online]. Available: https://www.qai.ca/resource-library/shors-algorithm-and-rsa-encryptionnbsp',
      url: 'https://www.qai.ca/resource-library/shors-algorithm-and-rsa-encryptionnbsp'
    },
    {
      id: 9,
      citation: 'HashiCorp, "Harvest now, decrypt later: Why today\'s encrypted data isn\'t safe forever." [Online]. Available: https://www.hashicorp.com/en/blog/harvest-now-decrypt-later-why-today-s-encrypted-data-isn-t-safe-forever',
      url: 'https://www.hashicorp.com/en/blog/harvest-now-decrypt-later-why-today-s-encrypted-data-isn-t-safe-forever'
    },
    {
      id: 10,
      citation: 'Palo Alto Networks, "Harvest Now, Decrypt Later (HNDL): The Quantum-Era Threat." [Online]. Available: https://www.paloaltonetworks.com/cyberpedia/harvest-now-decrypt-later-hndl',
      url: 'https://www.paloaltonetworks.com/cyberpedia/harvest-now-decrypt-later-hndl'
    },
    {
      id: 11,
      citation: 'National Institute of Standards and Technology, "What Is Post-Quantum Cryptography?" [Online]. Available: https://www.nist.gov/cybersecurity/what-post-quantum-cryptography',
      url: 'https://www.nist.gov/cybersecurity/what-post-quantum-cryptography'
    },
    {
      id: 12,
      citation: 'Spherity.com, "Q-Day and Agentic AI: The Ultimate Nightmare in Cybersecurity." [Online]. Available: https://www.spherity.com/post/q-day-and-agentic-ai-the-ultimate-nightmare-in-cybersecurity',
      url: 'https://www.spherity.com/post/q-day-and-agentic-ai-the-ultimate-nightmare-in-cybersecurity'
    },
    {
      id: 13,
      citation: 'PostQuantum, "The Trouble with Quantum Computing and Q-Day Predictions." [Online]. Available: https://postquantum.com/q-day/q-day-predictions/',
      url: 'https://postquantum.com/q-day/q-day-predictions/'
    },
    {
      id: 14,
      citation: 'NIST, "Post-Quantum Cryptography FIPS Approved." [Online]. Available: https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved',
      url: 'https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved'
    },
    {
      id: 15,
      citation: 'Holland & Knight, "NIST Releases Three Post-Quantum Cryptography Standards." [Online]. Available: https://www.hklaw.com/en/insights/publications/2024/08/nist-releases-three-post-quantum-cryptography-standards',
      url: 'https://www.hklaw.com/en/insights/publications/2024/08/nist-releases-three-post-quantum-cryptography-standards'
    },
  ];

  const facts = [
    {
      id: 1,
      title: "Qubits vs Bits",
      description: "Classical computers store information in bits that are either 0 or 1. Quantum computers use qubits, which can exist in a superposition of 0 and 1 at the same time, allowing them to explore many possible solutions in parallel.",
      citations: [1, 2, 3]
    },
    {
      id: 2,
      title: "Current Limitations",
      description: "Today's quantum computers are NISQ (Noisy Intermediate-Scale Quantum) machines with tens to hundreds of qubits. They are very sensitive to noise, lose quantum states quickly, and can only run short, error-prone calculations.",
      citations: [4, 5, 6]
    },
    {
      id: 3,
      title: "Breaking Encryption",
      description: "A powerful quantum computer could break today's encryption standards using Shor's algorithm. This threatens RSA and elliptic-curve cryptography that secure HTTPS websites, VPNs, secure email, and financial systems.",
      citations: [7, 8]
    },
    {
      id: 4,
      title: "Harvest Now, Decrypt Later",
      description: "Attackers can collect encrypted data today and store it until quantum computers become powerful enough to break the encryption. This 'harvest now, decrypt later' strategy threatens long-term secrets like medical records and diplomatic messages.",
      citations: [9, 10, 11]
    },
    {
      id: 5,
      title: "Q-Day Warnings",
      description: "Security agencies warn of a future 'Q-Day' when quantum computers become powerful enough to break widely used encryption. Governments like the UK's NCSC advise moving to quantum-safe cryptography by the 2030s.",
      citations: [12, 13]
    },
    {
      id: 6,
      title: "Post-Quantum Solutions",
      description: "NIST has finalized the first three post-quantum cryptography standards (FIPS 203, 204, 205) to resist attacks from both classical and quantum computers. These new algorithms will replace vulnerable encryption systems.",
      citations: [14, 15]
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading bg-gradient-to-r from-white via-quantum-text-primary to-white bg-clip-text text-transparent">
            Clear Facts About Quantum Computing
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-quantum-crimson via-quantum-maroon to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facts.map((fact) => (
            <motion.div
              key={fact.id}
              ref={addToRefs}
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glassmorphism rounded-xl p-6 quantum-glow hover:quantum-glow-strong transition-all duration-500 bg-gradient-to-br from-quantum-bg-secondary/60 via-quantum-bg-tertiary/40 to-quantum-bg-secondary/60 border border-quantum-maroon/20 hover:border-quantum-crimson/40 relative overflow-hidden group"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-quantum-crimson/5 via-transparent to-quantum-maroon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-quantum-crimson to-quantum-maroon rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="text-xl font-semibold text-quantum-text-primary group-hover:text-quantum-crimson transition-colors duration-300 font-heading">
                    {fact.title}
                  </h3>
                </div>

                <p className="text-quantum-text-secondary leading-relaxed group-hover:text-quantum-text-primary/90 transition-colors duration-300 mb-3">
                  {fact.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gradient-to-r from-transparent via-quantum-maroon/30 to-transparent">
                  {fact.citations.map((citationId) => (
                    <span
                      key={citationId}
                      className="text-xs px-2 py-1 rounded bg-quantum-bg-tertiary/50 text-quantum-text-secondary/70 hover:text-quantum-crimson hover:bg-quantum-crimson/10 transition-all cursor-default border border-quantum-maroon/10 hover:border-quantum-crimson/30"
                    >
                      [{citationId}]
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expert Insight Card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-20 max-w-4xl mx-auto group"
        >
          {/* Decorative border gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-quantum-crimson/20 via-quantum-maroon/30 to-quantum-crimson/20 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
          
          {/* Main card */}
          <div className="relative glassmorphism rounded-2xl p-10 bg-gradient-to-br from-quantum-bg-secondary/60 via-quantum-bg-tertiary/40 to-quantum-bg-secondary/60 border border-quantum-crimson/20 hover:border-quantum-crimson/40 transition-all duration-500 shadow-2xl">
            {/* Quote icon decoration */}
            <div className="absolute top-6 left-6 text-quantum-crimson/10 text-6xl font-serif leading-none">"</div>
            <div className="absolute bottom-6 right-6 text-quantum-crimson/10 text-6xl font-serif leading-none rotate-180">"</div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-quantum-crimson/50 to-quantum-crimson/50" />
                <h3 className="text-2xl md:text-3xl font-bold text-quantum-crimson font-heading tracking-wide">
                  Expert Insight
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-quantum-crimson/50 to-quantum-crimson/50" />
              </div>
              
              <p className="text-quantum-text-primary text-center mb-6 font-medium">
                <span className="text-quantum-crimson font-semibold">Thomas Bispham</span> — Managing Partner, Black Lotus Quantum Ventures
              </p>
              
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-quantum-maroon to-transparent mx-auto mb-6" />
              
              <p className="text-quantum-text-primary/95 italic text-center leading-relaxed text-lg md:text-xl font-light relative z-10">
                "Shor's algorithm guarantees that today's encryption will eventually break,
                and personal access to advanced quantum systems could shift global power 
                dynamics in unpredictable ways. Early guardrails and public awareness are essential."
              </p>
            </div>
          </div>
        </motion.div>

        {/* References Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-quantum-maroon/50 to-quantum-maroon/50" />
            <h3 className="text-2xl font-semibold text-white font-heading text-center">
              References
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-quantum-maroon/50 to-quantum-maroon/50" />
          </div>
          <div className="space-y-3">
            {references.map((ref) => {
              const citationParts = ref.citation.split('Available:');
              const citationText = citationParts[0] + 'Available:';
              return (
                <div
                  key={ref.id}
                  className="flex gap-3 text-sm text-quantum-text-secondary leading-relaxed"
                >
                  <span className="text-quantum-crimson font-medium flex-shrink-0">
                    [{ref.id}]
                  </span>
                  <span className="flex-1">
                    {citationText}{' '}
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-quantum-crimson hover:text-quantum-maroon transition-colors underline break-all"
                    >
                      {ref.url}
                    </a>
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FactsSection;
