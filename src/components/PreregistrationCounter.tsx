import { motion } from "framer-motion";
import { Users, TrendingUp, Globe, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const PreregistrationCounter = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ⚠️ CONFIGURATION: Replace with your actual API endpoint
  const API_ENDPOINT = "https://your-api-endpoint.com/api/preregistrations";

  useEffect(() => {
    const fetchPreregistrationCount = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch from your API endpoint
        const response = await fetch(API_ENDPOINT);
        
        if (!response.ok) {
          throw new Error("Failed to fetch preregistration count");
        }

        const data = await response.json();
        
        // Adjust this based on your API response structure
        // Example: if your API returns { count: 12345 }
        const totalCount = data.count || data.total || 0;
        
        setCount(totalCount);
      } catch (err) {
        console.error("Error fetching preregistration count:", err);
        setError("Unable to load count");
        // Fallback to a demo count for display purposes
        setCount(15847); // Demo count - remove this line when API is ready
      } finally {
        setIsLoading(false);
      }
    };

    fetchPreregistrationCount();
    
    // Optional: Refresh count every 30 seconds
    const interval = setInterval(fetchPreregistrationCount, 30000);
    
    return () => clearInterval(interval);
  }, []);

  // Animate the number counting up
  const [displayCount, setDisplayCount] = useState(0);
  
  useEffect(() => {
    if (count === 0) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = count / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= count) {
        setDisplayCount(count);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [count]);

  const stats = [
    {
      icon: Users,
      label: "Active Players",
      value: "10K+",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Globe,
      label: "Countries",
      value: "50+",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: TrendingUp,
      label: "Daily Growth",
      value: "500+",
      color: "from-yellow-400 to-orange-400",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background" />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main counter section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-blue-400" />
            <p className="font-display text-sm uppercase text-blue-400 tracking-[0.3em]">
              Join the Movement
            </p>
            <Zap className="w-5 h-5 text-blue-400" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Pre-Registration Count
          </h2>

          {/* Main counter display */}
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-50"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative bg-gradient-to-br from-blue-950/80 via-purple-950/80 to-pink-950/80 backdrop-blur-sm px-12 py-10 md:px-20 md:py-16 rounded-3xl border border-blue-500/30">
              {isLoading ? (
                <div className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground/50">
                  Loading...
                </div>
              ) : error ? (
                <div className="font-display text-3xl md:text-5xl text-red-400">
                  {error}
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="font-display text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  {displayCount.toLocaleString()}
                </motion.div>
              )}
              
              <p className="mt-4 font-display text-lg md:text-xl uppercase tracking-wider text-foreground/70">
                Warriors Ready
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />
              
              <div className="relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm p-8 rounded-2xl border border-foreground/10 group-hover:border-foreground/20 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className={`font-display text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                
                <p className="text-sm text-foreground/60 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg md:text-xl text-foreground/70 mb-6">
            Don't miss out on the adventure of a lifetime
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-4 font-display text-sm tracking-widest uppercase bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(147,51,234,0.6)] transition-all duration-300"
          >
            <Users className="w-5 h-5" />
            Pre-Register Now
          </motion.button>
        </motion.div>
      </div>

      {/* API Configuration Note (remove in production) */}
      <div className="absolute bottom-4 right-4 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-xs text-yellow-400 max-w-xs hidden md:block">
        <p className="font-mono">⚠️ Update API_ENDPOINT in PreregistrationCounter.tsx</p>
      </div>
    </section>
  );
};

export default PreregistrationCounter;
