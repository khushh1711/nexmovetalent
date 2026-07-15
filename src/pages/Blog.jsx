import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "../utils/blogData";
import FadeInImage from "../components/common/FadeInImage";

const categories = ["All", "IT Hiring", "Healthcare Hiring", "Career Guidance", "Job Search Strategy"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Insights & Career Blog | NexMoveTalent</title>
        <meta
          name="description"
          content="Explore professional recruitment insights, IT staffing trends, healthcare hiring strategies, resume tips, and career guidance."
        />
      </Helmet>

      {/* =======================================================
                    HERO SECTION (LIGHT THEME MATCHING NAVIGATION HIERARCHY)
         ======================================================= */}
      <section className="bg-slate-50 pt-36 pb-20 text-slate-900 relative overflow-hidden border-b border-slate-200/50">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Soft background glow circles */}
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="w-full max-w-345 mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-[3px] text-xs font-bold text-emerald-600">
              RECRUITMENT & CAREER INSIGHTS
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold mt-5 leading-tight tracking-tight text-slate-950">
              NexMove <span className="text-emerald-600 bg-emerald-50 px-4 py-1 rounded-2xl border border-emerald-100 shadow-xs">Insights</span>
            </h1>
            <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto leading-8 font-medium">
              Stay ahead of the curve with expert perspectives on North American hiring trends, technology staffing, healthcare career paths, and premium job search strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =======================================================
                    BLOG SECTION WITH FILTERS
         ======================================================= */}
      <section className="py-20 bg-white min-h-[500px]">
        <div className="w-full max-w-345 mx-auto px-6">
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-slate-50 text-slate-600 border border-slate-200/60 hover:bg-slate-100 hover:text-slate-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Listing Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/50 transition-all duration-300 flex flex-col group h-full"
                >
                  {/* Featured Image using FadeInImage */}
                  <div className="relative overflow-hidden aspect-16/9 bg-slate-100">
                    <FadeInImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-emerald-500 text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 flex flex-col grow justify-between">
                    <div>
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                        <span className="flex items-center gap-1 font-semibold">
                          <Calendar size={13} className="text-slate-400" />
                          {post.publishedDate}
                        </span>
                        <span className="flex items-center gap-1 font-semibold">
                          <Clock size={13} className="text-slate-400" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300 leading-tight mb-4">
                        <Link to={`/blog/${post.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                          {post.title}
                        </Link>
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 text-sm leading-7 mb-6">
                        {post.description}
                      </p>
                    </div>

                    {/* Author & Read More Button */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <FadeInImage
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-9 h-9 rounded-full object-cover shrink-0"
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-800">{post.author.name}</p>
                          <p className="text-[10px] text-slate-500">{post.author.role}</p>
                        </div>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center gap-1.5 font-bold text-sm text-emerald-600 group-hover:gap-2.5 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Posts State */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 mt-8"
            >
              <p className="text-slate-500 font-medium">No articles found in this category. Check back soon!</p>
            </motion.div>
          )}

        </div>
      </section>
    </>
  );
};

export default Blog;
