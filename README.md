Berikut adalah versi README yang siap Anda gunakan untuk GitHub, sudah disesuaikan dengan nama dan NIM baru:


# Go Chat - Eksperimen Aplikasi Chat Real-Time dengan WebSocket 🚀

## 📋 Informasi Mahasiswa

| Nama                    | NIM        | Mata Kuliah           | Keterangan               |
|-------------------------|------------|------------------------|---------------------------|
| Dhiyaulhaq Al Maududi   | 312310508  | Pemrograman Web 2      | Ujian Tengah Semester     |

## 📝 Pendahuluan

Di era digital saat ini, kebutuhan akan aplikasi real-time semakin meningkat, khususnya dalam layanan komunikasi seperti chat.  
Salah satu teknologi utama yang mendukung komunikasi dua arah secara instan adalah **WebSocket**.

Eksperimen ini bertujuan untuk mempelajari pemanfaatan WebSocket dalam membangun aplikasi chat interaktif menggunakan **Node.js** dan **JavaScript**.  
Melalui eksperimen ini, diharapkan pengembang mampu memahami prinsip komunikasi dua arah yang efisien tanpa metode polling tradisional.

**Go Chat** merupakan aplikasi hasil eksperimen dalam membangun sistem **chat real-time** menggunakan WebSocket sebagai teknologi utamanya.

## 🎯 Tujuan Eksperimen

- Memahami konsep WebSocket dalam pengembangan aplikasi web.
- Membangun server WebSocket sederhana menggunakan Node.js.
- Mengembangkan aplikasi chat multi-user yang berjalan secara real-time.

## 📚 Deskripsi Proyek

Fitur utama aplikasi ini meliputi:

- Bergabung ke ruang obrolan.
- Mengirim dan menerima pesan secara instan.
- Mengetahui siapa saja yang sedang online.
- Menambahkan emoji ke dalam pesan.

Semua komunikasi berlangsung secara langsung melalui WebSocket, tanpa reload halaman.

## 🛠️ Teknologi yang Digunakan

- **Frontend**: HTML5, CSS3, JavaScript murni
- **Backend**: Node.js + `ws` (WebSocket library)
- **Library Tambahan**: Font Awesome (untuk ikon)

````
Install dependensi:

```bash
npm install ws
```

Jalankan server:

```bash
node server.js
```

Buka file `index.html` di browser Anda.

> Pastikan server aktif di `ws://localhost:8080` sebelum membuka aplikasi.

## ✨ Fitur Aplikasi

* Komunikasi real-time antar banyak pengguna.
* Notifikasi ketika pengguna masuk dan keluar.
* Jumlah pengguna online ditampilkan secara dinamis.
* Emoji picker untuk memperkaya pesan.
* Auto reconnect jika koneksi WebSocket terputus.

## 📖 Hasil Eksperimen

-  ![Screenshot 2025-05-10 233407](https://github.com/user-attachments/assets/c83f5117-d53d-43ff-bc08-491c62528cd5)
-  ![Screenshot 2025-05-10 233322](https://github.com/user-attachments/assets/e36094d7-36a0-4d87-9bd3-6b417ec979e6)
-  ![Screenshot 2025-05-10 233315](https://github.com/user-attachments/assets/94232466-d626-457c-981f-384c9f890e11)


* WebSocket terbukti mendukung komunikasi real-time tanpa polling.
* Penggunaan event `onopen`, `onmessage`, dan `onclose` efektif dalam pengelolaan koneksi.
* Server menggunakan struktur `Map` untuk mengelola sesi pengguna secara sementara.

## 📜 Catatan Tambahan

* Server berjalan di port `8080`.
* Aplikasi ini belum terintegrasi dengan database; seluruh data bersifat sementara.

## 📋 Lisensi

Repositori ini dibuat untuk keperluan **eksperimen** dan **pembelajaran**.
Silakan gunakan dan modifikasi sesuai kebutuhan Anda.
