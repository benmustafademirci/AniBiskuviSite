import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"

export const metadata = {
  title: "Gofretler | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin lezzetli gofret çeşitleri. Çikolatalı, fındıklı ve kremalı gofretler.",
}

export default function WafersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1200&auto=format"
            alt="Gofretler"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gofretler</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi'nin özenle hazırladığı, katman katman lezzet sunan gofret çeşitleri ile tanışın.
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
              <span className="font-medium text-[#e30613]">Gofretler</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Gofret Dünyamıza Hoş Geldiniz</h2>
                <p className="text-gray-600 mb-4">
                  Anı Bisküvi Gıda San. ve Tic. A.Ş. olarak, çıtır gofret katmanları arasında enfes kremalarla
                  hazırlanan, eşsiz lezzetiyle öne çıkan gofretler sunuyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Çikolatalı gofretlerden fındıklı gofretlere, sütlü gofretlerden çubuk gofretlere kadar geniş ürün
                  yelpazemizle her yaştan tüketicimizin damak zevkine hitap ediyoruz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#e30613] hover:bg-red-700">Tüm Gofretler</Button>
                  <Button
                    variant="outline"
                    className="border-[#e30613] text-[#e30613] hover:bg-[#e30613] hover:text-white"
                  >
                    Üretim Tesislerimiz
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=500&text=Gofret+Üretimi"
                  alt="Gofret Üretimi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Öne Çıkan Gofretlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Çokomel",
                  image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300&auto=format",
                  description: "Çikolata kaplı, fındık kremalı gofret",
                },
                {
                  name: "Dido",
                  image: "https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=300&auto=format",
                  description: "Sütlü çikolata kaplı, vanilya kremalı gofret",
                },
                {
                  name: "Çikolatalı Gofret",
                  image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=300&auto=format",
                  description: "Kakao kremalı, çıtır katmanlı gofret",
                },
                {
                  name: "Çubuk Gofret",
                  image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=300&auto=format",
                  description: "Pratik çubuk formunda, çikolatalı gofret",
                },
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                  <div className="relative h-48">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-[#e30613] text-[#e30613] hover:bg-[#e30613] hover:text-white"
                    >
                      Detaylar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#e30613]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Gofretlerimizi Denediniz mi?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Anı Bisküvi'nin lezzetli gofret dünyasını keşfedin. Tüm ürünlerimize en yakın satış noktasından
              ulaşabilirsiniz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-[#e30613] hover:bg-gray-100">Satış Noktaları</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                İletişime Geçin
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
