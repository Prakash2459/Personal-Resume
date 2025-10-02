export default function Home() {
  return (
    <div className="max-w-none">
      {/* Quick Contact Links */}
      <nav className="mb-8 grid gap-4 sm:grid-cols-3" role="navigation" aria-label="Contact Information">
        <a className="card fade-in-up p-4 text-sm text-center" style={{animationDelay: '0ms'}} href="mailto:prakashprakash2459@gmail.com" aria-label="Send email to Jambula Venkata Jaya Prakash Reddy">📧 Email</a>
        <a className="card fade-in-up p-4 text-sm text-center" style={{animationDelay: '80ms'}} href="https://www.jayaprakash.space" target="_blank" rel="noreferrer noopener" aria-label="Visit personal website">🌐 Website</a>
        <a className="card fade-in-up p-4 text-sm text-center" style={{animationDelay: '160ms'}} href="https://github.com/Prakash2459" target="_blank" rel="noreferrer noopener" aria-label="View GitHub profile">💻 GitHub</a>
      </nav>

      {/* Professional Summary */}
      <section className="mb-8 card p-6 fade-in-up" style={{animationDelay: '120ms'}} id="summary">
        <h2 className="text-lg font-semibold tracking-tight">Professional Summary</h2>
        <p className="mt-2 text-sm text-black/80 dark:text-white/80">
          <strong>Jambula Venkata Jaya Prakash Reddy</strong> is a dedicated Computer Science Engineering graduate with extensive expertise in 
          <a href="#skills" className="text-blue-600 dark:text-blue-400 hover:underline"> programming</a>, 
          <a href="#projects" className="text-blue-600 dark:text-blue-400 hover:underline"> embedded systems</a>, 
          cybersecurity, and full-stack development. With hands-on experience in IoT, blockchain technology, and machine learning applications, 
          I specialize in creating innovative solutions that bridge hardware and software domains.
        </p>
        <p className="mt-3 text-sm text-black/80 dark:text-white/80">
          My technical journey spans from developing cost-effective firewall solutions on Raspberry Pi to implementing blockchain-based 
          secure storage systems. I excel in collaborative environments and have a proven track record of winning hackathons and 
          innovation competitions, demonstrating my ability to transform complex ideas into practical, scalable solutions.
        </p>
        <p className="mt-3 text-sm text-black/80 dark:text-white/80">
          Currently working as a <strong>Raspberry Pi Developer</strong> at Neonflake Enterprises, I continue to expand my expertise 
          in embedded systems, mobile app development with Flutter, and AI model fine-tuning while pursuing opportunities in 
          software engineering and technology innovation.
        </p>
      </section>

      {/* Skills and Education Section */}
      <section className="mb-8 grid gap-6 md:grid-cols-2">
        <div className="card p-6 fade-in-up" style={{animationDelay: '180ms'}} id="skills">
          <h3 className="text-base font-semibold">Technical Skills & Expertise</h3>
          <div className="mt-3 space-y-3">
            <div>
              <h4 className="text-sm font-medium text-black/90 dark:text-white/90">Programming Languages</h4>
              <p className="text-sm text-black/80 dark:text-white/80">C, C++, Java, Python, Embedded C (Arduino C), JavaScript, HTML, CSS</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-black/90 dark:text-white/90">Web Development & Frameworks</h4>
              <p className="text-sm text-black/80 dark:text-white/80">FastAPI, Django, Next.js, React, PostgreSQL, SQLite, RESTful APIs</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-black/90 dark:text-white/90">Embedded Systems & IoT</h4>
              <p className="text-sm text-black/80 dark:text-white/80">Raspberry Pi, ESP8266, ESP32, Arduino, BLDC Motor Control (ODrive/ODESC), Sensor Integration</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-black/90 dark:text-white/90">DevOps & Infrastructure</h4>
              <p className="text-sm text-black/80 dark:text-white/80">Docker, Nginx, iptables, Cloud Computing, Virtualization, DNS Configuration</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-black/90 dark:text-white/90">Cybersecurity & Networking</h4>
              <p className="text-sm text-black/80 dark:text-white/80">ML Firewalls, ipfire, Network Security, Intrusion Detection, Packet Analysis</p>
            </div>
          </div>
        </div>
        <div className="card p-6 fade-in-up" style={{animationDelay: '220ms'}} id="education">
          <h3 className="text-base font-semibold">Educational Background</h3>
          <div className="mt-3 space-y-2 text-sm text-black/80 dark:text-white/80">
            <div>
              <div className="flex items-baseline justify-between">
                <span className="font-medium">Mahatma Gandhi Institute of Technology</span>
                <span className="text-xs text-black/60 dark:text-white/60">2021 — 2025</span>
              </div>
              <div>B.Tech in Computer Science and Engineering · CGPA: 8.24</div>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <span className="font-medium">Narayana College</span>
                <span className="text-xs text-black/60 dark:text-white/60">2019 — 2021</span>
              </div>
              <div>Intermediate (11th & 12th) · Score: 85.5%</div>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <span className="font-medium">Narayana School</span>
                <span className="text-xs text-black/60 dark:text-white/60">2019</span>
              </div>
              <div>10th Grade · GPA: 9.3</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Portfolio */}
      <section className="mb-8 card p-6 fade-in-up" style={{animationDelay: '260ms'}} id="projects">
        <h3 className="text-base font-semibold">Featured Projects & Portfolio</h3>
        <p className="mt-2 text-sm text-black/70 dark:text-white/70 mb-4">
          Explore my comprehensive portfolio of innovative projects spanning blockchain technology, IoT systems, 
          machine learning applications, and embedded systems development. Each project demonstrates practical 
          problem-solving skills and technical expertise in modern software and hardware integration.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Blockchain-Based Secure Video Storage System for IoT Networks</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Developed a secure video storage system using blockchain and IPFS technology.</li>
              <li>Implemented smart contracts for immutable and decentralized video storage with on-chain references.</li>
              <li>Integrated seamlessly with IoT devices for real-time video storage and retrieval capabilities.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Cost-Effective Optimized Firewall for SOHO Networks Using Raspberry Pi</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Designed a comprehensive firewall solution using Raspberry Pi to protect small office/home networks.</li>
              <li>Implemented advanced traffic filtering, network monitoring, and intrusion detection capabilities.</li>
              <li>Optimized cost and performance specifically for SOHO environments with resource constraints.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Machine Learning-Based Real-Time Network Security Firewall</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Created an intelligent firewall leveraging machine learning to detect and block malicious traffic.</li>
              <li>Achieved 98% accuracy in identifying threats and automatically blocked IPs using iptables.</li>
              <li>Integrated real-time packet capturing for enhanced network security and threat analysis.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Smart Face Detection & Visitor Tracking System using Raspberry Pi Zero 2 W</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Built a video capture system with Raspberry Pi Zero 2 W, 5MP camera, and MediaMTX streaming.</li>
              <li>Applied deep learning-based YOLO11n face detection with distance estimation using pixel area.</li>
              <li>Cropped and stored face images in database only if within range, enabling efficient storage.</li>
              <li>Implemented visitor recognition by matching new detections with stored entries to track repeat visits.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Intelligent Spreadsheet Query & Visualization Platform</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Built a web platform where users upload spreadsheets and interact through natural language prompts, similar to a chatbot.</li>
              <li>Converted spreadsheets into SQLite tables in the backend for structured querying by an AI agent built with n8n.</li>
              <li>Automated data retrieval and processing from user prompts, enabling conversational access to spreadsheet data.</li>
              <li>Integrated a self-hosted QuickChart server for dynamic chart generation, allowing users to visualize query results seamlessly.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Self-Service SPA Kiosk Machine</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Integrated hardware suite: 32″ capacitive touchscreen, 32″ display, PC, webcam and thermal printer.</li>
              <li>Custom web interface lets customers browse services, select massage types and add-ons.</li>
              <li>Generates and prints thermal order slips on demand for seamless payment processing.</li>
              <li>Improves SPA efficiency by reducing front-desk queues and accelerating customer flow.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">IoT Water Quality Monitoring System with Arduino and ESP32</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Built an IoT-based water monitoring system using Arduino and ESP32 microcontrollers.</li>
              <li>Implemented real-time tracking of pH levels and water flow rates with high precision sensors.</li>
              <li>Sent sensor data to a web platform for graphical analysis and monitoring dashboard.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Home Gym Machine</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Simulates up to 80 kg of resistance via a BLDC motor and ODrive controller.</li>
              <li>Uses ESP32 over BLE to stream range-of-motion graphs and rep counts to a Flutter Android app.</li>
              <li>Allows remote resistance adjustment and live workout feedback for enhanced training experience.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">ESP32-Based Health Monitoring Device with Ayurveda Analysis</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Developed a wearable device using ESP32 and MAX30100 to monitor heart rate and SpO2 levels.</li>
              <li>Implemented a custom algorithm for Ayurveda-based health analysis (Vata, Pitta, Kapha).</li>
              <li>Built an API to send and receive user health data from a mobile application.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">ESP8266-Based LED Cube with Custom Circuit Design</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Designed and developed an LED Cube controlled using ESP8266 microcontroller.</li>
              <li>Created a custom circuit to independently control bottom, top, and vertical LED strips.</li>
              <li>Used 3.7V rechargeable batteries instead of 5V and successfully powered the LEDs with custom power design.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Achievements and Recognition */}
      <section className="mb-8 card p-6 fade-in-up" style={{animationDelay: '300ms'}} id="achievements">
        <h3 className="text-base font-semibold">Achievements & Recognition</h3>
        <p className="mt-2 text-sm text-black/70 dark:text-white/70 mb-3">
          Recognition for innovation, technical excellence, and competitive programming achievements in national-level competitions and hackathons.
        </p>
        <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80 space-y-1">
          <li><strong>1st Place</strong> – Intra Institution Innovation Competition and Hackathon (MGIT, 2023)</li>
          <li><strong>1st Place</strong> – Idea Pitching Contest at Idea Incubator (MGIT, 2023)</li>
          <li><strong>2nd Place</strong> – Smart India Hackathon 2023 (Finals) - National Level Competition</li>
        </ul>
        <p className="mt-3 text-sm text-black/70 dark:text-white/70">
          These achievements demonstrate my ability to innovate under pressure, collaborate effectively in team environments, 
          and deliver practical solutions to real-world problems within tight deadlines.
        </p>
      </section>

      {/* Professional Experience */}
      <section className="mb-8 card p-6 fade-in-up" style={{animationDelay: '340ms'}} id="experience">
        <h3 className="text-base font-semibold">Professional Experience</h3>
        <div className="mt-2 text-sm text-black/80 dark:text-white/80">
          <div className="flex items-baseline justify-between">
            <span className="font-medium">Neonflake Enterprises OPC Pvt Ltd, Hyderabad</span>
            <span className="text-xs text-black/60 dark:text-white/60">Raspberry Pi Developer · Ongoing</span>
          </div>
          <p className="mt-2">
            As a <strong>Raspberry Pi Developer</strong>, I specialize in designing and building embedded systems and IoT solutions. 
            My responsibilities include developing cross-platform websites and Android applications using Flutter framework, 
            fine-tuning AI models for specific use cases, and creating innovative hardware-software integration solutions.
          </p>
          <p className="mt-2">
            Key contributions include optimizing embedded system performance, implementing real-time data processing solutions, 
            and developing user-friendly interfaces for complex technical systems. This role has enhanced my expertise in 
            embedded programming, mobile development, and artificial intelligence applications.
          </p>
        </div>
      </section>

      {/* Social Media and Portfolio Links */}
      <section className="mb-8 card p-6 fade-in-up" style={{animationDelay: '380ms'}} id="portfolio">
        <h3 className="text-base font-semibold">Portfolio & Social Media</h3>
        <p className="mt-2 text-sm text-black/80 dark:text-white/80 mb-4">
          Connect with me on various platforms to explore my projects, contributions, and professional journey. 
          Follow my work and stay updated with my latest innovations in technology and software development.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a className="inline-flex items-center gap-2 rounded-full border border-black/[.08] dark:border-white/[.145] px-4 py-2 text-sm hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]" 
             href="https://github.com/Prakash2459" target="_blank" rel="noreferrer noopener"
             aria-label="View GitHub profile and repositories">
            🐙 GitHub Profile
          </a>
          <a className="inline-flex items-center gap-2 rounded-full border border-black/[.08] dark:border-white/[.145] px-4 py-2 text-sm hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]" 
             href="https://www.linkedin.com/in/jaya-prakash-jaya-prakash-127757233" target="_blank" rel="noreferrer noopener"
             aria-label="Connect on LinkedIn">
            💼 LinkedIn
          </a>
          <a className="inline-flex items-center gap-2 rounded-full border border-black/[.08] dark:border-white/[.145] px-4 py-2 text-sm hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]" 
             href="https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20resume%20website%20by%20Jambula%20Venkata%20Jaya%20Prakash%20Reddy&url=" target="_blank" rel="noreferrer noopener"
             aria-label="Share on Twitter">
            🐦 Share on Twitter
          </a>
          <a className="inline-flex items-center gap-2 rounded-full border border-black/[.08] dark:border-white/[.145] px-4 py-2 text-sm hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]" 
             href="mailto:?subject=Check%20out%20this%20resume&body=I%20found%20this%20impressive%20resume%20website%20by%20Jambula%20Venkata%20Jaya%20Prakash%20Reddy"
             aria-label="Share via email">
            📧 Share via Email
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-2 card p-6 fade-in-up bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20" style={{animationDelay: '420ms'}} id="contact">
        <h3 className="text-base font-semibold">Let&apos;s Connect & Collaborate</h3>
        <p className="mt-2 text-sm text-black/80 dark:text-white/80">
          I&apos;m always interested in discussing new opportunities, innovative projects, and potential collaborations. 
          Whether you&apos;re looking for a skilled developer, have an exciting project idea, or want to explore 
          technology solutions, I&apos;d love to hear from you.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="mailto:prakashprakash2459@gmail.com" 
             className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
             aria-label="Send email to start a conversation">
            📧 Get In Touch
          </a>
          <a href="tel:+919347026387" 
             className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
             aria-label="Call for immediate discussion">
            📞 Call Now
          </a>
          <a href="https://www.jayaprakash.space" target="_blank" rel="noreferrer noopener"
             className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
             aria-label="Visit personal website for more information">
            🌐 Visit Website
          </a>
        </div>
      </section>
    </div>
  );
}
