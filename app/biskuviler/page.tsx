import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import BiscuitCategories from "@/components/biscuit-categories"
import BiscuitProducts from "@/components/biscuit-products"
import BiscuitFaq from "@/components/biscuit-faq"

export const metadata = {
  title: "Bisküviler | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description:
    "Anı Bisküvi'nin lezzetli bisküvi çeşitleri. Tatlı ve tuzlu bisküviler, kremalı bisküviler ve daha fazlası.",
}

export default function BiskuvilerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=Bisküviler"
            alt="Bisküviler"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bisküviler</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Anı Bisküvi'nin özenle hazırladığı, her damak zevkine uygun bisküvi çeşitleri ile tanışın.
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
              <span className="font-medium text-[#e30613]">Bisküviler</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Bisküvi Dünyamıza Hoş Geldiniz</h2>
                <p className="text-gray-600 mb-4">
                  Anı Bisküvi Gıda San. ve Tic. A.Ş. olarak, 1944'ten bu yana en kaliteli hammaddelerle, geleneksel
                  lezzetleri modern üretim teknikleriyle birleştirerek eşsiz bisküviler üretiyoruz.
                </p>
                <p className="text-gray-600 mb-6">
                  Tatlı bisküvilerden tuzlu çeşitlere, kremalı bisküvilerden sade lezzetlere kadar geniş ürün
                  yelpazemizle her yaştan tüketicimizin damak zevkine hitap ediyoruz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#e30613] hover:bg-red-700">Tüm Bisküviler</Button>
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
                  src="/placeholder.svg?height=300&width=500&text=Bisküvi+Üretimi"
                  alt="Bisküvi Üretimi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Biscuit Categories */}
        <BiscuitCategories />

        {/* Featured Products */}
        <BiscuitProducts />

        {/* Quality Standards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Kalite Standartlarımız</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=🌾"
                    alt="Kaliteli Hammadde"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Kaliteli Hammadde</h3>
                <p className="text-gray-600 text-center">
                  Bisküvilerimizde sadece en kaliteli ve seçkin hammaddeler kullanıyoruz. Tedarikçilerimizi titizlikle
                  seçiyor ve düzenli kalite kontrolleri yapıyoruz.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=🔍"
                    alt="Kalite Kontrol"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Sıkı Kalite Kontrol</h3>
                <p className="text-gray-600 text-center">
                  Üretimin her aşamasında sıkı kalite kontrol süreçleri uyguluyoruz. Ürünlerimiz, uluslararası gıda
                  güvenliği standartlarına uygun olarak üretiliyor.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Image src="/placeholder.svg?height=40&width=40&text=🏆" alt="Sertifikalar" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Uluslararası Sertifikalar</h3>
                <p className="text-gray-600 text-center">
                  ISO 9001, ISO 22000, FSSC 22000 ve Helal Gıda sertifikalarına sahibiz. Bu sertifikalar, ürünlerimizin
                  kalitesini ve güvenliğini garanti ediyor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <BiscuitFaq />

        {/* Call to Action */}
        <section className="py-16 bg-[#e30613]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Bisküvilerimizi Denediniz mi?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Anı Bisküvi'nin lezzetli dünyasını keşfedin. Tüm ürünlerimize en yakın satış noktasından ulaşabilirsiniz.
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
