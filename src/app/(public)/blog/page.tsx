import { Navbar } from "@/components/shared/Navbar";
import { getMockBlogPosts } from "@/lib/mock-data";
import { ArrowRight, BookOpen, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const posts = getMockBlogPosts();

  return (
    <div className="min-h-screen bg-slate-50">

      <main className="container px-6 py-20">
        <header className="max-w-3xl mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight">Blog de Salud Mental</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Descubre artículos, consejos y reflexiones escritos por nuestros especialistas para acompañar tu bienestar emocional.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden shrink-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="space-y-4 flex-1">
                  <h2 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-auto">
                  <div className="h-px bg-slate-100 w-full mb-6" />
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                        <User className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-secondary">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Categories / Sidebar-like navigation? Just simple links for now */}
        <div className="mt-20 p-12 bg-secondary rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Suscríbete a nuestro boletín</h3>
            <p className="text-slate-300">Recibe consejos de bienestar directamente en tu correo.</p>
          </div>
          <div className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary h-12"
            />
            <button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-xl transition-colors h-12">
              Unirme
            </button>
          </div>
        </div>
      </main>

    </div>
  );
}
