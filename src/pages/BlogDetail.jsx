import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, Clock, ArrowRight, Briefcase } from "lucide-react";
import { blogPosts } from "../utils/blogData";
import FadeInImage from "../components/common/FadeInImage";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-3xl shadow-sm border border-slate-200 max-w-md">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Article Not Found</h2>
          <p className="text-slate-600 mb-8">The blog article you are looking for does not exist or has been moved.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Find related posts (excluding the current one)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${post.title} | NexMoveTalent Blog`}</title>
        <meta name="description" content={post.description} />
      </Helmet>

      {/* Main Container */}
      <div className="bg-slate-50 pt-32 pb-24 min-h-screen">
        <div className="w-full max-w-345 mx-auto px-6">
          
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-semibold transition"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Content Area (Col Span 2) */}
            <article className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-xs border border-slate-100">
              
              {/* Category */}
              <span className="bg-emerald-50 text-emerald-800 border border-emerald-100 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-6">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                {post.title}
              </h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <FadeInImage
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="font-bold text-slate-800 leading-tight">{post.author.name}</p>
                    <p className="text-[11px] text-slate-500">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 ml-auto md:ml-0">
                  <Calendar size={15} className="text-slate-400" />
                  <span>{post.publishedDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={15} className="text-slate-400" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Main Image using FadeInImage */}
              <div className="rounded-2xl overflow-hidden aspect-16/9 mb-10 bg-slate-100">
                <FadeInImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Post HTML Content */}
              <div 
                className="prose max-w-none text-slate-600 leading-8 text-base md:text-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

            </article>

            {/* Right Sidebar */}
            <aside className="space-y-8 sticky top-28">
              
              {/* Apply / CTA Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                    <Briefcase size={22} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Looking for your next move?</h3>
                  <p className="text-slate-300 text-sm leading-6 mb-6">
                    Connect with our recruiters today. We can help guide your resume design, practice interviews, and submit your profile directly to top US & Canadian companies.
                  </p>
                  <Link
                    to="/contact?role=candidate"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 px-6 rounded-xl transition cursor-pointer shadow-lg shadow-emerald-900/20"
                  >
                    Apply Now
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Related Posts Widget */}
              <div className="bg-white rounded-3xl p-8 shadow-xs border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100">
                  Related Insights
                </h4>
                <div className="space-y-6">
                  {relatedPosts.map((related) => (
                    <div key={related.id} className="flex gap-4 group">
                      <FadeInImage
                        src={related.image}
                        alt={related.title}
                        className="w-16 h-16 rounded-xl object-cover shrink-0 bg-slate-100"
                      />
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">
                          {related.category}
                        </span>
                        <h5 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-emerald-600 transition-colors duration-300">
                          <Link to={`/blog/${related.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            {related.title}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </aside>

          </div>

        </div>
      </div>
    </>
  );
};

export default BlogDetail;
