import React, { useCallback, useEffect, useState } from "react";
import "@/App.css";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, 
  Zap, 
  Shield, 
  Settings, 
  Send,
  Globe,
  Cpu,
  Eye,
  Lock,
  BarChart3,
  Layers,
  RefreshCw,
  Terminal,
  Chrome,
  ChevronDown,
  ExternalLink,
  FileCode,
  Rocket,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

// User's Logo URL
const LOGO_URL = "https://customer-assets.emergentagent.com/job_festive-hopper-3/artifacts/jlcdieex_image.png";

// Telegram Links (placeholder - user should update these)
const TG_MAIN_CHANNEL = "https://t.me/your_main_channel";
const TG_BACKUP_CHANNEL = "https://t.me/your_backup_channel";
const TG_USERNAME = "@MikeyyFrr";

// Download file URL - this would be your actual extension file
const DOWNLOAD_URL = "/ariesxhit-extension.zip";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    fullScreen: false,
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#E62429",
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, area: 1000 },
        value: 60,
      },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  const handleDownload = () => {
    // Create a link and trigger download
    const link = document.createElement("a");
    link.href = DOWNLOAD_URL;
    link.download = "ariesxhit-extension.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-x-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="fixed inset-0 z-0"
      />

      {/* Header */}
      <Header 
        isScrolled={isScrolled} 
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection 
          handleDownload={handleDownload} 
          scrollToSection={scrollToSection}
        />
        <FeaturesSection />
        <HowToUseSection />
        <DownloadSection handleDownload={handleDownload} />
        <Footer />
      </main>
    </div>
  );
}

// Header Component
function Header({ isScrolled, scrollToSection }) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "header-blur bg-[#050505]/80 border-b border-white/5" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => scrollToSection("hero")}
            data-testid="header-logo"
          >
            <img 
              src={LOGO_URL} 
              alt="AriesHitX Logo" 
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Telegram Buttons */}
          <div className="flex items-center gap-3">
            <motion.a
              href={TG_MAIN_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="tg-btn flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="tg-main-channel-btn"
            >
              <Send size={16} />
              <span className="hidden sm:inline">Main Channel</span>
            </motion.a>
            <motion.a
              href={TG_BACKUP_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="tg-btn flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="tg-backup-channel-btn"
            >
              <Send size={16} />
              <span className="hidden sm:inline">Backup</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// Hero Section
function HeroSection({ handleDownload, scrollToSection }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-32">
      {/* Background Glow */}
      <div className="hero-glow" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src={LOGO_URL} 
            alt="AriesHitX" 
            className="w-40 h-40 sm:w-56 sm:h-56 mx-auto logo-float object-cover rounded-full border-2 border-[#E62429]/30 shadow-[0_0_40px_rgba(230,36,41,0.3)]"
            data-testid="hero-logo"
          />
        </motion.div>

        {/* Title with Glitch Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-title font-bold tracking-tighter glitch mb-6"
          data-text="AriesHitX"
          data-testid="hero-title"
        >
          <span className="gradient-text">Aries</span>
          <span className="text-[#E62429]">Hit</span>
          <span className="gradient-text">X</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl text-[#A1A1AA] mb-4 font-medium tracking-wide"
          data-testid="hero-subtitle"
        >
          Ultimate Stripe Automation Tool
        </motion.p>

        {/* Version Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#E62429]/10 border border-[#E62429]/30 rounded-full mb-10"
          data-testid="version-badge"
        >
          <span className="w-2 h-2 bg-[#E62429] rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-[#E62429] tracking-wider">v3.0 RELEASED</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={handleDownload}
            className="download-btn flex items-center gap-3 px-8 py-4 text-white font-bold uppercase tracking-widest rounded-lg clip-slant"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="hero-download-btn"
          >
            <Download size={20} />
            Download Extension
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("how-to-use")}
            className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-white/5 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-testid="hero-howto-btn"
          >
            <FileCode size={20} />
            How to Use
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection("features")}
            data-testid="scroll-indicator"
          >
            <ChevronDown size={32} className="text-[#A1A1AA]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "Lightning Fast",
      description: "Sub-100ms response time with multi-threaded processing for maximum efficiency",
      large: true,
    },
    {
      icon: <Shield size={28} />,
      title: "Military-Grade Security",
      description: "Advanced code obfuscation, anti-debugging measures, and encrypted communications",
      large: false,
    },
    {
      icon: <Cpu size={28} />,
      title: "AI-Powered Recognition",
      description: "Intelligent form detection and auto-fill technology for all Stripe forms",
      large: false,
    },
    {
      icon: <Globe size={28} />,
      title: "Multi-Gateway Support",
      description: "Compatible with multiple payment gateways and Stripe dashboard configurations",
      large: false,
    },
    {
      icon: <RefreshCw size={28} />,
      title: "Proxy Rotation",
      description: "Built-in HTTP/SOCKS proxy support with automatic rotation and health monitoring",
      large: false,
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Real-Time Analytics",
      description: "Live dashboard with hit/decline tracking, success rates, and exportable reports",
      large: true,
    },
    {
      icon: <Lock size={28} />,
      title: "Anti-Detection",
      description: "Advanced measures to bypass security checks and maintain stealth operation",
      large: false,
    },
    {
      icon: <Layers size={28} />,
      title: "Smart Auto-Fill",
      description: "Dynamic card generation, BIN support, and intelligent billing address management",
      large: false,
    },
    {
      icon: <Eye size={28} />,
      title: "Auto Screenshot",
      description: "Automatic capture of successful hits for proof and record keeping",
      large: false,
    },
    {
      icon: <Send size={28} />,
      title: "Telegram Integration",
      description: "Auto hit sender to Telegram with instant notifications and results",
      large: false,
    },
    {
      icon: <Settings size={28} />,
      title: "Custom Webhooks",
      description: "Integrate with your existing workflow through custom webhook notifications",
      large: false,
    },
    {
      icon: <Terminal size={28} />,
      title: "Error Recovery",
      description: "Comprehensive error handling with automatic retry logic and queue management",
      large: false,
    },
  ];

  return (
    <section id="features" className="relative py-32">
      <div className="section-divider mb-32" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="features-title">
            <span className="text-[#E62429]">Power</span> Features
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Complete automation suite built for professionals, by professionals
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="bento-grid" data-testid="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`feature-card rounded-xl p-6 ${feature.large ? "feature-card-lg" : ""}`}
              data-testid={`feature-card-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E62429]/10 rounded-lg text-[#E62429]">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How To Use Section
function HowToUseSection() {
  const steps = [
    {
      step: "01",
      title: "Download Extension",
      description: "Click the download button to get the AriesHitX extension package (.zip file)",
      code: "ariesxhit-extension.zip",
    },
    {
      step: "02",
      title: "Extract Files",
      description: "Unzip the downloaded file to a folder on your computer",
      code: "unzip ariesxhit-extension.zip",
    },
    {
      step: "03",
      title: "Open Chrome Extensions",
      description: "Navigate to chrome://extensions in your browser and enable Developer Mode",
      code: "chrome://extensions",
    },
    {
      step: "04",
      title: "Load Extension",
      description: "Click 'Load unpacked' and select the extracted extension folder",
      code: "Click 'Load unpacked' → Select folder",
    },
    {
      step: "05",
      title: "Configure & Run",
      description: "Open the extension, configure your settings, and start automating!",
      code: "Ready to hit! 🚀",
    },
  ];

  return (
    <section id="how-to-use" className="relative py-32 bg-[#0A0A0A]/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="howto-title">
            <span className="text-[#E62429]">Installation</span> Guide
          </h2>
          <p className="text-lg text-[#A1A1AA]">
            Get started with AriesHitX in just 5 simple steps
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="space-y-8" data-testid="installation-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="timeline-step flex gap-6"
              data-testid={`step-${index + 1}`}
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#E62429] rounded-lg flex items-center justify-center font-bold text-lg">
                {step.step}
              </div>

              {/* Step Content */}
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-[#A1A1AA] mb-4">
                  {step.description}
                </p>
                <div className="code-block px-4 py-3 text-sm text-[#E62429]">
                  <code>{step.code}</code>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chrome Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-3 text-[#A1A1AA]"
        >
          <Chrome size={24} />
          <span className="text-sm font-medium">Manifest V3 Compliant • Chrome Optimized</span>
        </motion.div>
      </div>
    </section>
  );
}

// Download Section
function DownloadSection({ handleDownload }) {
  const specs = [
    { label: "Response Time", value: "<100ms" },
    { label: "Uptime", value: "99.9%" },
    { label: "Memory", value: "Low Usage" },
    { label: "Updates", value: "Regular" },
  ];

  return (
    <section id="download" className="relative py-32">
      <div className="section-divider mb-32" />
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E62429]/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E62429]/10 rounded-2xl mb-8">
            <Rocket size={40} className="text-[#E62429]" />
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="download-title">
            Ready to <span className="text-[#E62429]">Transform</span> Your Workflow?
          </h2>

          <p className="text-lg text-[#A1A1AA] mb-8 max-w-xl mx-auto">
            Download AriesHitX v3.0 now and experience the future of Stripe automation
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10" data-testid="performance-specs">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#0A0A0A] border border-white/5 rounded-xl p-4"
              >
                <div className="text-2xl font-bold text-[#E62429]">{spec.value}</div>
                <div className="text-sm text-[#A1A1AA]">{spec.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Download Button */}
          <motion.button
            onClick={handleDownload}
            className="download-btn inline-flex items-center gap-3 px-12 py-5 text-white font-bold uppercase tracking-widest rounded-xl text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ animation: "pulse-glow 2s infinite" }}
            data-testid="download-section-btn"
          >
            <Download size={24} />
            Download v3.0 Now
          </motion.button>

          {/* Checklist */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[#A1A1AA]">
            {["Free Download", "Enterprise Security", "Regular Updates", "24/7 Support"].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#E62429]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <img 
              src={LOGO_URL} 
              alt="AriesHitX" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-[#A1A1AA] text-sm">
              © 2025 AriesHitX. All rights reserved.
            </span>
          </div>

          {/* Contact */}
          <motion.a
            href={`https://t.me/${TG_USERNAME.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#E62429] transition-colors"
            whileHover={{ scale: 1.02 }}
            data-testid="footer-contact"
          >
            <Send size={18} />
            <span className="font-semibold">{TG_USERNAME}</span>
            <ExternalLink size={14} />
          </motion.a>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-[#52525B] max-w-2xl mx-auto">
            AriesHitX is a professional automation tool. Use responsibly and in accordance with applicable laws and terms of service. 
            The developers are not responsible for any misuse of this software.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
