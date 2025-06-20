
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";

const Index = () => {
  const ideas = [
    "แอปส่งอาหารแต่สำหรับแมว",
    "AI ที่คิดแทนเราว่าจะกินอะไรวันนี้",
    "เว็บไซต์รีวิวร้านขายของเก่า",
    "แอปหาเพื่อนไปดูหนังคนเดียว",
    "บริการจ้างคนมาฟังเราบ่น",
    "แอปช่วยคิดว่าจะทําอะไรดี"
  ];

  const projects = [
    {
      title: "🥊 SplitFight",
      description: "ใครแดกเท่าไหร่ จ่ายเท่านั้น มิตรภาพปลอดภัย",
      status: "เสร็จแล้ว",
      url: "#",
      progress: "100%"
    },
    // {
    //   title: "โปรเจค B", 
    //   description: "Another brilliant idea in progress",
    //   status: "เสร็จแล้ว",
    //   url: "#",
    //   progress: "100%"
    // },
    // {
    //   title: "โปรเจค C",
    //   description: "Work in progress (emphasis on progress)",
    //   status: "เพิ่งเริ่ม",
    //   url: "#",
    //   progress: "15%"
    // }
  ];

  // Calculate completed projects
  const completedProjects = projects.filter(project => project.status === 'เสร็จแล้ว').length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 animate-fade-in">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 hover:text-yellow-600 transition-colors duration-300">YakTumAraiSakYang</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Funny Icon */}
          <div className="mb-8 animate-fade-in animation-delay-200">
            <div className="inline-block p-6 bg-yellow-100 rounded-full animate-bounce hover:animate-pulse transition-all duration-300 hover:scale-110">
              <img 
                src="../../public/img-upload/Lovepik_com-380547583-brain-clipart-cartoon-brain-with-and-other-cartoon-characters-on-it-illustration-vector.png" 
                alt="Confused robot"
                className="w-24 h-24 rounded-full object-cover transition-transform duration-300 hover:rotate-12"
              />
            </div>
          </div>

          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-normal animate-fade-in animation-delay-300">
            ยังไม่รู้จะทำอะไร...<br />
            <span className="text-yellow-600 hover:text-yellow-700 transition-colors duration-300">แต่รู้ว่าต้องเริ่มซักอย่าง</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light animate-fade-in animation-delay-400">
            ยินดีต้อนรับสู่เว็บที่เกิดจากความว่าง + ความหวัง
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-500">
            Sometimes the best projects start with absolutely no plan. This is one of those times. 
            But hey, at least we're honest about it! 🤷‍♂️
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in animation-delay-600">
            <Button 
            disabled
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl  hover:animate-none"
            >
              เดี๋ยวคิดออกแล้วจะบอก
            </Button>
          </div>
        </div>
      </main>

      {/* Ideas Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in animation-delay-700">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
              ไอเดียที่อาจจะเกิดขึ้นเร็วๆ นี้
            </h2>
            <p className="text-center text-gray-600 mb-12">
              (หรือไม่เกิดขึ้นเลยก็ได้ เราไม่รับประกัน)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 bg-white border-2 border-yellow-100 hover:border-yellow-300 hover:bg-yellow-50 animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">💡</div>
                  <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">{idea}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    Status: <span className="text-yellow-600 font-semibold animate-pulse">กำลังคิด...</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in animation-delay-1300">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
              โปรเจคที่กำลังทำอยู่
            </h2>
            <p className="text-center text-gray-600 mb-12">
              ผลงานที่เราทำจริง (บางอันเสร็จแล้ว บางอันก็...)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-white border-2 border-gray-100 hover:border-yellow-300 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-white animate-fade-in group"
                style={{ animationDelay: `${1400 + index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-700 transition-colors duration-300">{project.title}</h3>
                    <a 
                      href={project.url} 
                      className="text-yellow-600 hover:text-yellow-700 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{project.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Progress:</span>
                      <span className="font-semibold text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300">{project.progress}</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full transition-all duration-1000 hover:bg-yellow-600 animate-pulse"
                        style={{ width: project.progress }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 transform group-hover:scale-110 ${
                      project.status === 'เสร็จแล้ว' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                      project.status === 'กำลังทำ' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' :
                      'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in animation-delay-1700">
            <p className="text-gray-500 text-sm hover:text-gray-700 transition-colors duration-300">
              มีโปรเจคอื่นๆ อีกเยอะ แต่ยังไม่กล้าแชร์ 😅
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-yellow-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-12 animate-fade-in animation-delay-1800">
              สถิติที่น่าภาคภูมิใจ (หรือเปล่า)
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in animation-delay-1900 group">
                <div className="text-3xl font-bold text-yellow-600 mb-2 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">∞</div>
                <div className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Ideas Brainstormed</div>
                <div className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">All forgotten immediately</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in animation-delay-2000 group">
                <div className="text-3xl font-bold text-yellow-600 mb-2 transition-all duration-300 group-hover:scale-125 group-hover:animate-bounce">{completedProjects}</div>
                <div className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Projects Completed</div>
                <div className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">
                  {completedProjects > 0 ? "Getting there!" : "But we're getting there!"}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in animation-delay-2100 group">
                <div className="text-3xl font-bold text-yellow-600 mb-2 transition-all duration-300 group-hover:scale-125 group-hover:text-yellow-700">100%</div>
                <div className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Enthusiasm Level</div>
                <div className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">Despite having no plan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center animate-fade-in animation-delay-2200">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-yellow-600 transition-colors duration-300">
            อยากรู้ว่าเราคิดอะไรออกมั้ย?
          </h2>
          <p className="text-gray-600 mb-8 hover:text-gray-700 transition-colors duration-300">
            Subscribe เพื่อรับข่าวสารเมื่อเราคิดออกแล้วว่าจะทำอะไร (อาจจะนานหน่อย)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your.email@example.com"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 hover:border-yellow-400"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg"
            disabled
            >
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4 hover:text-gray-600 transition-colors duration-300">
            เราสัญญาว่าจะไม่ spam (เพราะเราก็ยังไม่รู้จะส่งอะไร)
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 animate-fade-in animation-delay-2300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 hover:text-yellow-500 transition-colors duration-300">YakTumAraiSakYang.com</h3>
            <p className="text-gray-400 mb-8 hover:text-gray-300 transition-colors duration-300">
              The most honest website on the internet. We literally have no idea what we're doing.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                <Youtube size={24} />
              </a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">
                © 2025 YakTumAraiSakYang.com | Built with confusion and hope | 
                <span className="text-yellow-500 hover:text-yellow-400 transition-colors duration-300"> Made with ❤️ and a lot of uncertainty</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
