import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "Görsel Arşiv | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin ürün görselleri, fabrika fotoğrafları ve kurumsal görseller.",
}

// Görsel kategorileri
const imageCategories = [
  { id: "all", name: "Tümü" },
  { id: "products", name: "Ürün Görselleri" },
  { id: "factory", name: "Fabrika Fotoğrafları" },
  { id: "corporate", name: "Kurumsal Görseller" },
  { id: "events", name: "Etkinlikler" },
  { id: "management", name: "Yönetim" },
]

// Görsel arşiv verileri
const imageGallery = [
  {
    id: "product-1",
    title: "Çikolatalı Bisküvi",
    category: "products",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format",
    date: "2023",
  },
  {
    id: "product-2",
    title: "Kakaolu Gofret",
    category: "products",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=400&auto=format",
    date: "2023",
  },
  {
    id: "product-3",
    title: "Fındıklı Çikolata",
    category: "products",
    image: "https://images.unsplash.com/photo-1587244141530-6b6aceef93db?q=80&w=400&auto=format",
    date: "2023",
  },
  {
    id: "factory-1",
    title: "Üretim Tesisi",
    category: "factory",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400&auto=format",
    date: "2022",
  },
  {
    id: "factory-2",
    title: "Üretim Hattı",
    category: "factory",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400&auto=format",
    date: "2022",
  },
  {
    id: "factory-3",
    title: "Kalite Kontrol Laboratuvarı",
    category: "factory",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=400&auto=format",
    date: "2022",
  },
  {
    id: "corporate-1",
    title: "Şirket Merkezi",
    category: "corporate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format",
    date: "2021",
  },
  {
    id: "corporate-2",
    title: "Toplantı Salonu",
    category: "corporate",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format",
    date: "2021",
  },
  {
    id: "corporate-3",
    title: "Lobi",
    category: "corporate",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=400&auto=format",
    date: "2021",
  },
  {
    id: "event-1",
    title: "Ürün Lansmanı",
    category: "events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400&auto=format",
    date: "2023",
  },
  {
    id: "event-2",
    title: "Basın Toplantısı",
    category: "events",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=400&auto=format",
    date: "2023",
  },
  {
    id: "event-3",
    title: "Fuar Standı",
    category: "events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format",
    date: "2022",
  },
  {
    id: "management-1",
    title: "CEO Portresi",
    category: "management",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format",
    date: "2023",
  },
  {
    id: "management-2",
    title: "Yönetim Kurulu",
    category: "management",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format",
    date: "2023",
  },
  {
    id: "management-3",
    title: "Üst Yönetim",
    category: "management",
    image: "https://images.unsplash.com/photo-1600865627470-6fe1b9a7bbdf?q=80&w=400&auto=format",
    date: "2023",
  },
]

export default function VisualArchivePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=1200&auto=format"
            alt="Görsel Arşiv"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">GÖRSEL ARŞİV</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi'nin ürün görselleri, fabrika fotoğrafları ve kurumsal görseller
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-gray-100 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#e30613] transition-colors">
                Ana Sayfa
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="#" className="hover:text-[#e30613] transition-colors">
                Basın Merkezi
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="font-medium text-[#e30613]">Görsel Arşiv</span>
            </div>
          </div>
        </section>

        {/* Visual Archive */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Görsel Arşiv</h2>
              <p className="text-gray-600">
                Anı Bisküvi'nin ürün görselleri, fabrika fotoğrafları ve kurumsal görsellerini bu sayfadan
                indirebilirsiniz. Tüm görseller yüksek çözünürlüklü ve profesyonel kullanıma uygundur.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Görsel ara..." className="pl-10" />
              </div>

              <div className="flex gap-4">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select className="bg-white border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm w-full md:w-auto">
                    <option value="all">Tüm Kategoriler</option>
                    <option value="products">Ürün Görselleri</option>
                    <option value="factory">Fabrika Fotoğrafları</option>
                    <option value="corporate">Kurumsal Görseller</option>
                    <option value="events">Etkinlikler</option>
                    <option value="management">Yönetim</option>
                  </select>
                </div>

                <select className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option value="newest">En Yeni</option>
                  <option value="oldest">En Eski</option>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                </select>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {imageCategories.map((category, index) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 ? "bg-[#e30613] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imageGallery.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        İndir
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        {item.category === "products"
                          ? "Ürün Görselleri"
                          : item.category === "factory"
                            ? "Fabrika Fotoğrafları"
                            : item.category === "corporate"
                              ? "Kurumsal Görseller"
                              : item.category === "events"
                                ? "Etkinlikler"
                                : "Yönetim"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="inline-flex">
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
                >
                  Önceki
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-[#e30613] bg-white border-t border-b border-gray-300 hover:bg-gray-50"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-50"
                >
                  3
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
                >
                  Sonraki
                </a>
              </nav>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kullanım Koşulları</h2>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 mb-4">
                  Bu sayfada yer alan tüm görseller Anı Bisküvi'nin mülkiyetindedir ve telif hakları ile korunmaktadır.
                  Görselleri kullanmadan önce aşağıdaki hususlara dikkat ediniz:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Görseller sadece Anı Bisküvi ile ilgili haber, tanıtım ve bilgilendirme amaçlı kullanılabilir.
                  </li>
                  <li>Görsellerin ticari a tanıtım ve bilgilendirme amaçlı kullanılabilir.</li>
                  <li>Görsellerin ticari amaçla kullanımı için önceden izin alınması gerekmektedir.</li>
                  <li>Görsellerin kullanımında Anı Bisküvi'nin adının belirtilmesi zorunludur.</li>
                  <li>Görsellerin Anı Bisküvi'nin itibarını zedeleyecek şekilde kullanılması yasaktır.</li>
                  <li>
                    Görsellerin üzerinde değişiklik yapılması veya kırpılması durumunda, görsel bütünlüğünün korunması
                    gerekmektedir.
                  </li>
                </ul>

                <p className="mt-4 text-gray-600">
                  Görsellerle ilgili sorularınız veya özel kullanım talepleriniz için lütfen basın ilişkileri ekibimizle
                  iletişime geçiniz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Daha Fazla Görsel İçin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Arşivde bulamadığınız görseller veya özel çekim talepleri için basın ilişkileri ekibimizle iletişime
              geçebilirsiniz.
            </p>
            <Button className="bg-[#e30613] hover:bg-red-700">Basın İlişkileri</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
