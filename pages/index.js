import {
  UilEnvelope,
  UilBell,
  UilShoppingCart,
  UilBars,
  UilSearch,
  UilLocationPoint,
  UilAngleDown,
  UilCopyright,
} from "@iconscout/react-unicons";
import Category from "../components/Category";
import Product from "../components/Product";
import PulsaCart from "../components/PulsaCart";
import Title from "../components/Title";
import BannerSwiper from "../components/BannerSwiper";
import BannerPromo from "../components/BannerPromo";
import BodyPromo from "../components/BodyPromo";
import KategoriPilihan from "../components/KategoriPilihan";
import LagiTrending from "../components/LagiTrending";
import ButtonRecom from "../components/ButtonRecom";
import Kebijakan from "../components/Kebijakan";
import FooterCategory from "../components/FooterCategory";
import BottomNavigator from "../components/BottomNavigator";

import traktiranData from "./../data/traktiran.json";
import kejarDiskonData from "./../data/kejarDiskon.json";
import elektronikData from "./../data/elektronik.json";
import elektronikPilihanData from "./../data/elektronikPilihan.json";
import produkPilihanData from "./../data/produkPilihan.json";
import produkRekomendasiData from "./../data/produkRekomendasi.json";
import semuaDiTokopediaData from "./../data/semuaDiTokopedia.json";

export default function Home() {
  return (
    <div className="relative max-w-[500px] mx-auto">
      <div className="relative w-full h-32 bg-[#20ce7d]">
        <div className="flex items-center space-x-3 mx-4 pt-2">
          <div className="flex items-center flex-1 bg-white rounded-lg px-2">
            <UilSearch size="16" color="#9FA6B0" />
            <input
              className="bg-transparent text-[#9FA6B0] outline-none pl-1 py-[10px]"
              placeholder="Cari meja komputer"
            />
          </div>
          <UilEnvelope color="white" />
          <UilBell color="white" />
          <UilShoppingCart color="white" />
          <UilBars color="white" />
        </div>
        <div className="flex items-center space-x-1 text-white px-4 pt-2">
          <UilLocationPoint size="14" />
          <span>Dikirim ke</span>
          <span className="font-medium">Jakarta Pusat</span>
          <UilAngleDown size="14" />
        </div>
        <div className="flex scrollbar-none pl-4 py-4 overflow-x-auto">
          <Category img="official-store" title="Official Store" />
          <Category img="all" title="Lihat Semua" />
          <Category img="kebutuhan-harian" title="Kebutuhan Harian" />
          <Category img="handphone-tablet" title="Handphone & Tablet" />
          <Category img="top-up-tagihan" title="Top-up & Tagihan" />
          <Category img="fashion-pria" title="Fashion Pria" />
          <Category img="rumah-tangga" title="Rumah Tangga" />
          <Category img="keuangan" title="Keuangan" />
          <Category img="travel-entertainment" title="Travel & Entertainment" />
          <Category img="elektronik" title="Elektronik" />
          <Category img="fashion-wanita" title="Fashion Wanita" />
          <Category img="komputer-laptop" title="Komputer & Laptop" />
        </div>

        <BannerSwiper />

        <div className="py-4">
          <div className="w-full overflow-x-auto scrollbar-none">
            <div className="flex justify-between items-center pl-6">
              <Category img="usaha-lokal" title="Usaha Lokal" />
              <Category img="live-shopping" title="Live Shopping" />
              <Category img="panen-telur" title="Panen Telur" />
              <Category img="cod" title="Bayar di Tempat" />
              <Category img="bazar" title="Bazar Hari Ini" />
            </div>
          </div>
        </div>

        <div className="py-2">
          <Title title="Traktiran Pengguna Baru" time="06:40:35" />
          <BodyPromo img="traktiran-pengguna-baru" colorClass="bg-[#049642]">
            {traktiranData.map((data) => (
              <Product key={data.id} data={data} />
            ))}
          </BodyPromo>
        </div>

        <div className="py-2">
          <Title title="Pulsa mau habis? Yuk Beli Sekarang!" seeAll={false} />
          <div>
            <img src="/images/coba-topup.jpg" />
            <div className="grid grid-cols-3 gap-2 bg-[#019B45] px-4 pb-4">
              <PulsaCart icon="telkomsel" text="Telkomsel" />
              <PulsaCart icon="xl" text="XL" />
              <PulsaCart icon="indosat" text="Indosat" />
              <PulsaCart icon="axis" text="Axis" />
              <PulsaCart icon="tri" text="Tri" />
              <PulsaCart icon="smartfren" text="Smartfren" />
            </div>
          </div>
        </div>

        <div className="py-2">
          <Title title="Kejar Diskon" time="28 menit 15 detik" />
          <BodyPromo img="kejar-diskon" colorClass="bg-[#EABB3A]">
            {kejarDiskonData.map((data) => (
              <Product key={data.id} data={data} />
            ))}
          </BodyPromo>
        </div>

        <div className="px-4 py-2">
          <Title title="Special di Tokopedia hari ini" seeAll={false} />
          <div className="grid grid-cols-2 gap-2">
            <img className="rounded-lg" src="/images/tokopedia-nyam.webp" />
            <img className="rounded-lg" src="/images/women-in-style.webp" />
            <img className="rounded-lg" src="/images/kebutuhan-harian.webp" />
            <img
              className="rounded-lg"
              src="/images/tokopedia-garage-otofair.webp"
            />
          </div>
        </div>

        <div className="py-2">
          <Title title="Mega Cashback" seeAll={true} />
          <BannerPromo>
            <img src="/images/mega-cashback1.webp" />
            <img src="/images/mega-cashback2.webp" />
            <img src="/images/mega-cashback3.webp" />
          </BannerPromo>
        </div>

        <div className="py-2">
          <Title title="Elektronik &lt; 49 rb" seeAll={true} />
          <BodyPromo>
            {elektronikData.map((data) => (
              <Product key={data.id} data={data} />
            ))}
          </BodyPromo>
        </div>

        <div className="py-2">
          <Title title="Sahabat Imun" seeAll={true} />
          <BannerPromo>
            <img src="/images/sahabat-imun1.webp" />
            <img src="/images/sahabat-imun2.webp" />
            <img src="/images/sahabat-imun3.webp" />
            <img src="/images/sahabat-imun4.webp" />
            <img src="/images/sahabat-imun5.webp" />
            <img src="/images/sahabat-imun6.webp" />
          </BannerPromo>
        </div>

        <div className="py-2">
          <Title title="Produk pilihan untukmu" seeAll={true} />
          <BodyPromo>
            {produkPilihanData.map((data) => (
              <Product key={data.id} data={data} />
            ))}
          </BodyPromo>
        </div>

        <div className="py-2">
          <Title title="Solusi Keren" seeAll={true} />
          <BannerPromo>
            <img src="/images/solusi-keren1.webp" />
            <img src="/images/solusi-keren2.webp" />
            <img src="/images/solusi-keren3.webp" />
            <img src="/images/solusi-keren4.webp" />
            <img src="/images/solusi-keren5.webp" />
            <img src="/images/solusi-keren6.webp" />
          </BannerPromo>
        </div>

        <div className="py-2">
          <Title title="Kategori pilihan" seeAll={true} />
          <KategoriPilihan />
        </div>

        <div className="py-2">
          <Title title="Pet Fest" seeAll={true} />
          <BannerPromo>
            <img src="/images/pet-fest1.webp" />
            <img src="/images/pet-fest2.webp" />
            <img src="/images/pet-fest3.webp" />
            <img src="/images/pet-fest4.webp" />
            <img src="/images/pet-fest5.webp" />
            <img src="/images/pet-fest6.webp" />
          </BannerPromo>
        </div>

        <div className="py-2">
          <Title title="Lagi trending, nih" reload={true} />
          <div className="grid grid-cols-2 mx-4 gap-3">
            <LagiTrending img="redmi-10" title="Redmi 10" amount="891.3rb" />
            <LagiTrending
              img="kursi-gaming"
              title="Kursi Gaming"
              amount="143.7rb"
            />
            <LagiTrending
              img="sarung-tangan"
              title="Sarung Tangan"
              amount="75.4rb"
            />
            <LagiTrending
              img="sendal-pria"
              title="Sandal Pria"
              amount="1.7jt"
            />
          </div>
        </div>

        <div className="py-2">
          <Title title="Official Store" seeAll={true} />
          <BannerPromo>
            <img src="/images/official-store1.webp" />
            <img src="/images/official-store2.webp" />
            <img src="/images/official-store3.webp" />
            <img src="/images/official-store4.webp" />
            <img src="/images/official-store5.webp" />
            <img src="/images/official-store6.webp" />
          </BannerPromo>
        </div>

        <div className="py-2">
          <Title title="Elektronik pilihan" seeAll="true" />
          <BodyPromo>
            {elektronikPilihanData.map((data) => (
              <Product key={data.id} data={data} />
            ))}
          </BodyPromo>
        </div>

        <div className="h-2 bg-gray-100" />
        <div className="py-2">
          <div className="sticky top-0 z-10 flex py-[10px] pl-3 bg-white overflow-x-auto scrollbar-none">
            <ButtonRecom title="For You" bgClass="btn-rec1" active="true" />
            <ButtonRecom title="Special Discount" bgClass="btn-rec2" />
            <ButtonRecom title="Perlengkapan Ibadah" bgClass="btn-rec3" />
            <ButtonRecom title="Outerwear Wanita" bgClass="btn-rec4" />
            <ButtonRecom title="TV & Aksesories" bgClass="btn-rec5" />
          </div>
          <div className="flex gap-2 px-3">
            <div className="flex flex-col gap-2">
              {produkRekomendasiData.map((data) => {
                if (data.id % 2 === 1) {
                  return <Product key={data.id} data={data} fixed={false} />;
                }
              })}
            </div>
            <div className="flex flex-col gap-2">
              {produkRekomendasiData.map((data) => {
                if (data.id % 2 === 0) {
                  return <Product key={data.id} data={data} fixed={false} />;
                }
              })}
            </div>
          </div>
          <div className="py-2 px-[10px]">
            <button
              type="button"
              className="block w-full border border-gray-300 rounded-lg text-sm font-semibold text-gray-500 py-[10px] mt-5 mb-8"
            >
              Lihat Selengkapnya
            </button>
          </div>
        </div>

        <div className="py-2 text-center">
          <Kebijakan />
        </div>

        <div className="py-2">
          <Title title="Cari Semua di Tokopedia!" />
          {semuaDiTokopediaData.map((data) => (
            <FooterCategory key={data.id} data={data} />
          ))}
          <div className="border-b border-gray-200 pt-2" />
        </div>

        <div className="py-2 pb-16">
          <Title title="Mau Cari Apa di Tokopedia?" />
          <div className="flex flex-wrap text-xs text-gray-500 mx-4 pt-3 pb-2 leading-relaxed">
            <a href="https://www.tokopedia.com/promo">Promo</a>
            <span className="px-1">|</span>
            <a href="https://www.tokopedia.com/p">Kategori</a>
            <span className="px-1">|</span>
            <a href="https://www.tokopedia.com/official-store">
              Official Store
            </a>
            <span className="px-1">|</span>
            <a href="https://www.tokopedia.com/salam">Tokopedia Salam</a>
            <span className="px-1">|</span>
            <a href="https://www.tokopedia.com/flight">Tiket Pesawat</a>
            <span className="px-1">|</span>
            <a href="https://www.tokopedia.com/kereta-api">Tiket Kereta Api</a>
            <span className="px-1">|</span>
            <a href="https://www.tokopedia.com/hotel">Hotel</a>
            <span className="px-1">|</span>
            <a href="https://www.tokopedia.com/deals">Deals</a>
            <span className="px-1">|</span>
            <a href="https://www.tokopedia.com/blog">Blog</a>
            <span className="px-1">|</span>
            <a href="https://www.tokopedia.com/?m2w">Situs Web</a>
          </div>
          <div className="border-b border-gray-200 pt-2" />
          <div className="flex flex-wrap text-xs text-gray-500 mx-4 pt-4 pb-3">
            <a href="https://www.tokopedia.com/help">Tokopedia Care</a>
            <span className="px-1">|</span>
            <a href="https://www.tokopedia.com/terms">Syarat & Ketentuan</a>
            <span className="px-1">|</span>
            <a href="https://www.tokopedia.com/privacy">Kebijakan Privasi</a>
          </div>
          <h4 className="text-xs font-bold pl-4">Gunakan Aplikasi Tokopedia</h4>
          <div className="flex mx-4 pt-2 space-x-2">
            <a href="https://play.google.com/store/apps/details?id=com.tokopedia.tkpd&hl=en">
              <img src="/images/google-play.svg" />
            </a>
            <a href="https://apps.apple.com/id/app/tokopedia/id1001394201">
              <img src="/images/app-store.svg" />
            </a>
          </div>
          <div className="max-w-max text-sm font-nunito bg-gray-100 p-1 mt-4 mx-4 rounded-lg">
            <button
              type="button"
              className="text-white bg-[#00AA5B] font-bold px-4 py-1 rounded-md"
            >
              Indonesia
            </button>
            <button
              type="button"
              className="text-gray-500 font-bold px-4 py-1 rounded-md"
            >
              English
            </button>
          </div>
          <div className="flex text-gray-400 items-center mt-4 mx-4">
            <UilCopyright size={12} />
            <span className="text-[10px] pl-[2px]">
              2009 - 2021, PT Tokopedia
            </span>
          </div>
        </div>

        <BottomNavigator />
      </div>
    </div>
  );
}
