# Integrasi API ke Homepage - Testing Guide

## 🎯 **Objective**
Mengintegrasikan data dari MockAPI ke homepage agar data yang ditambahkan di CRUD page otomatis muncul di homepage.

## ✅ **Changes Made**

### 1. **HomePage.js Updates**
- ✅ Replace `useCourseContext` dengan `useUsers` hook
- ✅ Add loading state dan error handling
- ✅ Add course counter badge
- ✅ Add navigation link ke CRUD page
- ✅ Add empty state handling

### 2. **New Features**
- **Real-time Sync**: Data dari API langsung muncul di homepage
- **Loading States**: Spinner saat data loading
- **Error Handling**: Error message jika API gagal
- **Course Counter**: Menampilkan jumlah kursus tersedia
- **Navigation**: Tombol "Kelola Kursus" ke CRUD page
- **Empty State**: Pesan jika belum ada data

## 🧪 **Testing Steps**

### Test 1: Data Sync
1. Buka `http://localhost:3000` (homepage)
2. Buka tab baru `http://localhost:3000/crud` (CRUD page)
3. Di CRUD page, tambah kursus baru
4. Kembali ke homepage dan refresh
5. **Expected**: Kursus baru muncul di homepage

### Test 2: Real-time Updates
1. Buka homepage
2. Di tab lain, buka CRUD page
3. Tambah/edit/hapus kursus
4. **Expected**: Perubahan terlihat setelah refresh homepage

### Test 3: Loading States
1. Buka homepage
2. Perhatikan loading spinner
3. **Expected**: Spinner muncul saat data loading

### Test 4: Error Handling
1. Matikan koneksi internet
2. Refresh homepage
3. **Expected**: Error message muncul

### Test 5: Empty State
1. Hapus semua data di CRUD page
2. Refresh homepage
3. **Expected**: "Belum ada kursus yang tersedia"

## 📊 **Expected UI Elements**

### Homepage Header Section:
```
Koleksi Video Pembelajaran Unggulan
Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!

[3 Kursus Tersedia] [Kelola Kursus]
```

### Course Grid:
- Loading spinner saat fetch data
- Course cards dengan data dari API
- Empty state jika tidak ada data

## 🔍 **Console Logs Expected**
```
HomePage courses: [{id: 1, title: "...", ...}, ...]
API Request: GET /courses
API Response: 200 /courses
```

## ✅ **Success Criteria Checklist**
- [ ] Data dari API muncul di homepage
- [ ] Loading state berfungsi
- [ ] Error handling berfungsi
- [ ] Course counter update otomatis
- [ ] Navigation ke CRUD page berfungsi
- [ ] Empty state muncul jika tidak ada data
- [ ] Real-time sync antara CRUD dan homepage

## 🚀 **Advanced Testing**

### Test Navigation Flow:
1. Homepage → Click "Kelola Kursus" → CRUD page
2. CRUD page → Add course → Homepage
3. Homepage → Course count updated

### Test Data Persistence:
1. Add course di CRUD page
2. Refresh browser
3. **Expected**: Data tetap ada di kedua halaman

### Test Performance:
1. Buka homepage
2. Cek loading time
3. **Expected**: Loading cepat dengan spinner

## 🎉 **Final Verification**
Setelah semua test selesai:
- Homepage dan CRUD page terintegrasi sempurna
- Data sync otomatis
- User experience yang smooth
- Error handling yang baik

**Aplikasi siap digunakan dengan fitur CRUD yang terintegrasi ke homepage!**
