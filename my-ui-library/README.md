# 📦 My UI Mod

My UI Mod adalah **UI Component Library berbasis React** yang dibuat menggunakan **styled-components**.  
Library ini dirancang untuk membantu pembuatan **Design System** yang konsisten, reusable, dan mudah digunakan pada proyek React modern.

---

## ✨ Fitur

- Reusable UI Components
- Styling berbasis variant
- Menggunakan styled-components
- Mendukung Vite & Next.js
- Mendukung ESM & CommonJS

---

## 📥 Instalasi

Install library melalui npm:

Git bash
npm install @firmanarif/my-ui-mod

atau menggunakan yarn:

yarn add @firmanarif/my-ui-mod

Peer Dependency (WAJIB) !!
Library ini menggunakan styled-components sebagai styling engine.
Pastikan sudah terinstall di project kamu:

npm install styled-components
# Jika tidak diinstall, style tidak akan muncul meskipun tidak ada error.

Cara Penggunaan:
Import Komponen:

import { Button, Card } from "@firmanarif/my-ui-mod";

Button Komponen:
<Button>Primary Button</Button>

Variant Button:
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="danger">Danger</Button>
<Button variant="ghost">Ghost</Button>

| Props      | Tipe      | Default     | Keterangan           |
| ---------- | --------- | ----------- | -------------------- |
| `variant`  | string    | `"primary"` | Tipe tampilan button |
| `disabled` | boolean   | `false`     | Menonaktifkan button |
| `onClick`  | function  | -           | Event handler        |
| `children` | ReactNode | -           | Isi button           |

Card Component:
<Card>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>

Variant Card:
<Card variant="bordered">Bordered Card</Card>
<Card variant="elevated">Elevated Card</Card>
<Card variant="gradient">Gradient Card</Card>
<Card variant="dark">Dark Card</Card>
<Card variant="soft">Soft Card</Card>

| Props       | Tipe      | Default      | Keterangan         |
| ----------- | --------- | ------------ | ------------------ |
| `variant`   | string    | `"bordered"` | Tipe tampilan card |
| `className` | string    | -            | Custom class       |
| `children`  | ReactNode | -            | Isi card           |

Contoh Penggunaan di Vite:
import { Button, Card } from "@firmanarif/my-ui-mod";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Card variant="elevated">
        <h2>My UI Mod</h2>
        <Button variant="primary">Klik Saya</Button>
      </Card>
    </div>
  );
}

export default App;

Contoh penggunaan di Next.JS (App Router):
"use client";

import { Button, Card } from "@firmanarif/my-ui-mod";

export default function Page() {
  return (
    <Card variant="soft">
      <h1>Hello Next.js</h1>
      <Button>Submit</Button>
    </Card>
  );
}

# Catatan Penting Next.js
# Gunakan "use client"; karena styled-components berjalan di sisi client.

MIT License
© 2026 — Firman Arif