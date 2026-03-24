import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Icon name="Cloud" size={22} />
            НЕБО
          </a>
          <div className="flex space-x-8">
            <a href="#features" className="text-sm uppercase tracking-widest hover:text-sky-500 transition-colors">
              Функции
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-sky-500 transition-colors">
              О приложении
            </a>
            <a href="#download" className="text-sm uppercase tracking-widest hover:text-sky-500 transition-colors">
              Скачать
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              ПО
              <br />
              ГОДА
            </h1>
            <p className="text-xl max-w-xl">
              Просто. Понятно. Точно. Узнай погоду в любом уголке мира за секунду — без лишнего, только самое важное.
            </p>
            <a
              href="#download"
              className="inline-block mt-8 px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-sky-500 transition-colors"
            >
              Скачать бесплатно
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-sky-400 flex items-center justify-center">
              <Icon name="Sun" size={120} className="text-white opacity-90" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black flex items-center justify-center">
                <Icon name="CloudRain" size={40} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ФУНКЦИИ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-sky-400 transition-colors duration-300 gap-4">
                  <Icon name="MapPin" size={48} className="text-black group-hover:text-white transition-colors duration-300" />
                  <span className="text-black group-hover:text-white text-2xl font-bold transition-colors duration-300">Геолокация</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Погода рядом</h3>
              <p className="text-neutral-400">Автоматически определяет твоё местоположение и показывает актуальную погоду здесь и сейчас</p>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-sky-400 transition-colors duration-300 gap-4">
                  <Icon name="CalendarDays" size={48} className="text-black group-hover:text-white transition-colors duration-300" />
                  <span className="text-black group-hover:text-white text-2xl font-bold transition-colors duration-300">7 дней</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Прогноз на неделю</h3>
              <p className="text-neutral-400">Планируй дела заранее — подробный прогноз на 7 дней вперёд с почасовой детализацией</p>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-sky-400 transition-colors duration-300 gap-4">
                  <Icon name="Gauge" size={48} className="text-black group-hover:text-white transition-colors duration-300" />
                  <span className="text-black group-hover:text-white text-2xl font-bold transition-colors duration-300">Детали</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Все показатели</h3>
              <p className="text-neutral-400">Влажность, давление, скорость ветра, UV-индекс — всё в одном месте, понятным языком</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О НАС</h2>
              <div className="aspect-[4/5] bg-sky-50 relative mb-8 md:mb-0 flex items-center justify-center">
                <Icon name="CloudSun" size={120} className="text-sky-400" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                НЕБО — это минималистичное приложение погоды для тех, кто ценит простоту и точность. Подходит для всей семьи: от школьников до взрослых.
              </p>
              <p className="mb-6">
                Мы убрали всё лишнее и оставили только то, что действительно нужно: температура, осадки, ветер и прогноз. Никаких сложных графиков и непонятных терминов.
              </p>
              <p className="mb-6">
                Приложение работает без регистрации, не требует много места и отлично работает даже при слабом интернете.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Принципы</h3>
                  <ul className="space-y-2">
                    <li>Простота</li>
                    <li>Точность</li>
                    <li>Скорость</li>
                    <li>Доступность</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Возможности</h3>
                  <ul className="space-y-2">
                    <li>Геолокация</li>
                    <li>Прогноз 7 дней</li>
                    <li>Поиск городов</li>
                    <li>Офлайн-режим</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 md:px-8 bg-sky-500 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">СКАЧАТЬ</h2>
              <p className="text-xl mb-8">Узнай погоду прямо сейчас — бесплатно, без рекламы и регистрации.</p>
              <div className="space-y-4">
                <p className="flex items-center gap-4">
                  <span className="w-28 text-sm uppercase tracking-widest">Платформы</span>
                  <span>iOS и Android</span>
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-28 text-sm uppercase tracking-widest">Возраст</span>
                  <span>11+</span>
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-28 text-sm uppercase tracking-widest">Цена</span>
                  <span>Бесплатно</span>
                </p>
              </div>
              <div className="flex gap-4 mt-10">
                <button className="flex items-center gap-2 px-6 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                  <Icon name="Smartphone" size={18} />
                  App Store
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                  <Icon name="Smartphone" size={18} />
                  Google Play
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <label htmlFor="city" className="block text-sm uppercase tracking-widest mb-2">
                    Введи свой город
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none placeholder-white/50 text-white"
                    placeholder="Например, Москва"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Email для уведомлений
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none placeholder-white/50 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Получить ссылку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="/" className="text-lg font-bold tracking-tighter flex items-center gap-2">
            <Icon name="Cloud" size={18} />
            НЕБО
          </a>
          <p className="text-sm text-neutral-500 uppercase tracking-widest">© 2026 Небо. Погода для всех.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-sky-500 transition-colors">Политика</a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-sky-500 transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
