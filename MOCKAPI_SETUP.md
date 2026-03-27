# Panduan Setup MockAPI dan Testing Aplikasi

## 1. Setup MockAPI.io

### Langkah 1: Buat Akun MockAPI
1. Buka https://mockapi.io/
2. Sign up dengan GitHub atau email
3. Verifikasi email Anda

### Langkah 2: Buat Project Baru
1. Klik "New Project"
2. Beri nama project (contoh: "react-course-app")
3. Klik "Create"

### Langkah 3: Buat Resource/Endpoint
1. Dalam project, klik "New Resource"
2. Isi form:
   - **Resource name**: `courses`
   - **Schema**: Tambahkan field berikut:
     ```json
     {
       "title": "string",
       "description": "string", 
       "instructor": "string",
       "instructorTitle": "string",
       "rating": "number",
       "price": "string",
       "image": "string",
       "instructorImage": "string"
     }
     ```
3. Klik "Create Resource"

### Langkah 4: Dapatkan URL Endpoint
Setelah resource dibuat, Anda akan dapatkan URL seperti:
```
https://[project-id].mockapi.io/courses
```

## 2. Update Konfigurasi Aplikasi

### Update .env file
Buka file `.env` dan ganti dengan URL MockAPI Anda:
```
REACT_APP_API_BASE_URL=https://[project-id].mockapi.io
```

### Update userService endpoint
Pastikan file `src/services/api/userService.js` menggunakan endpoint yang benar:
```javascript
const API_ENDPOINT = '/courses'; // bukan '/users'
```

## 3. Testing Aplikasi

### Test 1: GET Data (Membaca Data)
1. Buka aplikasi di http://localhost:3000/crud
2. Cek console browser untuk API request logs
3. Seharusnya ada data awal dari MockAPI

### Test 2: POST Data (Menambah Data)
1. Klik tombol "+ Tambah Kursus"
2. Isi form dengan data:
   - Judul: "React Advanced"
   - Deskripsi: "Pembelajaran React lanjutan"
   - Instruktur: "John Doe"
   - Jabatan: "Senior Developer"
   - Rating: 4.5
   - Harga: "Rp 500K"
   - Image: "https://via.placeholder.com/300x200"
   - Instructor Image: "https://via.placeholder.com/100x100"
3. Klik "Simpan"
4. Cek apakah data muncul di tabel

### Test 3: PUT Data (Update Data)
1. Klik tombol "Edit" pada salah satu data
2. Ubah beberapa field
3. Klik "Update"
4. Cek apakah perubahan tersimpan

### Test 4: DELETE Data (Hapus Data)
1. Klik tombol "Hapus" pada salah satu data
2. Konfirmasi dialog
3. Cek apakah data terhapus dari tabel

## 4. Verifikasi dengan Browser DevTools

### Buka DevTools
1. Klik F12 atau Ctrl+Shift+I
2. Buka tab "Network"
3. Filter dengan "Fetch/XHR"

### Cek API Calls
- **GET**: `/courses` - saat load halaman
- **POST**: `/courses` - saat tambah data
- **PUT**: `/courses/[id]` - saat update data
- **DELETE**: `/courses/[id]` - saat hapus data

### Cek Console Logs
Seharusnya ada log seperti:
```
API Request: GET /courses
API Response: 200 /courses
```

## 5. Troubleshooting

### Error CORS
Jika ada error CORS, pastikan:
- URL di .env benar
- MockAPI project sudah dibuat dengan benar

### Error 404
Pastikan:
- Endpoint name di userService sesuai dengan resource name di MockAPI
- URL base di .env benar

### Error 500
Cek:
- Schema di MockAPI sesuai dengan data yang dikirim
- Field name tidak typo

## 6. Success Criteria

Aplikasi dianggap berhasil jika:
- ✅ Data bisa diambil dari API (GET)
- ✅ Data baru bisa ditambah (POST)
- ✅ Data existing bisa diupdate (PUT)
- ✅ Data bisa dihapus (DELETE)
- ✅ Loading state muncul saat API call
- ✅ Error handling berjalan dengan baik
- ✅ Statistics update otomatis

## 7. Additional Testing

### Test Error Handling
1. Matikan koneksi internet
2. Coba tambah data
3. Seharusnya muncul error message

### Test Loading State
1. Perhatikan tombol "Simpan" saat diklik
2. Seharusnya berubah menjadi "Menyimpan..." dan disabled

### Test Empty State
1. Hapus semua data
2. Seharusnya muncul "Tidak ada data kursus"
