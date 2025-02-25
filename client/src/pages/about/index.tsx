{/* Hero Section (Assumed to exist before this code) */}

      {/* Company Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {/* Company Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Company Overview</h2>
              <p className="text-white/60">
                Founded with a vision to revolutionize 3D printing and design, we bring cutting-edge technology 
                and creative expertise to every project. Our journey began with a passion for innovation and 
                has evolved into a comprehensive solution provider for all your 3D printing needs.
              </p>
            </motion.div>

            {/* Our Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Our Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-[#00FF00] font-medium">3D Printing</h3>
                  <p className="text-white/60">Advanced manufacturing capabilities with industrial-grade equipment</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[#00FF00] font-medium">Design Services</h3>
                  <p className="text-white/60">Professional CAD design and optimization services</p>
                </div>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-[#00FF00] font-medium mb-2">Innovation</h3>
                  <p className="text-white/60">Pushing boundaries in 3D printing technology</p>
                </div>
                <div className="text-center">
                  <h3 className="text-[#00FF00] font-medium mb-2">Quality</h3>
                  <p className="text-white/60">Unwavering commitment to excellence</p>
                </div>
                <div className="text-center">
                  <h3 className="text-[#00FF00] font-medium mb-2">Customer Focus</h3>
                  <p className="text-white/60">Your success is our priority</p>
                </div>
              </div>
            </motion.div>

            {/* Team Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Team Highlights</h2>
              <p className="text-white/60 mb-6">
                Our team comprises industry experts with decades of combined experience in 3D printing, 
                design, and manufacturing. Each member brings unique expertise and passion to deliver 
                exceptional results.
              </p>
            </motion.div>

            {/* Vision Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Vision Statement</h2>
              <p className="text-white/60">
                To lead the transformation of manufacturing through innovative 3D printing solutions, 
                empowering businesses and individuals to turn their ideas into reality while promoting 
                sustainable and efficient production methods.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Portfolio Section (Assumed to exist after this code) */}