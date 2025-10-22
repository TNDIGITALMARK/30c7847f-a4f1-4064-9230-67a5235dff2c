export const dynamic = 'force-dynamic'

import { Brain, Heart, BookOpen, Target, Users, ChevronRight, Play } from 'lucide-react'

export default function DespertarLanding() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'hsl(var(--despertar-text))' }}>
            Despertar
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#sobre" className="hover:text-[#D62E2E] transition-colors">Sobre</a>
            <a href="#cursos" className="hover:text-[#D62E2E] transition-colors">Cursos</a>
            <a href="#comunidade" className="hover:text-[#D62E2E] transition-colors">Comunidade</a>
            <a href="#depoimentos" className="hover:text-[#D62E2E] transition-colors">Depoimentos</a>
            <a href="#precos" className="hover:text-[#D62E2E] transition-colors">Preços</a>
            <button className="bg-[#D62E2E] text-white px-6 py-2.5 rounded-lg hover:bg-[#b82626] transition-all shadow-[0_2px_8px_rgba(214,46,46,0.3)] font-medium">
              Entrar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D62E2E] via-[#D62E2E]/80 to-[#F7E9D0]/90 z-10" />
          <img
            src="/generated/hero-bg.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Desperte sua mente.<br />Transforme sua vida.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Uma jornada de sabedoria e propósito para jovens que querem viver diferente
          </p>
          <button className="bg-[#D62E2E] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#b82626] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] hover:scale-105 inline-flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Quero Despertar Agora
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Nossa Plataforma Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
            Nossa Plataforma
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Desenvolvemos uma experiência completa de aprendizado
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Autodesenvolvimento",
                description: "Desenvolva habilidades mentais e emocionais essenciais"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Crescimento Pessoal",
                description: "Alcance seus objetivos com métodos comprovados"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Impacto Positivo",
                description: "Transforme sua vida e inspire outros ao seu redor"
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#FFF9F3] border-2 border-[#F7E9D0] flex items-center justify-center mb-4 text-[#D62E2E]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Missão Section */}
      <section className="py-24 bg-[#FFF9F3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
            Uma geração que pensa,<br />age e vive diferente.
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Estamos vivendo na era da alienação digital, onde jovens passam horas consumindo conteúdo vazio
            enquanto perdem o contato com o que realmente importa. O Despertar nasceu para reverter isso:
            uma plataforma que ensina você a pensar com sabedoria, agir com propósito e viver conectado
            com Deus e com seu verdadeiro potencial.
          </p>
        </div>
      </section>

      {/* Explore Nossos Cursos Section */}
      <section id="cursos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A] text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            Explore nossos cursos
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Conteúdo estruturado para sua transformação completa
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "/generated/module-mentalidade.png",
                badge: "POPULAR",
                title: "Mentalidade Blindada",
                description: "Proteja sua mente das influências negativas",
                rating: 4.9,
                students: "2.4k"
              },
              {
                image: "/generated/module-sabedoria.png",
                badge: "NOVO",
                title: "Sabedoria Prática",
                description: "Aplique princípios eternos no dia a dia",
                rating: 5.0,
                students: "1.8k"
              },
              {
                image: "/generated/module-espiritualidade.png",
                badge: "ESSENCIAL",
                title: "Espiritualidade Jovem",
                description: "Conecte-se com Deus de forma autêntica",
                rating: 4.9,
                students: "3.1k"
              },
              {
                image: "/generated/module-mentalidade.png",
                title: "Propósito de Vida",
                description: "Descubra sua missão única",
                rating: 4.8,
                students: "1.5k"
              },
              {
                image: "/generated/module-sabedoria.png",
                title: "Relacionamentos Sábios",
                description: "Construa conexões verdadeiras",
                rating: 4.9,
                students: "2.0k"
              },
              {
                image: "/generated/module-espiritualidade.png",
                title: "Liderança Consciente",
                description: "Lidere com sabedoria e impacto",
                rating: 4.8,
                students: "1.2k"
              }
            ].map((course, idx) => (
              <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {course.badge && (
                    <span className="absolute top-4 right-4 bg-[#D62E2E] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {course.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-[#D62E2E] ml-1" fill="#D62E2E" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      ⭐ {course.rating}
                    </span>
                    <span>{course.students} alunos</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Método Despertar Section */}
      <section className="py-24 bg-[#FFF9F3]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A] text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            O Método Despertar
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Dois frameworks poderosos para sua transformação
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* PPSAR Framework */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <h3 className="text-2xl font-bold mb-6 text-[#D62E2E]" style={{ fontFamily: 'var(--font-heading)' }}>
                Framework PPSAR
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Programação", desc: "Como você foi condicionado" },
                  { title: "Pensamentos", desc: "O que você acredita ser verdade" },
                  { title: "Sentimentos", desc: "Suas emoções e estado interior" },
                  { title: "Ações", desc: "O que você faz no dia a dia" },
                  { title: "Resultados", desc: "A vida que você está criando" }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#D62E2E] text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1A1A1A] mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                    {idx < 4 && <ChevronRight className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" />}
                  </div>
                ))}
              </div>
            </div>

            {/* APIAR Framework */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <h3 className="text-2xl font-bold mb-6 text-[#FF7A00]" style={{ fontFamily: 'var(--font-heading)' }}>
                Framework APIAR
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Ambiente", desc: "Onde você passa seu tempo", icon: "🏠" },
                  { title: "Pessoas", desc: "Com quem você se relaciona", icon: "👥" },
                  { title: "Ideias", desc: "O que você consome e estuda", icon: "💡" },
                  { title: "Ações", desc: "Seus hábitos e decisões diárias", icon: "⚡" },
                  { title: "Resultados", desc: "A transformação que acontece", icon: "🎯" }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#FF7A00] text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1A1A1A] mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Criador Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                Conheça o Criador
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                <span className="font-semibold text-[#D62E2E]">Artur Daher, 17 anos</span>, com mais de
                <span className="font-semibold"> 170 mil seguidores</span>, ensina sabedoria e propósito
                de forma prática e atual para a geração Z.
              </p>
              <blockquote className="border-l-4 border-[#D62E2E] pl-6 py-2 italic text-xl text-gray-700 mb-8">
                "O que diferencia o sábio é a maneira como ele pensa."
              </blockquote>
              <p className="text-gray-600 leading-relaxed">
                Artur criou o Despertar após perceber que milhares de jovens estavam perdidos na
                alienação digital. Combinando sabedoria atemporal com métodos modernos de ensino,
                ele desenvolveu um sistema que já transformou a vida de milhares de estudantes.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D62E2E] to-[#FF7A00] rounded-2xl blur-2xl opacity-20" />
                <img
                  src="/generated/instructor.png"
                  alt="Artur Daher - Criador do Despertar"
                  className="relative rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-24 bg-[#FFF9F3]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A] text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            O que dizem nossos alunos
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center">
            Transformações reais de jovens como você
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                age: "19 anos",
                text: "Mudou minha forma de ver a vida completamente. Aprendi a pensar de forma crítica e encontrar propósito real.",
                rating: 5
              },
              {
                name: "João Santos",
                age: "21 anos",
                text: "Encontrei propósito que não sabia que existia. O método PPSAR me ajudou a entender meus padrões e mudá-los.",
                rating: 5
              },
              {
                name: "Ana Costa",
                age: "18 anos",
                text: "Sabedoria prática que realmente funciona. Estou vivendo de forma mais consciente e conectada com Deus.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FF7A00] text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D62E2E] to-[#FF7A00] flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A1A1A]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.age}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comunidade Section */}
      <section id="comunidade" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[#D62E2E] to-[#FF7A00] rounded-2xl p-12 text-white shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Comunidade que Transforma
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Pronto para começar sua jornada?
            </p>
            <button className="bg-white text-[#D62E2E] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Começar Agora Gratuitamente
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="precos" className="py-24 bg-[#FFF9F3]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A] text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            Escolha Despertar Hoje
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center">
            Acesso completo à plataforma de transformação
          </p>

          <div className="bg-white rounded-2xl p-10 shadow-[0_8px_24px_rgba(0,0,0,0.12)] border-2 border-[#D62E2E]">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2 text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                Acesso Completo ao Despertar
              </h3>
              <p className="text-gray-600">
                Transformação garantida ou seu dinheiro de volta
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Acesso a todos os módulos e cursos",
                "Comunidade exclusiva de membros",
                "Lives semanais com Artur Daher",
                "Material complementar e workbooks",
                "Certificado de conclusão",
                "Atualizações e novos conteúdos"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D62E2E] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-[#D62E2E] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#b82626] transition-all shadow-[0_4px_16px_rgba(214,46,46,0.3)] hover:shadow-[0_6px_20px_rgba(214,46,46,0.4)]" style={{ fontFamily: 'var(--font-heading)' }}>
                Quero Despertar Agora
              </button>
              <button className="flex-1 bg-[#FF7A00] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e66d00] transition-all" style={{ fontFamily: 'var(--font-heading)' }}>
                Ver Todos os Módulos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#1A1A1A] text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Como funciona a plataforma Despertar?",
                a: "A plataforma oferece módulos em vídeo, materiais complementares e acesso à comunidade exclusiva. Você aprende no seu ritmo com conteúdo estruturado e suporte contínuo."
              },
              {
                q: "Preciso ter conhecimento prévio?",
                a: "Não! O Despertar foi criado para jovens que estão começando sua jornada de autoconhecimento e desenvolvimento pessoal."
              },
              {
                q: "Quanto tempo leva para ver resultados?",
                a: "Muitos alunos relatam mudanças significativas nas primeiras semanas, mas a transformação profunda acontece com dedicação consistente ao longo dos meses."
              },
              {
                q: "Existe garantia de satisfação?",
                a: "Sim! Oferecemos garantia de 30 dias. Se você não ficar satisfeito, devolvemos 100% do seu investimento."
              }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-[#FFF9F3] rounded-xl p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-lg text-[#1A1A1A] list-none" style={{ fontFamily: 'var(--font-heading)' }}>
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-[#D62E2E] transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Despertar</h3>
              <p className="text-gray-400 mb-4">
                Desperte sua mente. Transforme sua vida.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/artur.sabio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#D62E2E] rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xl">📱</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D62E2E] rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xl">💬</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D62E2E] rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xl">🎥</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#sobre" className="hover:text-[#D62E2E] transition-colors">Sobre</a></li>
                <li><a href="#cursos" className="hover:text-[#D62E2E] transition-colors">Cursos</a></li>
                <li><a href="#comunidade" className="hover:text-[#D62E2E] transition-colors">Comunidade</a></li>
                <li><a href="#depoimentos" className="hover:text-[#D62E2E] transition-colors">Depoimentos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg" style={{ fontFamily: 'var(--font-heading)' }}>Contato</h4>
              <p className="text-gray-400 mb-2">
                Instagram: <a href="https://instagram.com/artur.sabio" className="text-[#FF7A00] hover:text-[#D62E2E]">@artur.sabio</a>
              </p>
              <p className="text-gray-400">
                Email: contato@despertar.com.br
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 Despertar. Todos os direitos reservados.</p>
            <p>Projeto de TCC da Nine Academy</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
