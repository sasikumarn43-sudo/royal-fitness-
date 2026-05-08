import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Dumbbell, 
  Apple, 
  Users, 
  Menu, 
  X, 
  CheckCircle2,
  Navigation
} from 'lucide-react';

const HERO_IMG = "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1470&auto=format&fit=crop";
const EQUIP_IMG = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-red selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-brand-red" />
              <span className="font-display font-bold text-2xl tracking-wider uppercase">Royal Fitness</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-brand-red transition-colors text-sm font-medium uppercase tracking-wider">About</a>
              <a href="#reviews" className="text-gray-300 hover:text-brand-red transition-colors text-sm font-medium uppercase tracking-wider">Reviews</a>
              <a href="#location" className="text-gray-300 hover:text-brand-red transition-colors text-sm font-medium uppercase tracking-wider">Location</a>
              <a href="#contact" className="px-6 py-2 bg-brand-red hover:bg-brand-red/90 text-white font-medium uppercase tracking-wider transition-all transform hover:scale-105 rounded-sm">
                Join Now
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-dark border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="px-3 py-4 text-center text-gray-300 hover:text-brand-red uppercase tracking-wide font-medium border-b border-white/5">About</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="px-3 py-4 text-center text-gray-300 hover:text-brand-red uppercase tracking-wide font-medium border-b border-white/5">Reviews</a>
              <a href="#location" onClick={() => setIsMenuOpen(false)} className="px-3 py-4 text-center text-gray-300 hover:text-brand-red uppercase tracking-wide font-medium border-b border-white/5">Location</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mx-3 mt-4 px-6 py-3 bg-brand-red text-center text-white font-medium uppercase tracking-wider rounded-sm">Join Now</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMG} 
            alt="Gym interior" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-yellow-500 font-bold ml-2">5.0 (20 Reviews)</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white mb-6 leading-[1.1]">
              Push Your Limits At <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">Royal Fitness</span>
            </h1>
            
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              Great place for fitness beginners & freaks. Affordable pricing, modern equipment, and a welcoming environment in Udumalaipettai.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="px-8 py-4 bg-brand-red hover:bg-brand-red/90 text-white font-bold uppercase tracking-widest transition-all transform hover:scale-105 rounded-sm">
                Start Your Journey
              </a>
              <a href="#location" className="px-8 py-4 bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-bold uppercase tracking-widest transition-all rounded-sm flex justify-center items-center gap-2">
                <MapPin className="w-5 h-5" /> Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About & Features */}
      <section id="about" className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-brand-red/30 rounded-sm translate-x-4 translate-y-4 -z-10" />
              <img 
                src={EQUIP_IMG} 
                className="w-full h-[500px] object-cover rounded-sm sepia-[.3] contrast-[1.15] brightness-[0.8] saturate-[.8] hover:sepia-0 hover:contrast-100 hover:brightness-100 hover:saturate-100 transition-all duration-700" 
                alt="Modern Equipment at Royal Fitness"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
                More Than Just <br/><span className="text-brand-red">A Gym</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Royal Fitness is the perfect place for anyone looking to achieve their fitness goals in a welcoming and motivating environment. With newly installed modern equipment, skilled trainers, and personalised workout plans, we ensure top-quality training for all.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 border border-white/10 rounded-sm hover:border-brand-red/50 transition-colors group">
                  <Apple className="w-8 h-8 text-brand-red mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-2">Diet Charts</h3>
                  <p className="text-gray-400 text-sm">Personalized nutrition plans specifically tailored to your body and fitness goals.</p>
                </div>
                
                <div className="bg-white/5 p-6 border border-white/10 rounded-sm hover:border-brand-red/50 transition-colors group">
                  <Dumbbell className="w-8 h-8 text-brand-red mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-2">Modern Equipment</h3>
                  <p className="text-gray-400 text-sm">Newly installed, top-tier workout machines for all muscle groups.</p>
                </div>

                <div className="bg-white/5 p-6 border border-white/10 rounded-sm hover:border-brand-red/50 transition-colors group">
                  <CheckCircle2 className="w-8 h-8 text-brand-red mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-2">Workout Charts</h3>
                  <p className="text-gray-400 text-sm">Guided exercise routines to keep you progressing week after week.</p>
                </div>

                <div className="bg-white/5 p-6 border border-white/10 rounded-sm hover:border-brand-red/50 transition-colors group">
                  <Users className="w-8 h-8 text-brand-red mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-2">Friendly Trainers</h3>
                  <p className="text-gray-400 text-sm">Experienced, highly motivating coaches guiding you to perfection.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              Real Results. <span className="text-brand-red">Real Reviews.</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-5xl font-display font-bold">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-400 text-sm font-medium">Based on 20 reviews</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#111] p-8 border border-white/10 rounded-sm relative"
            >
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-brand-red p-2 rounded-full">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-display font-bold text-xl text-brand-red">
                  SS
                </div>
                <div>
                  <h4 className="font-bold text-lg">Somasundaram S</h4>
                  <p className="text-xs text-gray-500">Local Guide · 8 months ago</p>
                </div>
              </div>
              <div className="flex text-yellow-500 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "1. friendly trainers (well-maintained facilities) A motivating atmosphere, and convenient locations in udumalpet. Good, experience coaches 👌 and excellent workout machines."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#111] p-8 border border-brand-red/30 rounded-sm relative transform md:-translate-y-4"
            >
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-brand-red p-2 rounded-full">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-display font-bold text-xl text-brand-red">
                  RS
                </div>
                <div>
                  <h4 className="font-bold text-lg">RAMANI SHANKAR</h4>
                  <p className="text-xs text-gray-500">1 year ago</p>
                </div>
              </div>
              <div className="flex text-yellow-500 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "This is my first ever experience in gym. As I'm a beginner, coaches guided me to perfection. They provide diet plans, workout charts, etc. The ambiance is good and the equipments are newly installed. It's been one month after joining the gym, coaches have did a great job. Efforts never fail 🤟⚡"
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#111] p-8 border border-white/10 rounded-sm relative"
            >
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-brand-red p-2 rounded-full">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-display font-bold text-xl text-brand-red">
                  KS
                </div>
                <div>
                  <h4 className="font-bold text-lg">Kavya Shree</h4>
                  <p className="text-xs text-gray-500">1 year ago</p>
                </div>
              </div>
              <div className="flex text-yellow-500 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "This gym is the perfect place for anyone looking to achieve their fitness goals in a welcoming and motivating environment. With modern equipment, skilled trainers, and personalised workout plans, it ensures top-quality training for all."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & CTA Section */}
      <section id="location" className="py-24 bg-brand-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl font-bold uppercase tracking-tight mb-6">
                  Ready To Put In <span className="text-brand-red">The Work?</span>
                </h2>
                <p className="text-gray-400 mb-10 text-lg">
                  Join our welcoming community today. From beginners to serious athletes, our facility has exactly what you need.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wider mb-1">Address</h4>
                      <p className="text-gray-400">H7X6+GWJ, Udumalaipettai,<br/>Tamil Nadu 642126</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wider mb-1">Hours</h4>
                      <p className="text-gray-400">Open · Closes 9:30 pm (Check local times)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a href="https://maps.google.com/?q=H7X6+GWJ,Udumalaipettai,Tamil+Nadu+642126" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium uppercase tracking-wider transition-all rounded-sm flex items-center justify-center gap-2 border border-white/10">
                    <Navigation className="w-4 h-4" /> Get Directions
                  </a>
                  <button className="px-6 py-3 bg-brand-red hover:bg-brand-red/90 text-white font-medium uppercase tracking-wider transition-all rounded-sm flex items-center justify-center gap-2">
                    Claim Free Trial
                  </button>
                </div>
              </div>
              
              <div className="h-[400px] w-full bg-[#111] rounded-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop" 
                  alt="Gym exterior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-bold text-2xl uppercase tracking-wider mb-1">Royal Fitness</h3>
                      <p className="text-brand-red font-medium text-sm">Best Gym in Udumalaipettai</p>
                    </div>
                    <div className="bg-brand-red p-3 rounded-full hidden sm:block">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center mb-8">
            <Dumbbell className="h-10 w-10 text-brand-red mb-4" />
            <h2 className="font-display font-bold text-3xl tracking-wider uppercase mb-2">Royal Fitness</h2>
            <p className="text-gray-500 text-sm max-w-sm">
              Commit to be fit. We provide the atmosphere, the equipment, and the motivation.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium uppercase tracking-wider text-gray-400">
            <a href="#about" className="hover:text-brand-red transition-colors">About</a>
            <a href="#reviews" className="hover:text-brand-red transition-colors">Reviews</a>
            <a href="#location" className="hover:text-brand-red transition-colors">Location</a>
            <a href="#" className="hover:text-brand-red transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-red transition-colors">Privacy</a>
          </div>
          
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Royal Fitness. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
