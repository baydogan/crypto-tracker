# Crypto Tracker

## API Kullanmı

Haberler için News API kullanıldı, kullanmak için keyin root klasörüne .env dosyası altında REACT_APP_KEY= değeriyle tanımlanması gerekşiyor.

## Kullanılan Teknolojiler

- TailwindCSS
- React-Router
- Context API

## Kullanılan kütphaneler

- Axios - Fetch işlemlerini kolaylaştırmak için kullanıldı.
- ChartJS - Coin detay sayfasında grafiklerin kullanılması için kullanıldı.
- react-external-link - Haber sayfasında harici URL'lere ulaşmak için kullanıldı.
- HeroIcons - SVG komponentlerini eklemek için kullanıldı.

## Performans Optimizasyonu

- Arama ve filtreleme gibi tekrar eden işlemlerde dönen değerlerin hatırlanması için useMemo hooku kullanıldı.
- Coin listesinde pagination kullanıldı
- Code-splitting uygulandı. Her bileşen ayrı component olarak oluşturulup ihtiyaç duyulan yerde import edildi.

## Kurulum

```sh
cd crypo-tracker
npm i
npm run start
```
