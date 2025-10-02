export default function Home() {
  return (
    <div className="max-w-none">
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <a className="card fade-in-up p-4 text-sm text-center" style={{animationDelay: '0ms'}} href="mailto:prakashprakash2459@gmail.com">Email</a>
        <a className="card fade-in-up p-4 text-sm text-center" style={{animationDelay: '80ms'}} href="https://www.jayaprakash.space" target="_blank" rel="noreferrer noopener">Website</a>
        <a className="card fade-in-up p-4 text-sm text-center" style={{animationDelay: '160ms'}} href="https://github.com/Prakash2459" target="_blank" rel="noreferrer noopener">GitHub</a>
      </div>
      <section className="mb-8 card p-6 fade-in-up" style={{animationDelay: '120ms'}}>
        <h2 className="text-lg font-semibold tracking-tight">Summary</h2>
        <p className="mt-2 text-sm text-black/80 dark:text-white/80">
          I’m a Computer Science Engineering graduate with a passion for technology and problem-solving. I have hands‑on
          experience in programming, embedded systems, cybersecurity, and full‑stack development, and I thrive on projects that
          blend hardware with software. As a collaborative team member, I contribute effectively to group success and love bringing
          ideas to life together.
        </p>
      </section>

      <section className="mb-8 grid gap-6 md:grid-cols-2">
        <div className="card p-6 fade-in-up" style={{animationDelay: '180ms'}}>
          <h3 className="text-base font-semibold">Skills</h3>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-black/80 dark:text-white/80">
            <li>C, C++, Java, Python, Embedded C (Arduino C)</li>
            <li>HTML, CSS, JavaScript, FastAPI, Django, PostgreSQL</li>
            <li>Raspberry Pi, ESP8266, Arduino, BLDC Motor Control (ODrive/ODESC)</li>
            <li>ML Firewalls, ipfire, iptables, Nginx, Docker</li>
            <li>Cloud concepts, Virtualization, DNS configuration</li>
          </ul>
        </div>
        <div className="card p-6 fade-in-up" style={{animationDelay: '220ms'}}>
          <h3 className="text-base font-semibold">Education</h3>
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
                <span className="text-xs text-black/60 dark:text-white/60">—</span>
              </div>
              <div>10th Grade · GPA: 9.3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 card p-6 fade-in-up" style={{animationDelay: '260ms'}}>
        <h3 className="text-base font-semibold">Projects</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Blockchain-Based Secure Video Storage System for IoT Networks</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Built secure video storage using blockchain and IPFS with smart contracts.</li>
              <li>Immutable, decentralized storage via on-chain references and content addressing.</li>
              <li>Integrated with IoT devices for real-time video storage and retrieval.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Cost‑Effective Optimized Firewall for SOHO Networks (Raspberry Pi)</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Designed and deployed on Raspberry Pi for SOHO environments.</li>
              <li>Traffic filtering, monitoring, and intrusion detection for SOHO networks.</li>
              <li>Optimized cost and performance on Raspberry Pi hardware.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Machine Learning‑Based Real‑Time Network Security Firewall</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>ML‑driven packet classification with ~98% accuracy; auto‑blocked IPs via iptables.</li>
              <li>Integrated real‑time packet capture for enhanced security.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Smart Face Detection & Visitor Tracking (Raspberry Pi Zero 2 W)</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>YOLO11n‑based face detection with distance estimation and range‑aware storage.</li>
              <li>Visitor recognition via matching detections with stored entries.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Intelligent Spreadsheet Query & Visualization Platform</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Chat‑like interface converts spreadsheets into SQLite and queries via AI agent (n8n).</li>
              <li>Automated data retrieval and processing from user prompts.</li>
              <li>Dynamic chart generation using a self‑hosted QuickChart server.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Self‑Service SPA Kiosk Machine</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Integrated 32″ touchscreen, webcam, thermal printer with a custom web UI.</li>
              <li>Printed order slips for streamlined customer flow and payment.</li>
              <li>Improved efficiency by reducing front‑desk queues and wait times.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">IoT Water Quality Monitoring (Arduino & ESP32)</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Implemented real‑time tracking of pH and water flow rates.</li>
              <li>Sent sensor data to a web platform for analysis and visualization.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">Home Gym Machine (BLDC + ODrive)</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Up to 80 kg simulated resistance with BLE telemetry to Flutter Android app.</li>
              <li>Remote resistance adjustment and live workout feedback.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">ESP32‑Based Health Monitoring with Ayurveda Analysis</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>ESP32 + MAX30100 wearable measuring heart rate & SpO2.</li>
              <li>Custom algorithm for Ayurveda assessment (Vata, Pitta, Kapha) with API integration.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="font-medium">ESP8266 LED Cube with Custom Circuit</h4>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
              <li>Custom circuit to control bottom, top, and vertical LED strips independently.</li>
              <li>Individually controlled LED planes; custom power design on 3.7V batteries.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 card p-6 fade-in-up" style={{animationDelay: '300ms'}}>
        <h3 className="text-base font-semibold">Achievements & Awards</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-black/80 dark:text-white/80">
          <li>1st Place – Intra Institution Innovation Competition and Hackathon (MGIT, 2023)</li>
          <li>1st Place – Idea Pitching Contest at Idea Incubator (MGIT, 2023)</li>
          <li>2nd Place – Smart India Hackathon 2023 (Finals)</li>
        </ul>
      </section>

      <section className="mb-2 card p-6 fade-in-up" style={{animationDelay: '340ms'}}>
        <h3 className="text-base font-semibold">Internship</h3>
        <div className="mt-2 text-sm text-black/80 dark:text-white/80">
          <div className="flex items-baseline justify-between">
            <span className="font-medium">Neonflake Enterprises OPC Pvt Ltd, Hyderabad</span>
            <span className="text-xs text-black/60 dark:text-white/60">Raspberry Pi Developer · Ongoing</span>
          </div>
          <p className="mt-1">
            I design and build embedded systems and Raspberry Pi projects, develop websites and Android apps with Flutter, and fine‑tune AI models.
          </p>
        </div>
      </section>

      <section className="mb-2 card p-6 fade-in-up" style={{animationDelay: '380ms'}}>
        <h3 className="text-base font-semibold">GitHub</h3>
        <p className="mt-2 text-sm text-black/80 dark:text-white/80">
          Explore more projects and code on my GitHub profile.
        </p>
        <div className="mt-3">
          <a className="inline-flex items-center gap-2 rounded-full border border-black/[.08] dark:border-white/[.145] px-4 py-2 text-sm hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]" href="https://github.com/Prakash2459" target="_blank" rel="noreferrer noopener">
            github.com/Prakash2459
          </a>
        </div>
      </section>
    </div>
  );
}
