<div align="center">

# 🛒 E-Commerce Mobile App

### فروشگاه اینترنتی با React Native، Expo Router و Context API

<p align="center">

<img src="https://img.shields.io/badge/React%20Native-Latest-61DAFB?style=for-the-badge&logo=react">

<img src="https://img.shields.io/badge/Expo-Latest-000020?style=for-the-badge&logo=expo">

<img src="https://img.shields.io/badge/Expo%20Router-File%20Based-success?style=for-the-badge">

<img src="https://img.shields.io/badge/Context%20API-State%20Management-blue?style=for-the-badge">

<img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript">

<img src="https://img.shields.io/badge/UI-E--Commerce-success?style=for-the-badge">

<img src="https://img.shields.io/badge/Platform-Android%20%7C%20iOS-success?style=for-the-badge">

</p>

> یک اپلیکیشن فروشگاهی مدرن با **React Native**، **Expo Router** و **Context API**

</div>

---

# 📖 معرفی پروژه

**E-Commerce Mobile App** یک اپلیکیشن فروشگاهی مدرن است که با استفاده از **React Native** و **Expo** توسعه داده شده است.

این پروژه با هدف ساخت یک تجربه خرید موبایلی طراحی شده و شامل بخش‌هایی مانند نمایش محصولات، جستجو، علاقه‌مندی‌ها، سبد خرید و صفحه جزئیات محصول است.

در این پروژه از معماری **Component-Based** استفاده شده و مدیریت صفحات توسط **Expo Router** انجام می‌شود.

همچنین برای مدیریت State برنامه از **Context API** استفاده شده است.

---

## ✨ امکانات

| ویژگی | وضعیت |
|--------|--------|
| طراحی مدرن فروشگاهی | ✅ |
| معماری Component-Based | ✅ |
| استفاده از Expo Router | ✅ |
| File Based Navigation | ✅ |
| نمایش دسته‌بندی محصولات | ✅ |
| جستجوی محصولات | ✅ |
| Product Slider | ✅ |
| محصولات جدید | ✅ |
| محصولات تخفیف‌دار | ✅ |
| محصولات برتر | ✅ |
| صفحه جزئیات محصول | ✅ |
| سیستم علاقه‌مندی‌ها (Wishlist) | ✅ |
| سیستم سبد خرید (Cart) | ✅ |
| مدیریت State با Context API | ✅ |
| Custom Hooks | ✅ |
| Product Filtering | ✅ |
| طراحی Responsive | ✅ |

---

## 📱 صفحات برنامه

### 🏠 Home

صفحه اصلی فروشگاه شامل:

- Header
- Search Box
- Categories
- Product Slider
- New Products
- Discounted Products
- Top Rated Products

---

### 📦 Product Details

نمایش اطلاعات کامل محصول:

- تصویر محصول
- نام محصول
- قیمت
- توضیحات
- افزودن به سبد خرید
- افزودن به علاقه‌مندی‌ها

---

### ❤️ Wishlist

مدیریت محصولات مورد علاقه:

امکانات:

- نمایش محصولات ذخیره شده
- حذف محصول از علاقه‌مندی‌ها
- مدیریت اطلاعات با Context API

---

### 🛍 Cart

سبد خرید شامل:

- نمایش محصولات انتخاب شده
- افزایش و کاهش تعداد کالا
- حذف محصول
- محاسبه مجموع خرید

---

## 🛠 تکنولوژی‌های استفاده شده

- **React Native**
- **Expo**
- **Expo Router**
- **JavaScript (ES6+)**
- **JSX**
- **Context API**
- **React Hooks**
- **Custom Hooks**
- **StyleSheet**
- **Flexbox**

---

## 📂 ساختار پروژه

```text
src
│
├── app
│   ├── _layout.jsx
│   ├── ProductInfo.jsx
│   │
│   └── (tabs)
│       ├── _layout.jsx
│       ├── index.jsx
│       ├── Card.jsx
│       ├── Wishlist.jsx
│       └── ProductList.jsx
│
├── components
│   ├── Header.jsx
│   ├── Search.jsx
│   ├── Categories.jsx
│   ├── CategoriesBox.jsx
│   ├── ProductSlider.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── ProductListItem.jsx
│   ├── NewProducts.jsx
│   ├── NewProductCard.jsx
│   ├── DiscountedProducts.jsx
│   ├── DiscountedProductsCard.jsx
│   ├── TopRatedProducts.jsx
│   ├── Wishlist.jsx
│   ├── WishlistItem.jsx
│   ├── CardList.jsx
│   ├── CardListItem.jsx
│   ├── CardAction.jsx
│   ├── CartIcon.jsx
│   └── ProductInfoHeaderRight.jsx
│
├── context
│   ├── CardContext.jsx
│   ├── WishlistContext.jsx
│   └── ProductListContext.jsx
│
├── constants
│   ├── Categories.js
│   └── ProductList.js
│
├── hooks
│   └── useNavigationHelpers.js
│
└── utils
    └── filterProducts.js
```

---

## 🚀 ایجاد پروژه

ایجاد پروژه Expo:

```bash
npx create-expo-app@latest
```

یا:

```bash
npx create-expo-app E-Commerce-App
```

---

## 💻 پیش‌نیازهای نصب

قبل از اجرای پروژه موارد زیر باید نصب باشند:

- [ ] Node.js (LTS)
- [ ] npm
- [ ] Git
- [ ] Visual Studio Code
- [ ] Android Studio
- [ ] Android SDK
- [ ] Java JDK
- [ ] Expo Go

---

## ⚙ راه‌اندازی محیط توسعه

مستندات رسمی React Native:

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

در این مستند نحوه نصب موارد زیر توضیح داده شده است:

- Android Studio
- Android SDK
- Java JDK
- Environment Variables
- Android Emulator
- اجرای پروژه روی موبایل

---

## 📥 دانلود Android Studio

نسخه رسمی:

🔗 [https://developer.android.com/studio](https://developer.android.com/studio)

نسخه جایگزین:

🔗 [https://soft98.ir/mobile/16739-android-studio.html](https://soft98.ir/mobile/16739-android-studio.html)

---

## 📦 نصب Android SDK

بعد از نصب Android Studio:

```
More Actions
        ↓
SDK Manager
```

موارد مورد نیاز:

- Android SDK Platform
- Android SDK Build Tools
- Android SDK Platform Tools
- Android Emulator

ساخت Emulator:

```
Device Manager
        ↓
Create Virtual Device
```

---

## ⚙ نصب وابستگی‌ها

```bash
npm install
```

---

## ▶ اجرای پروژه

### اجرای Expo

```bash
npx expo start
```

### اجرای Android

```bash
npx expo run:android
```

### اجرای iOS

```bash
npx expo run:ios
```

### پاک کردن Cache

```bash
npx expo start -c
```

---

## 📱 اجرای پروژه با Expo Go

۱. نصب **Expo Go** روی موبایل

۲. اتصال موبایل و سیستم به یک شبکه WiFi

۳. اجرای:

```bash
npx expo start
```

۴. اسکن QR Code

---

## 🖥 اجرای پروژه روی Emulator

بعد از ساخت Emulator:

```bash
npx expo start
```

سپس کلید زیر را فشار دهید:

```
a
```

---

## 🎨 طراحی رابط کاربری

ویژگی‌های طراحی:

- Mobile First Design
- Card Based UI
- رابط کاربری ساده و مدرن
- Layout انعطاف‌پذیر
- طراحی قابل توسعه
- تجربه کاربری مناسب فروشگاه

---

## 🏗 معماری پروژه

این پروژه از معماری **Component-Based** استفاده می‌کند.

هر بخش برنامه به Componentهای کوچک تقسیم شده است.

مزایا:

- استفاده مجدد از Componentها
- نگهداری آسان‌تر
- توسعه سریع‌تر
- خوانایی بهتر

نمونه:

```
ProductList

      |
      |

ProductCard
```

---

## 🧭 Navigation

مدیریت صفحات با:

- **Expo Router**
- **File Based Routing**

انجام شده است.

ساختار:

```text
app

├── _layout.jsx

└── (tabs)

    ├── index.jsx

    ├── Card.jsx

    └── Wishlist.jsx
```

---

## 🧠 مدیریت State با Context API

در این پروژه برای مدیریت داده‌ها از **Context API** استفاده شده است.

Contextهای پروژه:

```text
context

├── CardContext.jsx

├── WishlistContext.jsx

└── ProductListContext.jsx
```

وظایف:

- مدیریت سبد خرید
- مدیریت علاقه‌مندی‌ها
- مدیریت محصولات

---

## 🪝 Custom Hooks

برای ساده‌تر کردن Navigation از Hook اختصاصی استفاده شده است.

نمونه:

```javascript
useNavigationHelpers()
```

---

## 🔎 Product Filtering

برای جستجو و فیلتر محصولات از Utility اختصاصی استفاده شده است.

```text
utils

└── filterProducts.js
```

---

## 🎯 اهداف آموزشی پروژه

در این پروژه یاد می‌گیرید:

- ساخت اپلیکیشن فروشگاهی
- Expo Router
- Navigation
- Context API
- State Management
- React Hooks
- Custom Hooks
- Component Architecture
- Product Filtering
- Cart System
- Wishlist System
- Responsive Design

---

## 🚀 توسعه‌های آینده

- [ ] اتصال به API واقعی
- [ ] Backend Integration
- [ ] Authentication
- [ ] پروفایل کاربر
- [ ] تاریخچه سفارشات
- [ ] پرداخت آنلاین
- [ ] Push Notification
- [ ] AsyncStorage
- [ ] فیلتر پیشرفته محصولات
- [ ] Dark Mode
- [ ] Redux / Zustand

---

## ❗ رفع مشکلات

### اجرا نشدن پروژه

```bash
npx expo start -c
```

### نصب مجدد Packageها

**Linux / macOS:**

```bash
rm -rf node_modules
npm install
```

**Windows PowerShell:**

```powershell
Remove-Item node_modules -Recurse -Force
npm install
```

### مشکل Expo Router

```bash
npm install expo-router
```

---

## 📚 منابع آموزشی

### React Native

🔗 [https://reactnative.dev/docs](https://reactnative.dev/docs)

### Expo

🔗 [https://docs.expo.dev](https://docs.expo.dev)

### Expo Router

🔗 [https://docs.expo.dev/router/introduction/](https://docs.expo.dev/router/introduction/)

---

## 🤝 مشارکت

۱. پروژه را **Fork** کنید.
۲. تغییرات خود را اعمال کنید.
۳. **Pull Request** ارسال کنید.

---

## 📄 License

MIT License

---

<div align="center">

⭐ اگر این پروژه برایتان مفید بود، به آن **Star** بدهید.

ساخته شده با ❤️ توسط **React Native + Expo**

</div>